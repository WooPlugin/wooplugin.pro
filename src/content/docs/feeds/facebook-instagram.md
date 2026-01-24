---
title: Facebook & Instagram Shopping
description: Create product catalogs for Facebook and Instagram Shops.
---

## Overview

Facebook and Instagram use a shared product catalog system. Once you set up your catalog, products are available for both Facebook Shopping and Instagram Shopping.

## Creating a Facebook Feed

1. Go to **WooCommerce → Product Feeds Pro**
2. Click **Add New Feed**
3. Select **Facebook / Instagram** as the feed type
4. Configure your settings
5. Click **Generate Feed**

## Required Fields

| Field | Description | Source |
|-------|-------------|--------|
| id | Unique identifier | SKU or product ID |
| title | Product name | Product title |
| description | Product details | Product description |
| availability | in stock, out of stock | Stock status |
| condition | new, refurbished, used | Plugin settings |
| price | Price with currency code | Product price |
| link | Product URL | Permalink |
| image_link | Product image URL | Featured image |
| brand | Brand name | Product Feed fields |

## Recommended Fields

| Field | Description |
|-------|-------------|
| gtin | Barcode (UPC, EAN, ISBN) |
| mpn | Manufacturer part number |
| google_product_category | Product category |
| sale_price | Discounted price |
| sale_price_effective_date | Sale date range |
| additional_image_link | Extra product images |
| size | Product size |
| color | Product color |
| gender | Target gender |
| age_group | Target age group |

## Setting Up Commerce Manager

### Create a Catalog

1. Go to [Commerce Manager](https://business.facebook.com/commerce)
2. Click **Add Catalog**
3. Select **E-commerce** as the catalog type
4. Name your catalog and click **Create**

### Connect Your Feed

1. In Commerce Manager, select your catalog
2. Go to **Data sources**
3. Click **Add Data Source → Data Feed**
4. Choose **Scheduled Feed**
5. Paste your feed URL from the plugin
6. Set your fetch schedule
7. Click **Start Upload**

## Instagram Shopping Setup

### Eligibility Requirements

To use Instagram Shopping, you need:

- A business or creator account
- Products that comply with commerce policies
- An approved Facebook catalog
- To be in a supported country

### Enabling Instagram Shopping

1. In Commerce Manager, go to **Settings**
2. Under **Business Assets**, click **Instagram**
3. Connect your Instagram business account
4. Submit for review (usually 1-2 days)

Once approved, you can tag products in posts and stories.

## Dynamic Ads

Your catalog powers Facebook and Instagram dynamic ads, which automatically show products to people who've browsed your site.

### Setting Up the Pixel

1. Create a Facebook Pixel in Events Manager
2. Add the pixel code to your site (many plugins do this)
3. Enable standard events: ViewContent, AddToCart, Purchase

### Creating Dynamic Ads

1. In Ads Manager, create a new campaign
2. Choose **Sales** as the objective
3. Select **Catalog sales**
4. Choose your catalog
5. Set targeting (retargeting or broad)
6. Design your ad template
7. Launch

## Feed Optimization

### Image Requirements

- Minimum 500x500 pixels
- Recommended 1024x1024
- Square format works best
- No borders, watermarks, or promotional text

### Title Best Practices

- Include brand and key attributes
- Keep under 200 characters
- No promotional text ("Sale!", "Free Shipping")
- No ALL CAPS

### Description Tips

- Highlight key features and benefits
- Include materials, dimensions, care instructions
- Keep it informative, not promotional

## Troubleshooting

### Products Not Showing

Check your catalog diagnostics in Commerce Manager:

1. Go to **Catalog → Diagnostics**
2. Review errors and warnings
3. Common issues:
   - Missing required fields
   - Invalid image URLs
   - Policy violations

### Feed Not Updating

- Verify your feed URL is accessible
- Check fetch schedule in Commerce Manager
- Look for HTTP errors in fetch logs
- Regenerate the feed in the plugin

### Products Rejected

Review Facebook's [Commerce Policies](https://www.facebook.com/policies/commerce). Common rejection reasons:

- Prohibited products (weapons, adult content, etc.)
- Misleading descriptions
- Price/availability mismatches
- Poor quality images
