import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const pricing = {
    version: '1.0',
    updated: new Date().toISOString(),

    // Current pricing
    pro: {
      price: 79,
      display: '$7/mo',
      period: 'Billed at $79/year',
      url: 'https://wooplugin.pro/google-shopping-pro',
    },
    agency: {
      price: 299,
      display: '$25/mo',
      period: 'Billed at $299/year',
      url: 'https://wooplugin.pro/google-shopping-pro',
    },

    // Pro features list
    features: [
      'Scheduled feed updates (hourly/daily)',
      'Auto-regenerate on product save',
      'Facebook/Meta Catalog feed',
      'Pinterest feed',
      'TikTok Catalog feed',
      'Bing Shopping feed',
      'Snapchat Catalog feed',
      'Priority email support',
    ],

    // Optional promotion (null if no active promo)
    promotion: {
      title: 'Launch Sale',
      message: 'Get 25% off Pro - limited time!',
      code: 'LAUNCH25',
      discount: 25,
      expires: '2026-02-28',
      style: 'urgent',
    },
  };

  return new Response(JSON.stringify(pricing, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // 1 hour cache
      'Access-Control-Allow-Origin': '*',
    },
  });
};
