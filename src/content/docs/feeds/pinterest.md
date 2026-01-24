---
title: Pinterest
description: Set up product feeds for Pinterest Shopping and catalog ads.
---

## Overview

Pinterest product catalogs let you create shoppable Pins that link directly to your products. This guide covers setting up feeds for Pinterest Shopping.

## Creating a Pinterest Feed

1. Go to **WooCommerce → Product Feeds Pro**
2. Click **Add New Feed**
3. Select **Pinterest** as the feed type
4. Configure your settings
5. Click **Generate Feed**

## Required Fields

| Field | Description | Source |
|-------|-------------|--------|
| id | Unique product ID | SKU or product ID |
| title | Product name | Product title |
| description | Product details | Product description |
| link | Product page URL | Permalink |
| image_link | Main image (min 100x100) | Featured image |
| price | Price with currency | Product price |
| availability | in stock, out of stock, preorder | Stock status |

## Recommended Fields

| Field | Description |
|-------|-------------|
| brand | Brand or manufacturer |
| gtin | UPC, EAN, or ISBN |
| mpn | Manufacturer part number |
| google_product_category | Product category |
| additional_image_link | Extra images (up to 10) |
| sale_price | Discounted price |
| color | Product color |
| size | Product size |
| gender | male, female, unisex |
| age_group | Target age |
| material | Product material |

## Pinterest Business Setup

### Create a Business Account

1. Go to [Pinterest Business](https://business.pinterest.com)
2. Create or convert to a business account
3. Complete your profile

### Claim Your Website

1. In Pinterest, go to **Settings → Claim**
2. Choose your claim method (HTML tag, meta tag, or DNS)
3. Verify ownership
4. Wait for confirmation (usually instant)

## Setting Up Your Catalog

### Create a Catalog

1. Go to **Ads → Catalogs**
2. Click **Create catalog**
3. Choose a catalog name
4. Select your data source type: **Data feed**

### Add Your Feed

1. In your catalog, click **Add data source**
2. Paste your feed URL from the plugin
3. Set the file format (the plugin uses CSV or XML depending on settings)
4. Choose your fetch schedule:
   - Daily (recommended for most stores)
   - Weekly (stable inventory)
5. Click **Create**

Pinterest will fetch and validate your feed.

## Product Pins

Once your catalog is set up, you can create:

### Shoppable Pins

Products from your catalog automatically become shoppable Pins. Users can:

- See pricing and availability
- Click to buy on your site
- Save products to boards

### Catalog Collections

Create collections to showcase product groups:

1. Go to your catalog
2. Click **Create collection**
3. Filter products by category, brand, etc.
4. Publish as a collection

## Shopping Ads

### Campaign Types

| Type | Best For |
|------|----------|
| Shopping campaigns | Retargeting, product awareness |
| Collection ads | Showcasing product groups |
| Dynamic retargeting | Re-engaging site visitors |

### Creating Shopping Ads

1. Go to **Ads → Create campaign**
2. Choose **Catalog sales** objective
3. Select your catalog
4. Set targeting and budget
5. Choose products or product groups
6. Launch

## Feed Optimization

### Image Best Practices

- Minimum 100x100 pixels
- Recommended 1000x1500 (2:3 ratio)
- Vertical images perform best on Pinterest
- High quality, lifestyle imagery converts well

### Title Optimization

- Include relevant keywords
- Add brand name
- Keep under 100 characters
- Be specific (not just "Blue Dress" but "Navy Midi Dress with Belt")

### Description Tips

- Use relevant keywords naturally
- Highlight unique features
- Include use cases
- Keep under 500 characters

## Troubleshooting

### Feed Ingestion Errors

Check your catalog's data source page for specific errors:

- **Invalid URL**: Verify feed URL is accessible
- **Missing required fields**: Check id, title, link, image_link, price, availability
- **Invalid format**: Ensure proper CSV or XML structure

### Products Not Approved

Pinterest reviews products for policy compliance. Common issues:

- Prohibited categories
- Misleading claims
- Poor image quality
- Adult content flags

### Slow Feed Updates

- Pinterest fetches feeds on your chosen schedule
- Manual refreshes available in catalog settings
- Large catalogs may take longer to process
