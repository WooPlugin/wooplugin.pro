---
title: Google Shopping
description: Set up product feeds for Google Merchant Center and Shopping ads.
---

## Overview

Google Shopping is the most popular product advertising platform for e-commerce. This guide covers setting up your feed for Google Merchant Center.

## Creating a Google Shopping Feed

1. Go to **WooCommerce → Product Feed**
2. Click **Add New Feed**
3. Select **Google Shopping** as the feed type
4. Configure your feed settings (see below)
5. Click **Generate Feed**

## Required Fields

Google requires these fields for all products:

| Field | Description | Source |
|-------|-------------|--------|
| id | Unique product identifier | SKU or product ID |
| title | Product name | Product title |
| description | Product details | Short or long description |
| link | Product page URL | Permalink |
| image_link | Main product image | Featured image |
| availability | In stock, out of stock, preorder | Stock status |
| price | Product price with currency | Regular or sale price |

## Recommended Fields

These improve ad performance:

| Field | Description | How to Add |
|-------|-------------|------------|
| gtin | Global Trade Item Number | Product Feed tab |
| brand | Manufacturer/brand name | Product Feed tab |
| mpn | Manufacturer Part Number | Product Feed tab |
| google_product_category | Google's product taxonomy | Category mapping |
| condition | new, refurbished, used | Plugin settings |
| shipping | Shipping cost/method | WooCommerce shipping |

## Setting Up GTIN, Brand, and MPN

### Per-Product

1. Edit a product
2. Go to the **Product Feed** tab
3. Enter GTIN, Brand, and MPN values
4. Save the product

### Bulk Import

For many products, use the bulk import feature:

1. Go to **WooCommerce → Product Feed → Settings**
2. Click **Import/Export**
3. Download the CSV template
4. Fill in GTIN, Brand, MPN columns
5. Upload the completed file

### Smart Auto-Fill

Pro includes [Smart Auto-Fill](/docs/features/smart-auto-fill) which can automatically suggest values based on product titles and categories.

## Category Mapping

Map your WooCommerce categories to Google's taxonomy:

1. Go to **Product Feed → Settings → Category Mapping**
2. For each WooCommerce category, select the matching Google category
3. Use the search to find categories quickly
4. Save your mappings

See [Category Mapping](/docs/features/category-mapping) for detailed instructions.

## Feed Settings

### Update Frequency

Choose how often your feed regenerates:

- **Hourly**: Best for frequently changing inventory
- **Every 6 hours**: Good balance for most stores
- **Daily**: Suitable for stable inventory

### Product Filters

Include or exclude products based on:

- Categories
- Stock status
- Price range
- Tags
- Custom fields

See [Product Filters](/docs/features/product-filters) for details.

## Submitting to Google Merchant Center

### Getting Your Feed URL

1. Go to **WooCommerce → Product Feed**
2. Find your Google Shopping feed
3. Copy the feed URL

### Adding to Merchant Center

1. Log in to [Google Merchant Center](https://merchants.google.com)
2. Go to **Products → Feeds**
3. Click the **+** button to add a feed
4. Select your country and language
5. Choose **Scheduled fetch** as the input method
6. Paste your feed URL
7. Set the fetch schedule to match your update frequency
8. Save and fetch the feed

## Feed Validation

After submitting, check for errors:

1. In Merchant Center, go to **Products → Diagnostics**
2. Review any issues listed
3. Common issues:
   - Missing GTIN/brand/MPN
   - Invalid category mapping
   - Image too small (min 100x100px)
   - Price mismatch with landing page

## Performance Tips

### Optimize Titles

Google uses titles for matching search queries. Best practices:

- Include brand name
- Add key product attributes (size, color, material)
- Keep under 150 characters
- Put important words first

### Quality Images

- Minimum 100x100 pixels
- Recommended 800x800 or larger
- White background preferred
- No watermarks or promotional text

### Complete Data

Products with complete data (GTIN, brand, detailed descriptions) get better placement and lower CPCs. Use [Smart Auto-Fill](/docs/features/smart-auto-fill) to fill gaps quickly.
