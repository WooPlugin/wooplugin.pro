---
title: Bing Shopping
description: Set up product feeds for Microsoft Advertising (Bing Shopping).
---

## Overview

Microsoft Advertising (formerly Bing Ads) powers shopping ads across Bing, MSN, Yahoo, and other Microsoft properties. This guide covers setting up feeds for Bing Shopping.

## Creating a Bing Feed

1. Go to **WooCommerce → Product Feeds Pro**
2. Click **Add New Feed**
3. Select **Bing Shopping** as the feed type
4. Configure your settings
5. Click **Generate Feed**

The plugin generates feeds in the format Microsoft Advertising expects.

## Required Fields

| Field | Description | Source |
|-------|-------------|--------|
| id | Unique product ID (max 50 chars) | SKU or product ID |
| title | Product name (max 150 chars) | Product title |
| link | Product page URL | Permalink |
| price | Price with currency | Product price |
| description | Product details | Product description |
| image_link | Main product image | Featured image |
| shipping | Shipping information | WooCommerce settings |

## Recommended Fields

| Field | Description |
|-------|-------------|
| brand | Brand name |
| gtin | UPC, EAN, ISBN |
| mpn | Manufacturer part number |
| product_category | Bing product category |
| condition | new, refurbished, used |
| availability | in stock, out of stock, preorder |
| sale_price | Discounted price |
| sale_price_effective_date | Sale date range |
| additional_image_link | Extra product images |

## Microsoft Advertising Setup

### Create a Merchant Center Store

1. Sign in to [Microsoft Advertising](https://ads.microsoft.com)
2. Go to **Tools → Merchant Center**
3. Click **Create Store**
4. Enter your store details:
   - Store name
   - Website URL
   - Contact email
5. Verify your website domain

### Website Verification

Choose a verification method:

- **UET tag**: Add the Universal Event Tracking tag to your site
- **Meta tag**: Add a meta tag to your homepage
- **CNAME record**: Add a DNS record

### Add Your Feed

1. In Merchant Center, go to **Feeds**
2. Click **Create feed**
3. Configure feed settings:
   - Feed name
   - Country/region
   - Language
   - Currency
4. Choose **Scheduled fetch** for input method
5. Paste your feed URL
6. Set fetch frequency
7. Click **Create**

## Shopping Campaigns

### Creating a Shopping Campaign

1. In Microsoft Advertising, click **Create campaign**
2. Select **Shopping** as the campaign type
3. Choose your Merchant Center store
4. Set your budget and bidding strategy
5. Create product groups
6. Launch

### Product Groups

Organize products for different bids:

- By brand
- By category
- By price range
- By custom labels

### Bid Strategies

| Strategy | Best For |
|----------|----------|
| Manual CPC | Full control over bids |
| Enhanced CPC | Balance of control and automation |
| Maximize clicks | Traffic-focused campaigns |
| Target ROAS | Revenue-focused campaigns |

## Import from Google

If you already use Google Merchant Center, you can import:

1. In Microsoft Advertising, go to **Import**
2. Select **Import from Google Ads**
3. Connect your Google account
4. Choose what to import (campaigns, feeds, etc.)
5. Review and import

Your Google Shopping feed can work for Bing, but the plugin creates an optimized Bing-specific feed.

## Bing vs Google Differences

| Aspect | Bing | Google |
|--------|------|--------|
| Shipping | Required | Recommended |
| GTIN | Highly recommended | Required for known brands |
| Category | Optional but helpful | Strongly recommended |
| Audience | Different demographics | Larger but different |

Bing often has lower CPCs and less competition, making it valuable for diversifying your advertising.

## Feed Optimization

### Title Best Practices

- Include brand, product type, key attributes
- Put important keywords first
- Keep under 150 characters
- Be specific and descriptive

### Description Guidelines

- Unique, accurate descriptions
- Include key product details
- Avoid promotional language
- Max 5000 characters

### Image Requirements

- Minimum 220x220 pixels
- Recommended 1200x1200
- No watermarks or promotional text
- Product should fill most of the image

## Troubleshooting

### Feed Processing Errors

Check Merchant Center for specific issues:

1. Go to **Feeds → Your Feed**
2. Review the processing report
3. Common errors:
   - Missing shipping information
   - Invalid URLs
   - Price/currency format issues

### Products Disapproved

Check each product's status:

- Policy violations
- Missing required attributes
- Quality issues

### Low Impressions

- Ensure competitive bids
- Check product targeting
- Verify category mapping
- Review search term relevance
