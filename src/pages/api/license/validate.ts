import type { APIRoute } from 'astro';

export const prerender = false;

const LEMONSQUEEZY_API_KEY = import.meta.env.LEMONSQUEEZY_API_KEY;

interface LemonSqueezyResponse {
  valid: boolean;
  error?: string;
  license_key?: {
    id: number;
    status: string;
    key: string;
    activation_limit: number;
    activation_usage: number;
    created_at: string;
    expires_at: string | null;
  };
  instance?: {
    id: string;
    name: string;
    created_at: string;
  };
  meta?: {
    store_id: number;
    order_id: number;
    product_id: number;
    product_name: string;
    variant_id: number;
    variant_name: string;
    customer_id: number;
    customer_name: string;
    customer_email: string;
  };
}

export const POST: APIRoute = async ({ request }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const body = await request.json();
    const { license_key, instance_name } = body;

    if (!license_key) {
      return new Response(JSON.stringify({
        success: false,
        error: 'License key is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Validate with LemonSqueezy
    const lsResponse = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        license_key,
        instance_name: instance_name || 'default',
      }),
    });

    const lsData: LemonSqueezyResponse = await lsResponse.json();

    if (!lsData.valid) {
      return new Response(JSON.stringify({
        success: false,
        error: lsData.error || 'Invalid license key',
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // License is valid - return success with download URL
    const downloadToken = generateDownloadToken(license_key);

    return new Response(JSON.stringify({
      success: true,
      license: {
        status: lsData.license_key?.status,
        expires_at: lsData.license_key?.expires_at,
        activation_limit: lsData.license_key?.activation_limit,
        activation_usage: lsData.license_key?.activation_usage,
      },
      download_url: `https://wooplugin.pro/api/plugins/pro/download?token=${downloadToken}&license=${encodeURIComponent(license_key)}`,
      product: {
        name: lsData.meta?.product_name,
        variant: lsData.meta?.variant_name,
      },
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('License validation error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to validate license'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

/**
 * Generate a simple time-limited download token
 * In production, use a proper JWT or signed URL
 */
function generateDownloadToken(licenseKey: string): string {
  const timestamp = Math.floor(Date.now() / 1000);
  const expiry = timestamp + 3600; // 1 hour
  const secret = import.meta.env.DOWNLOAD_TOKEN_SECRET || 'default-secret';

  // Simple hash - in production use crypto.subtle or a JWT library
  const data = `${licenseKey}:${expiry}:${secret}`;
  const hash = simpleHash(data);

  return Buffer.from(`${expiry}:${hash}`).toString('base64url');
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
