// Single source of truth for Accessibility Scanner Pro pricing
// Used by: /accessibility-scanner and /api/pricing.json

export interface AccessibilityPricingConfig {
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
  features: string[];
}

// LemonSqueezy checkout UUIDs
// Live mode:  Pro: ecd31113-..., Agency: 17079cc0-...
// Test mode:  TODO (create test products on LemonSqueezy if needed)
const LEMONSQUEEZY_TEST_MODE = import.meta.env.LEMONSQUEEZY_TEST_MODE === 'true';

export const accessibilityPricing: AccessibilityPricingConfig = {
  checkoutBaseUrl: 'https://shop.wooplugin.pro/checkout/buy',
  pro: {
    price: 99,
    monthly: 8,
    variantId: LEMONSQUEEZY_TEST_MODE ? '96684cb0-700c-4c1c-8d3a-d28b3b3ce452' : 'ecd31113-1da8-4d6f-bc7e-ba5def5757a2',
  },
  agency: {
    price: 249,
    monthly: 21,
    variantId: LEMONSQUEEZY_TEST_MODE ? 'b0934365-16ae-4604-9921-259dc16ac967' : '17079cc0-a01d-4ede-9b3a-ed782ed8b121',
  },

  features: [
    'Full site crawl — scan every page automatically',
    'WCAG 2.2 Level AA checks (30+ total)',
    'Scheduled auto-scans (daily/weekly/monthly)',
    'PDF compliance reports',
    'Score monitoring & alerts (email + Slack)',
    'Bulk fix — fix multiple issues at once',
    'Priority email support',
  ],
};

export function getAccessibilityCheckoutUrl(plan: 'pro' | 'agency'): string {
  return `${accessibilityPricing.checkoutBaseUrl}/${accessibilityPricing[plan].variantId}`;
}
