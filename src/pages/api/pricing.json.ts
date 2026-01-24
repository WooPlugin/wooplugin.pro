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

    // Pro features list (shown in plugin sidebar)
    features: [
      'Scheduled feed updates (hourly/daily)',
      'Auto-regenerate on product save',
      'Facebook/Meta Catalog feed',
      'Pinterest, TikTok, Bing, Snapchat feeds',
      'Advanced product fields (color, size, etc.)',
      'Category mapping to Google taxonomy',
      'Advanced filters & custom labels',
      'Priority email support',
    ],

    // Full feature categories (for Pro page)
    featureCategories: {
      automation: {
        title: 'Automation',
        features: [
          'Scheduled feed updates (hourly/daily/weekly)',
          'Auto-regenerate when products change',
          'WP-Cron based scheduling',
        ],
      },
      feeds: {
        title: 'Multi-Channel Feeds',
        features: [
          'Google Shopping',
          'Facebook/Meta Catalog',
          'Pinterest Catalog',
          'TikTok Catalog',
          'Bing Shopping',
          'Snapchat Catalog',
        ],
      },
      fields: {
        title: 'Advanced Product Fields',
        features: [
          'Google Product Category (with autocomplete)',
          'Age Group, Gender, Color, Size',
          'Material, Pattern',
          'Custom Labels 0-4 for campaigns',
        ],
      },
      filters: {
        title: 'Advanced Filters',
        features: [
          'Exclude by category or tag',
          'Filter by price range',
          'Filter by stock status',
          'Include/exclude specific products',
        ],
      },
    },

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
