import type { APIRoute } from 'astro';

export const prerender = false;

// This should match the Pro plugin version
const CURRENT_VERSION = '1.0.0';
const PLUGIN_SLUG = 'wp-accessibility-scanner-pro';

export const GET: APIRoute = async ({ request, url }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=3600',
  };

  const licenseKey = url.searchParams.get('license') || '';
  const siteUrl = url.searchParams.get('site') || '';

  // Plugin Update Checker expects this format
  const updateInfo = {
    name: 'Accessibility Scanner Pro – WCAG Compliance',
    slug: PLUGIN_SLUG,
    version: CURRENT_VERSION,
    author: '<a href="https://wooplugin.pro">WooPlugin</a>',
    author_profile: 'https://wooplugin.pro',
    homepage: 'https://wooplugin.pro/accessibility-scanner',
    requires: '6.0',
    tested: '6.7',
    requires_php: '8.0',
    last_updated: new Date().toISOString().split('T')[0],
    sections: {
      description: 'Scan your WordPress site for WCAG 2.2 accessibility issues. Full site crawl, scheduled scans, PDF reports, Level AA checks, and more.',
      changelog: `
        <h4>1.0.0</h4>
        <ul>
          <li>Initial release</li>
          <li>32 WCAG checks (22 Level A + 10 Level AA)</li>
          <li>Full site crawl</li>
          <li>Scheduled scans</li>
          <li>PDF compliance reports</li>
          <li>Score monitoring and alerts</li>
          <li>Bulk fix</li>
        </ul>
      `.trim(),
    },
    download_url: '',
  };

  // Only provide download URL if license is provided
  if (licenseKey) {
    updateInfo.download_url = `https://wooplugin.pro/api/plugins/accessibility-pro/download?license=${encodeURIComponent(licenseKey)}&site=${encodeURIComponent(siteUrl)}`;
  } else {
    (updateInfo as any).upgrade_notice = 'A valid license is required to download updates. Enter your license key in the plugin settings.';
  }

  return new Response(JSON.stringify(updateInfo, null, 2), {
    status: 200,
    headers: corsHeaders,
  });
};
