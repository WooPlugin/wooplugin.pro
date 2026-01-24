import type { APIRoute } from 'astro';

export const prerender = false;

// This should match the Pro plugin version
const CURRENT_VERSION = '1.0.0';
const PLUGIN_SLUG = 'product-feed-woocommerce-pro';

export const GET: APIRoute = async ({ request, url }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=3600',
  };

  const licenseKey = url.searchParams.get('license') || '';
  const siteUrl = url.searchParams.get('site') || '';

  // Build update info
  // Plugin Update Checker expects this format
  const updateInfo = {
    name: 'Product Feed for WooCommerce Pro',
    slug: PLUGIN_SLUG,
    version: CURRENT_VERSION,
    author: '<a href="https://wooplugin.pro">WooPlugin</a>',
    author_profile: 'https://wooplugin.pro',
    homepage: 'https://wooplugin.pro/google-shopping-pro',
    requires: '6.0',
    tested: '6.7',
    requires_php: '8.0',
    last_updated: new Date().toISOString().split('T')[0],
    sections: {
      description: 'Generate product feeds for Google Shopping, Facebook/Meta, Pinterest, TikTok, Bing, and Snapchat. Includes scheduling, auto-updates, and advanced product fields.',
      changelog: `
        <h4>1.0.0</h4>
        <ul>
          <li>Initial release</li>
          <li>Multi-channel feed support</li>
          <li>Scheduled feed updates</li>
          <li>Advanced product fields</li>
          <li>Category mapping</li>
        </ul>
      `.trim(),
    },
    download_url: '',
  };

  // Only provide download URL if license is provided
  // The actual license validation happens at download time
  if (licenseKey) {
    updateInfo.download_url = `https://wooplugin.pro/api/plugins/pro/download?license=${encodeURIComponent(licenseKey)}&site=${encodeURIComponent(siteUrl)}`;
  } else {
    // No license - include upgrade notice
    (updateInfo as any).upgrade_notice = 'A valid license is required to download updates. Enter your license key in the plugin settings.';
  }

  return new Response(JSON.stringify(updateInfo, null, 2), {
    status: 200,
    headers: corsHeaders,
  });
};
