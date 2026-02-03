// Single source of truth for pricing and promotions
// Used by: /api/pricing.json and /google-shopping-pro

export interface Promotion {
  title: string;
  message: string;
  code: string;
  discount: number;
  expires: string;
  style: 'highlight' | 'subtle' | 'urgent';
}

export interface PricingConfig {
  pro: {
    price: number;
    monthly: number;
    variantId: string;
  };
  agency: {
    price: number;
    monthly: number;
    variantId: string;
  };
  checkoutBaseUrl: string;
  promotion: Promotion | null;
  features: string[];
  featureCategories: {
    automation: { title: string; features: string[] };
    feeds: { title: string; features: string[] };
    fields: { title: string; features: string[] };
    filters: { title: string; features: string[] };
  };
}

// LemonSqueezy checkout UUIDs
// Test mode:  Pro: 4adfa24d-5083-4cef-82d7-685e1106a6ad, Agency: d246c2b8-f8a7-41dd-831c-fe4a51199fc0
// Live mode:  Pro: 15e2235c-cd1e-45e1-bca1-bee51766170a, Agency: 92bb41b5-349f-49f0-bd03-664baab553b2
// Set LEMONSQUEEZY_TEST_MODE=true in .env for local testing
const LEMONSQUEEZY_TEST_MODE = import.meta.env.LEMONSQUEEZY_TEST_MODE === 'true';

export const pricing: PricingConfig = {
  checkoutBaseUrl: 'https://shop.wooplugin.pro/checkout/buy',
  pro: {
    price: 79,
    monthly: 7,
    variantId: LEMONSQUEEZY_TEST_MODE ? '4adfa24d-5083-4cef-82d7-685e1106a6ad' : '15e2235c-cd1e-45e1-bca1-bee51766170a',
  },
  agency: {
    price: 299,
    monthly: 25,
    variantId: LEMONSQUEEZY_TEST_MODE ? 'd246c2b8-f8a7-41dd-831c-fe4a51199fc0' : '92bb41b5-349f-49f0-bd03-664baab553b2',
  },

  // Set to null to disable promotion
  promotion: null,
  // promotion: {
  //   title: 'Launch Sale',
  //   message: 'Get 25% off Pro - limited time!',
  //   code: 'LAUNCH25',
  //   discount: 25,
  //   expires: '2026-02-28',
  //   style: 'urgent',
  // },

  features: [
    'Multi-channel: Facebook, Pinterest, TikTok, Bing, Snapchat',
    'Scheduled feed updates (hourly/daily/weekly)',
    'Auto-regenerate on product changes',
    'Smart Auto-fill from product data',
    'Google Product Category with autocomplete',
    'Category Mapping for bulk assignment',
    'Advanced filters (category, tag, price)',
    'Custom Labels 0-4 for campaigns',
    'Priority email support',
  ],

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
};

// Helper to get checkout URL for a plan
export function getCheckoutUrl(config: PricingConfig, plan: 'pro' | 'agency'): string {
  return `${config.checkoutBaseUrl}/${config[plan].variantId}`;
}

// Helper to calculate discounted prices
export function getDiscountedPrices(config: PricingConfig) {
  const discount = config.promotion?.discount || 0;
  return {
    proPrice: Math.round(config.pro.price * (1 - discount / 100)),
    proMonthly: Math.round((config.pro.price * (1 - discount / 100)) / 12),
    agencyPrice: Math.round(config.agency.price * (1 - discount / 100)),
    agencyMonthly: Math.round((config.agency.price * (1 - discount / 100)) / 12),
  };
}

