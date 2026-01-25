---
title: "Selling on Facebook & Instagram Shops: The Complete 2026 Guide"
description: "Learn how to sell your WooCommerce products on Facebook and Instagram Shops. Complete guide covering Commerce Manager, catalogs, product tagging, and setup."
publishedAt: 2026-01-24
category: general
keywords:
  - facebook shopping woocommerce
  - instagram shopping woocommerce
  - facebook catalog
  - meta commerce
  - instagram shop setup
readingTime: "14 min read"
featured: false
---

Facebook and Instagram together reach over 3 billion people. These platforms have evolved from social networks into full-fledged shopping destinations where users discover, browse, and buy products without leaving the app. This guide covers everything you need to know to sell your WooCommerce products on Meta's commerce platforms.

## What is Facebook and Instagram Shopping?

Meta (the company behind Facebook and Instagram) offers several ways to sell products:

**Facebook Shop** - A customizable storefront on your Facebook Business Page where customers can browse and buy products.

**Instagram Shop** - A product catalog integrated into your Instagram profile, accessible via the shopping bag icon.

**Product Tags** - The ability to tag products in posts, Stories, and Reels, letting users tap to view and buy.

**Dynamic Ads** - Automated ads that show relevant products to people who've browsed your store.

All of these are powered by a single product catalog that you manage in Meta's Commerce Manager.

## Why Sell on Meta Platforms?

### Massive Reach

- **3+ billion monthly active users** across Facebook and Instagram
- **2 billion daily active users** on Facebook alone
- **500+ million daily Instagram Stories** users

### Visual Discovery

Unlike Google Shopping where people search for specific products, Facebook and Instagram users discover products while browsing. Your products appear naturally in feeds, Stories, and the Explore tab.

### Social Proof

Users can see likes, comments, and shares on your product posts. Friends' interactions make products more trustworthy. Reviews and ratings build credibility.

### High Engagement

People spend an average of 30+ minutes per day on these platforms. That's 30 minutes of potential product discovery.

### Native Checkout

In supported regions, users can complete purchases without leaving Facebook or Instagram, reducing friction and abandoned carts.

## Facebook Shop vs Instagram Shop vs Marketplace

Understanding the differences helps you choose the right approach:

| Feature | Facebook Shop | Instagram Shop | Marketplace |
|---------|---------------|----------------|-------------|
| Location | Business Page | Profile + Explore | Dedicated tab |
| Best for | Established brands | Visual products | Local/secondhand |
| Catalog required | Yes | Yes | No |
| Checkout options | Website or native | Website or native | Messages/cash |
| Advertising | Full ad integration | Full ad integration | Limited |
| Audience | Broad demographics | Younger, visual | Local buyers |

**Recommendation:** For WooCommerce stores, focus on Facebook Shop and Instagram Shop with website checkout. Marketplace is better for individual sellers and local businesses.

## Requirements to Get Started

Before setting up, you need:

1. **A WooCommerce store** with products and images
2. **A Facebook Business Page** for your store
3. **An Instagram Business or Creator account** (linked to your Facebook Page)
4. **A product catalog** with compliant product data
5. **A verified domain** in Facebook Business Settings

### Platform Policies

Meta has strict commerce policies. Make sure your products comply:

**Allowed:**
- Physical products you sell and ship
- Most retail categories

**Prohibited:**
- Alcohol, tobacco, weapons
- Adult products
- Healthcare items (supplements, medications)
- Animals
- Digital products (in most cases)

Review the full [Meta Commerce Policies](https://www.facebook.com/policies/commerce) before setting up.

## Step 1: Set Up Facebook Business Assets

### Create a Facebook Business Page

If you don't have one:

1. Go to facebook.com/pages/create
2. Choose "Business or Brand"
3. Enter your business name and category
4. Add a profile picture and cover photo
5. Complete the About section

### Set Up Business Manager

Business Manager (now Meta Business Suite) is where you manage everything:

1. Go to business.facebook.com

![Meta Business Suite dashboard for managing Facebook and Instagram commerce](/images/guides/facebook-guide-01-business-suite.png)
*Meta Business Suite dashboard*

2. Click "Create Account"
3. Enter your business name and details
4. Add your Facebook Page to Business Manager
5. Invite team members if needed

### Verify Your Domain

Domain verification proves you own your website:

1. In Business Settings, go to Brand Safety > Domains
2. Click "Add" and enter your domain
3. Choose a verification method:
   - **DNS TXT record** (recommended) - Add a TXT record to your domain's DNS
   - **HTML file upload** - Upload a verification file to your server
   - **Meta tag** - Add a meta tag to your homepage
4. Click "Verify"

## Step 2: Connect Your Instagram Account

### Convert to Business Account

If you have a personal Instagram account:

1. Open Instagram and go to Settings
2. Tap "Account"
3. Tap "Switch to Professional Account"
4. Choose "Business"
5. Select a category
6. Connect to your Facebook Page

### Link to Facebook Page

Your Instagram must be linked to your Facebook Business Page:

1. On Instagram, go to Settings > Account > Linked Accounts
2. Select Facebook and log in
3. Choose your Facebook Page
4. Confirm the connection

## Step 3: Create Your Product Catalog

The product catalog is the central hub for all your commerce data. Every product you want to sell on Facebook or Instagram must be in your catalog.

### Access Commerce Manager

1. Go to business.facebook.com/commerce
2. If prompted, create a Commerce Manager account
3. You'll see options to create a catalog

### Create a Catalog

1. Click "Add Catalog"

![Meta Commerce Manager catalog for Facebook and Instagram shops](/images/guides/facebook-guide-02-commerce-manager.png)
*Commerce Manager catalog creation screen*

2. Choose "E-commerce" as the catalog type
3. Select "Upload Product Info" (for feed-based management)
4. Name your catalog
5. Select your Business Manager account
6. Click "Create"

### Catalog Data Requirements

Each product needs:

| Field | Required | Description |
|-------|----------|-------------|
| id | Yes | Unique product identifier |
| title | Yes | Product name (max 200 chars) |
| description | Yes | Product description |
| availability | Yes | in stock, out of stock, etc. |
| condition | Yes | new, refurbished, used |
| price | Yes | Price with currency code |
| link | Yes | Product page URL |
| image_link | Yes | Main product image URL |
| brand | Yes* | Brand name (*required for most products) |

### Image Requirements

Meta has specific image requirements:

- **Minimum size:** 500x500 pixels
- **Recommended:** 1024x1024 pixels or larger
- **Format:** JPEG or PNG
- **No promotional text** or watermarks
- **Product should fill 75%+** of the image

## Step 4: Connect Your WooCommerce Feed

You have several options to populate your catalog:

### Option A: Use a Product Feed Plugin (Recommended)

A product feed plugin generates a compliant data feed that Meta can fetch automatically.

**With Product Feed for WooCommerce:**

1. Install and activate the plugin
2. Go to WooCommerce > Product Feeds Pro
3. Create a new feed and select "Facebook / Instagram" as the channel
4. Configure your feed settings
5. Generate the feed and copy the URL

The Pro version supports Facebook's required fields and formats the feed correctly.

### Option B: Manual CSV Upload

For smaller catalogs:

1. Download Meta's CSV template from Commerce Manager
2. Fill in your product data
3. Upload the file in Commerce Manager > Catalog > Data Sources

### Option C: Meta Pixel and Microdata

Meta can also pull products from your website if you have:
- Meta Pixel installed
- Product microdata (JSON-LD or Open Graph tags)

This method is less reliable than a proper product feed.

### Add Your Feed to Commerce Manager

Once you have your feed URL:

1. Go to Commerce Manager > Catalog > Data Sources
2. Click "Add Data Source"

![Adding a product feed data source in Meta Commerce Manager](/images/guides/facebook-guide-03-add-data-source.png)
*Add data source dialog with scheduled feed option*

3. Choose "Data Feed"
4. Select "Scheduled Feed"
5. Enter your feed URL
6. Set update frequency (daily or hourly)
7. Click "Start Upload"

Meta will fetch and process your products. Initial processing takes a few hours.

## Step 5: Set Up Your Shop

With products in your catalog, you can create your shop:

### Facebook Shop Setup

1. Go to Commerce Manager
2. Click "Shops" in the left menu
3. Click "Create a Shop"
4. Choose your checkout method:
   - **Checkout on your website** (recommended for WooCommerce)
   - **Checkout on Facebook/Instagram** (US only, requires additional setup)
5. Select your Facebook Page and catalog
6. Choose an accent color and style
7. Preview and publish

### Instagram Shop Setup

If you've set up Facebook Shop with a linked Instagram account:

1. Instagram Shop is automatically created
2. Go to your Instagram profile
3. Tap the shopping bag icon to see your shop

![Instagram Shop tab on a business profile](/images/guides/facebook-guide-04-instagram-shop.png)
*Instagram profile with the Shop tab visible*

4. Verify products are displaying correctly

### Create Collections

Collections help organize your products:

1. In Commerce Manager, go to Shops > Collections
2. Click "Create Collection"
3. Name your collection (e.g., "Summer Sale", "Best Sellers")
4. Add products manually or use dynamic rules
5. Set a cover image
6. Publish

Collections appear on your shop homepage and can be featured.

## Step 6: Enable Product Tagging

Product tagging lets you tag products in posts, Stories, and Reels.

### Requirements

- Approved shop
- Business or Creator account
- Account in good standing
- Compliance with commerce policies

### Tag Products in Posts

1. Create a new post with a product image
2. Tap "Tag Products"

![Tagging products in an Instagram post](/images/guides/facebook-guide-05-product-tagging.png)
*Product tagging interface when creating a post*

3. Tap the product in the image
4. Search for the product from your catalog
5. Select and position the tag
6. Post

### Tag Products in Stories

1. Create a Story with a product image or video
2. Tap the sticker icon
3. Select the product sticker
4. Choose a product from your catalog
5. Position the sticker
6. Share

### Tag Products in Reels

1. Create a Reel featuring your products
2. Before posting, tap "Tag Products"
3. Select products to feature
4. Products appear at the bottom of the Reel

## Dynamic Ads and Retargeting

Once your catalog is connected, you can run powerful retargeting campaigns.

### How Dynamic Ads Work

1. User visits your WooCommerce store
2. Meta Pixel tracks which products they view
3. You create a Dynamic Ad campaign
4. Meta automatically shows those exact products (and similar ones) to the user on Facebook/Instagram
5. User clicks and returns to purchase

### Setting Up Dynamic Ads

1. Ensure Meta Pixel is installed on your WooCommerce store
2. In Ads Manager, create a new campaign
3. Choose "Sales" as the objective
4. Select your product catalog
5. Choose "Catalog Sales" as the optimization
6. Define your audience (website visitors, cart abandoners, etc.)
7. Set budget and schedule
8. Create your ad (Meta uses your product images/titles automatically)

### Retargeting Strategies

**Cart abandoners** - Target people who added to cart but didn't buy. Show the exact products they left behind.

**Product viewers** - Target people who viewed products but didn't add to cart. Show viewed products plus similar items.

**Past purchasers** - Target existing customers with complementary products or new arrivals.

## Costs: Free Listings vs Paid Ads

### Free Options

- **Facebook Shop** - Free to set up and maintain
- **Instagram Shop** - Free to set up and maintain
- **Product Tagging** - Free to tag products in organic posts
- **Organic reach** - Products can be discovered through the Explore tab, hashtags, and shares

### Paid Options

- **Boosted product posts** - Promote tagged posts to reach more people
- **Dynamic ads** - Retarget website visitors with relevant products
- **Collection ads** - Showcase multiple products in a single ad
- **Shopping ads** - Products appear in Facebook/Instagram shopping surfaces

### Selling Fees

If using native checkout (US only):
- **5% per transaction** or $0.40 for orders under $8
- No monthly fees

With website checkout (WooCommerce):
- **No Meta fees** - You only pay your payment processor (Stripe, PayPal, etc.)

## Common Approval Issues and Fixes

### "Products not matching website"

**Issue:** Meta can't verify your product data matches your website.

**Fix:**
- Ensure product URLs are valid and accessible
- Match prices exactly between feed and website
- Use the same product images

### "Missing description"

**Issue:** Products don't have descriptions.

**Fix:**
- Add descriptions to all products in WooCommerce
- Regenerate your product feed

### "Low quality image"

**Issue:** Product images don't meet requirements.

**Fix:**
- Use images at least 500x500 pixels
- Remove text overlays and watermarks
- Ensure product fills most of the image

### "Invalid price format"

**Issue:** Price format doesn't match requirements.

**Fix:**
- Include currency code (e.g., "29.99 USD")
- Don't use currency symbols in the price field
- Ensure consistent decimal formatting

### "Policy violation"

**Issue:** Products violate Meta commerce policies.

**Fix:**
- Review which products are flagged
- Remove prohibited products from your catalog
- Appeal if you believe the flag is incorrect

## Tracking and Analytics

### Commerce Manager Insights

Commerce Manager provides:
- Product views and clicks
- Checkout conversions
- Traffic sources
- Top-performing products

### Meta Pixel

Install Meta Pixel on your WooCommerce store to track:
- Add to cart events
- Purchases
- Revenue
- Return on ad spend (ROAS)

### Google Analytics

Connect your WooCommerce store to see how Facebook/Instagram traffic converts compared to other channels.

## FAQ

**Q: Do I need both Facebook and Instagram shops?**

If you're selling on Meta, it makes sense to have both. They use the same catalog and Commerce Manager, so setup is minimal once one is running.

**Q: How long until my shop is approved?**

Initial review typically takes 24-48 hours. Some accounts may require additional verification, which can take longer.

**Q: Can I sell digital products?**

Digital products (ebooks, courses, software) are generally not allowed on Facebook/Instagram Shops. Focus on physical products.

**Q: Do I need to use native checkout?**

No. For WooCommerce stores, website checkout makes more sense. You keep full control of the customer experience and don't pay Meta's transaction fees.

**Q: How often should my feed update?**

At least daily. If you have frequently changing inventory or prices, consider hourly updates. The Pro version of Product Feed for WooCommerce supports scheduled feed updates.

**Q: Can I run a shop without a product feed?**

Technically yes, using manual uploads or pixel-based product detection. However, a product feed is the most reliable and efficient method, especially for stores with more than a handful of products.

---

## Get Started with Product Feeds for WooCommerce

**Start with Google Shopping (Free)**

If you're new to product feeds, start with our [free plugin on WordPress.org](https://wordpress.org/plugins/gtin-product-feed-for-google-shopping/?utm_source=wooplugin&utm_medium=website&utm_campaign=fb-ig-guide). You'll get:

- GTIN, Brand, MPN fields for all products
- Google Shopping XML feed generation
- Unlimited products, no restrictions
- HPOS compatible

[Download Free Plugin →](https://wordpress.org/plugins/gtin-product-feed-for-google-shopping/?utm_source=wooplugin&utm_medium=website&utm_campaign=fb-ig-guide)

**Expand to Facebook & Instagram (Pro)**

Ready to sell on Meta's platforms? [Product Feed for WooCommerce Pro](/google-shopping-pro) adds:

- **Facebook/Instagram catalog feeds** with all required fields
- **Scheduled feed updates** to keep your catalog fresh
- **Category mapping** to match Meta's taxonomy
- **Custom field mapping** for platform-specific attributes
- Plus feeds for Pinterest, TikTok, Bing, and Snapchat

One plugin. All major shopping channels. [View Pro Features →](/google-shopping-pro)
