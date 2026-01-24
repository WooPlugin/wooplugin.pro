---
title: Snapchat
description: Create product feeds for Snapchat Dynamic Product Ads.
---

## Overview

Snapchat Dynamic Product Ads let you automatically show products to users based on their interests and behaviors. This guide covers setting up your product catalog for Snapchat.

## Creating a Snapchat Feed

1. Go to **WooCommerce → Product Feeds Pro**
2. Click **Add New Feed**
3. Select **Snapchat** as the feed type
4. Configure your settings
5. Click **Generate Feed**

## Required Fields

| Field | Description | Source |
|-------|-------------|--------|
| id | Unique product ID | SKU or product ID |
| title | Product name | Product title |
| description | Product details | Product description |
| link | Product page URL | Permalink |
| image_link | Main product image | Featured image |
| price | Price with currency | Product price |
| availability | in stock, out of stock | Stock status |

## Recommended Fields

| Field | Description |
|-------|-------------|
| brand | Brand name |
| gtin | UPC, EAN, ISBN |
| mpn | Manufacturer part number |
| product_type | Your category hierarchy |
| google_product_category | Google's taxonomy |
| sale_price | Discounted price |
| additional_image_link | Extra images |
| color | Product color |
| size | Product size |

## Snapchat Business Setup

### Create a Business Account

1. Go to [Snapchat Business](https://business.snapchat.com)
2. Create or log in to your business account
3. Set up your organization and ad account

### Install Snap Pixel

For conversion tracking and dynamic ads:

1. In Ads Manager, go to **Events Manager**
2. Click **Set Up Snap Pixel**
3. Copy the pixel code
4. Install on your website (header section)
5. Set up standard events:
   - PAGE_VIEW
   - VIEW_CONTENT
   - ADD_CART
   - PURCHASE

Many WordPress plugins handle Snap Pixel installation for you.

## Setting Up Your Catalog

### Create a Catalog

1. In Ads Manager, go to **Catalogs**
2. Click **Create Catalog**
3. Enter catalog details:
   - Name
   - Catalog type (E-commerce)
   - Currency
4. Click **Create**

### Add Your Product Feed

1. In your catalog, go to **Product Sets**
2. Click **Add Products**
3. Select **Data Feed**
4. Choose **Scheduled Feed**
5. Paste your feed URL
6. Set update schedule:
   - Hourly (frequently changing inventory)
   - Daily (most stores)
   - Weekly (stable inventory)
7. Click **Create**

### Connect Snap Pixel to Catalog

1. In your catalog settings, click **Connected Assets**
2. Select your Snap Pixel
3. Enable event matching

This enables dynamic retargeting based on user behavior.

## Dynamic Product Ads

### How They Work

Snapchat DPAs automatically:

1. Track products users view on your site
2. Create personalized ads with those products
3. Show ads to users in their Snapchat feed

### Creating DPA Campaigns

1. Go to **Create Ads**
2. Select **Catalog Sales** as the objective
3. Choose your catalog
4. Select product set (all products or filtered)
5. Set audience:
   - **Retargeting**: People who visited your site
   - **Prospecting**: New audiences similar to customers
6. Design your ad template
7. Set budget and launch

### Creative Templates

Snapchat offers templates for DPAs:

- Single product focus
- Multi-product carousel
- Collection format

The product image, title, and price pull from your feed automatically.

## Feed Optimization

### Image Requirements

- Minimum 500x500 pixels
- Recommended 1080x1080
- Square format (1:1) recommended
- High quality, clear product shots
- No text overlays (text is added by the ad template)

### Title Best Practices

- 1-150 characters
- Include brand and key attributes
- No promotional language
- Clear, descriptive naming

### Description Guidelines

- Informative, not promotional
- Include key product details
- 1-5000 characters
- Focus on benefits and features

## Targeting Options

### Retargeting Audiences

Create audiences based on pixel events:

| Event | Use Case |
|-------|----------|
| PAGE_VIEW | Viewed any page |
| VIEW_CONTENT | Viewed product pages |
| ADD_CART | Added to cart but didn't buy |
| PURCHASE | Past customers (for upsells) |

### Lookalike Audiences

Expand reach with lookalikes:

1. Create a source audience (e.g., purchasers)
2. Build a lookalike audience
3. Target the lookalike in prospecting campaigns

## Troubleshooting

### Feed Not Processing

- Verify URL is publicly accessible
- Check for HTTP errors
- Ensure proper file format
- Review field requirements

### Products Disapproved

Check catalog diagnostics for:

- Policy violations
- Missing required fields
- Image quality issues
- Invalid URLs

### Low Performance

- Review audience targeting
- Test different bidding strategies
- Optimize product feed quality
- A/B test ad creative templates

### Pixel Not Tracking

- Verify pixel is installed correctly
- Check for ad blockers in testing
- Use Snapchat's Pixel Helper browser extension
- Confirm events are firing on key pages
