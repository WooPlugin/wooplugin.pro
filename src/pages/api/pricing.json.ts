import type { APIRoute } from 'astro';
import { pricing } from '../../config/pricing';

export const GET: APIRoute = async () => {
  const response = {
    version: '1.0',
    updated: new Date().toISOString(),

    pro: {
      price: pricing.pro.price,
      display: `$${pricing.pro.monthly}/mo`,
      period: `Billed at $${pricing.pro.price}/year`,
      url: 'https://wooplugin.pro/google-shopping-pro',
    },
    agency: {
      price: pricing.agency.price,
      display: `$${pricing.agency.monthly}/mo`,
      period: `Billed at $${pricing.agency.price}/year`,
      url: 'https://wooplugin.pro/google-shopping-pro',
    },

    features: pricing.features,
    featureCategories: pricing.featureCategories,
    promotion: pricing.promotion,
  };

  return new Response(JSON.stringify(response, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
