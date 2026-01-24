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
  };
  agency: {
    price: number;
    monthly: number;
  };
  promotion: Promotion | null;
  features: string[];
  featureCategories: {
    automation: { title: string; features: string[] };
    feeds: { title: string; features: string[] };
    fields: { title: string; features: string[] };
    filters: { title: string; features: string[] };
  };
}

export const pricing: PricingConfig = {
  pro: {
    price: 79,
    monthly: 7,
  },
  agency: {
    price: 299,
    monthly: 25,
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
    'Scheduled feed updates (hourly/daily)',
    'Auto-regenerate on product save',
    'Facebook/Meta Catalog feed',
    'Pinterest, TikTok, Bing, Snapchat feeds',
    'Advanced product fields (color, size, etc.)',
    'Category mapping to Google taxonomy',
    'Advanced filters & custom labels',
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
