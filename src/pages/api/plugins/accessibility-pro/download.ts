import type { APIRoute } from 'astro';

export const prerender = false;

const CURRENT_VERSION = '1.0.0';
const GITHUB_REPO = 'WooPlugin/accessibility-scanner-pro';

export const GET: APIRoute = async ({ request, url }) => {
  const licenseKey = url.searchParams.get('license') || '';
  const siteUrl = url.searchParams.get('site') || '';
  const token = url.searchParams.get('token') || '';

  // Must have either a valid license or a valid token
  if (!licenseKey && !token) {
    return new Response(JSON.stringify({
      success: false,
      error: 'License key is required'
    }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Validate the license with LemonSqueezy
    if (licenseKey) {
      const isValid = await validateLicense(licenseKey, siteUrl);

      if (!isValid) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid or expired license'
        }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } else if (token) {
      const isValidToken = validateDownloadToken(token, licenseKey);
      if (!isValidToken) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid or expired download token'
        }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // License is valid - fetch from GitHub release
    const githubToken = import.meta.env.GITHUB_TOKEN;
    const releaseUrl = `https://api.github.com/repos/${GITHUB_REPO}/releases/tags/v${CURRENT_VERSION}`;

    const releaseResponse = await fetch(releaseUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'WooPlugin-Update-Server',
        ...(githubToken ? { 'Authorization': `token ${githubToken}` } : {}),
      },
    });

    if (!releaseResponse.ok) {
      console.error('GitHub release fetch failed:', releaseResponse.status);
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to fetch release information'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const releaseData = await releaseResponse.json();

    // Find the ZIP asset
    const zipAsset = releaseData.assets?.find((asset: any) =>
      asset.name.endsWith('.zip') && asset.name.includes('accessibility-scanner')
    );

    if (!zipAsset) {
      // Fallback to zipball_url if no release asset
      const downloadUrl = releaseData.zipball_url;

      if (githubToken) {
        const zipResponse = await fetch(downloadUrl, {
          headers: {
            'Authorization': `token ${githubToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'WooPlugin-Update-Server',
          },
        });

        if (!zipResponse.ok) {
          return new Response(JSON.stringify({
            success: false,
            error: 'Failed to download plugin'
          }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        return new Response(zipResponse.body, {
          status: 200,
          headers: {
            'Content-Type': 'application/zip',
            'Content-Disposition': `attachment; filename="wp-accessibility-scanner-pro-${CURRENT_VERSION}.zip"`,
          },
        });
      }

      return Response.redirect(downloadUrl, 302);
    }

    // Download the release asset
    const assetUrl = zipAsset.browser_download_url;

    if (!githubToken) {
      return Response.redirect(assetUrl, 302);
    }

    // For private repos, proxy the download
    const assetResponse = await fetch(zipAsset.url, {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/octet-stream',
        'User-Agent': 'WooPlugin-Update-Server',
      },
    });

    if (!assetResponse.ok) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to download plugin'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(assetResponse.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${zipAsset.name}"`,
      },
    });

  } catch (error) {
    console.error('Download error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to process download'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

async function validateLicense(licenseKey: string, siteUrl: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        license_key: licenseKey,
        instance_name: siteUrl || 'unknown',
      }),
    });

    const data = await response.json();
    return data.valid === true;
  } catch {
    return false;
  }
}

function validateDownloadToken(token: string, licenseKey: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64url').toString();
    const [expiryStr, hash] = decoded.split(':');
    const expiry = parseInt(expiryStr, 10);

    if (Date.now() / 1000 > expiry) {
      return false;
    }

    const secret = import.meta.env.DOWNLOAD_TOKEN_SECRET || 'default-secret';
    const data = `${licenseKey}:${expiry}:${secret}`;
    const expectedHash = simpleHash(data);

    return hash === expectedHash;
  } catch {
    return false;
  }
}

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}
