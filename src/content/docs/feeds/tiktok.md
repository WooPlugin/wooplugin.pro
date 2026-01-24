---
title: TikTok Shop
description: Create product feeds for TikTok Shop and catalog ads.
---

## Overview

TikTok Shop lets you sell products directly within the TikTok app. This guide covers setting up your product catalog for TikTok.

## Creating a TikTok Feed

1. Go to **WooCommerce → Product Feeds Pro**
2. Click **Add New Feed**
3. Select **TikTok** as the feed type
4. Configure your settings
5. Click **Generate Feed**

## Required Fields

| Field | Description | Source |
|-------|-------------|--------|
| sku_id | Unique product ID | SKU or product ID |
| title | Product name (5-255 chars) | Product title |
| description | Product details | Product description |
| availability | IN_STOCK, OUT_OF_STOCK | Stock status |
| condition | NEW, REFURBISHED, USED | Settings |
| price | Price with currency | Product price |
| link | Product URL | Permalink |
| image_link | Main product image | Featured image |
| brand | Brand name | Product Feed fields |

## Recommended Fields

| Field | Description |
|-------|-------------|
| gtin | UPC, EAN, ISBN |
| google_product_category | Product category |
| additional_image_link | Extra images |
| sale_price | Discounted price |
| color | Product color |
| size | Product size |
| gender | MALE, FEMALE, UNISEX |
| age_group | Target demographic |

## TikTok Business Setup

### Create a TikTok Business Center Account

1. Go to [TikTok Business Center](https://business.tiktok.com)
2. Create or log in to your account
3. Complete business verification

### TikTok Shop Requirements

To sell on TikTok Shop, you need:

- TikTok for Business account
- Valid business registration
- Bank account for payments
- Products that comply with TikTok's policies
- Availability in supported markets

## Setting Up Your Catalog

### Create a Catalog

1. In TikTok Business Center, go to **Assets → Catalogs**
2. Click **Create Catalog**
3. Enter catalog name
4. Select **E-commerce** as the industry

### Add Your Feed

1. In your catalog, click **Add Products**
2. Select **Data Feed**
3. Choose **Scheduled Feed**
4. Paste your feed URL
5. Set fetch frequency (hourly, daily, weekly)
6. Click **Create**

### Connect Pixel (Recommended)

For dynamic ads and conversion tracking:

1. Create a TikTok Pixel in Events Manager
2. Install the pixel on your site
3. Configure standard events (View, AddToCart, Purchase)
4. Connect pixel to your catalog

## Feed Formats

The plugin generates TikTok-compatible feeds in either:

- **CSV format**: Standard spreadsheet format
- **XML format**: Alternative if CSV has issues

Both are accepted by TikTok's catalog system.

## TikTok Shop Features

### In-App Shopping

Once approved for TikTok Shop:

- Products appear in your TikTok profile's shop tab
- Users can browse and buy without leaving TikTok
- Checkout happens within the app

### Live Shopping

Tag products during live streams:

1. Go live on TikTok
2. Add product tags from your catalog
3. Viewers can tap to purchase

### Video Shopping

Add product links to your videos:

1. Create a video
2. Add product links from your catalog
3. Products appear as shoppable tags

## Advertising with Your Catalog

### Dynamic Showcase Ads

1. Go to TikTok Ads Manager
2. Create a new campaign
3. Select **Product Sales** objective
4. Choose your catalog
5. Set targeting (retargeting or prospecting)
6. Design your ad creative
7. Launch

### Collection Ads

Showcase multiple products in one ad:

1. Create a Collection ad
2. Select products from your catalog
3. Add a hero video/image
4. Products display in a scrollable row

## Feed Optimization

### Title Requirements

- 5-255 characters (mandatory)
- Include key product attributes
- No excessive capitalization
- No promotional language

### Image Guidelines

- Minimum 500x500 pixels
- Maximum 5MB file size
- White or light background preferred
- No watermarks or text overlays

### Description Best Practices

- Clear, informative content
- Include materials, dimensions, features
- Avoid promotional language
- 1-5000 characters

## Troubleshooting

### Feed Rejected

Check TikTok's diagnostics for specific errors:

- Missing required fields
- Invalid field formats
- Policy violations
- Image quality issues

### Products Not Syncing

- Verify feed URL is accessible
- Check for HTTP errors in fetch logs
- Ensure products meet TikTok's policies
- Wait for processing (can take several hours)

### Catalog Connection Issues

- Confirm business verification is complete
- Check that your market is supported
- Verify TikTok Shop eligibility
- Contact TikTok support if issues persist
