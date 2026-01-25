---
title: "Google Merchant Center Errors: Troubleshooting Guide for WooCommerce"
description: "Fix common Google Merchant Center errors and warnings. Solutions for missing GTIN, price mismatches, image issues, and disapproved products."
publishedAt: 2026-02-03
category: google-shopping
keywords:
  - google merchant center errors
  - fix google shopping disapproved
  - merchant center troubleshooting
  - google shopping feed errors
readingTime: "11 min read"
featured: false
coverImage:
  src: /images/covers/merchant-center-errors.jpg
  alt: Data dashboard showing analytics and metrics
  credit: Stephen Dawson
  creditUrl: https://unsplash.com/@dawson2406
---

Getting products disapproved in Google Merchant Center is frustrating. You've set up your feed, submitted it, and now you're seeing errors everywhere. This guide covers the most common errors, what causes them, and exactly how to fix them.

## Understanding Merchant Center Diagnostics

Google Merchant Center categorizes issues into three levels:

| Level | Impact | Action Required |
|-------|--------|-----------------|
| **Errors** | Products disapproved, won't show | Must fix |
| **Warnings** | Products may have limited reach | Should fix |
| **Notifications** | Informational, best practices | Optional |

To view issues:
1. Log into Google Merchant Center
2. Go to Products → Diagnostics
3. Review item issues and account issues separately

## Product Data Errors

### Missing GTIN

**Error:** "Missing value: GTIN [gtin]"

**Why it happens:** Google requires GTINs for most products from established brands. Your feed is missing this identifier.

**Fix:**

1. Add GTIN to your WooCommerce products:
   - Edit product → Inventory tab
   - Enter the GTIN (UPC, EAN, or ISBN)
   - Save and regenerate feed

2. If the product doesn't have a GTIN (handmade, custom, vintage):
   - Set `identifier_exists` to "No"
   - Still include Brand if known

**Prevention:** Use a plugin that adds GTIN fields, like [Google Shopping for WooCommerce](/google-shopping).

### Invalid GTIN

**Error:** "Invalid value: GTIN [gtin]"

**Why it happens:** The GTIN you provided doesn't pass validation (wrong length, invalid check digit, or doesn't match Google's database).

**Fix:**

1. Verify the GTIN is correct:
   - UPC should be 12 digits
   - EAN should be 13 digits
   - Check against the actual product barcode

2. Validate at [GS1 Check Digit Calculator](https://www.gs1.org/check-digit-calculator)

3. If GTIN is correct but still rejected:
   - The product might be new and not yet in Google's database
   - Try removing GTIN and setting `identifier_exists` to "No" temporarily

### Missing Brand

**Error:** "Missing value: Brand [brand]"

**Why it happens:** Products from known manufacturers require a brand name.

**Fix:**

1. Add brand to your WooCommerce products
2. Use the official brand name (e.g., "Nike" not "nike" or "NIKE")
3. For unbranded products, use your store name

### Missing Required Attributes

**Error:** "Missing value: [attribute name]"

Common missing attributes by category:

**Apparel:**
- `color` - Required
- `size` - Required
- `gender` - Required (male, female, unisex)
- `age_group` - Required (adult, kids, toddler, infant, newborn)

**Fix:** Ensure your WooCommerce products have these attributes and that your feed plugin maps them correctly.

## Price and Availability Errors

### Price Mismatch

**Error:** "Mismatched value: Price [price]"

**Why it happens:** The price in your feed doesn't match the price on your product page when Google crawls it.

**Causes:**
- Feed not updated after price change
- Currency conversion issues
- Sale prices not reflected in feed
- Geo-targeted pricing

**Fix:**

1. Regenerate your feed immediately after price changes
2. Use scheduled feed updates (Pro feature) to keep prices current
3. Ensure your feed URL always returns fresh data
4. Check that currency codes match (USD vs EUR)

### Availability Mismatch

**Error:** "Mismatched value: Availability [availability]"

**Why it happens:** Feed says "in_stock" but product page shows out of stock (or vice versa).

**Fix:**

1. Update stock status in WooCommerce
2. Regenerate feed
3. Set up automatic feed updates when stock changes
4. Ensure your theme correctly displays stock status

### Insufficient Value: Price

**Error:** "Insufficient value: Price [price]"

**Why it happens:** Price is $0 or missing.

**Fix:**

1. Check that all products have prices in WooCommerce
2. For variable products, ensure each variation has a price
3. If using sale prices, ensure regular price is also set

## Image Errors

### Missing Image

**Error:** "Missing value: Image link [image_link]"

**Why it happens:** Product doesn't have an image, or image URL is broken.

**Fix:**

1. Add images to all WooCommerce products
2. Verify image URLs are accessible (not 404)
3. Check image URLs aren't behind authentication

### Image Too Small

**Error:** "Image is too small [image_link]"

**Requirements:**
- Minimum: 100x100 pixels
- Apparel: 250x250 pixels minimum
- Recommended: 800x800 pixels or larger

**Fix:**

1. Upload larger product images to WooCommerce
2. Regenerate thumbnails if needed
3. Use full-size images in your feed, not thumbnails

### Promotional Overlay on Image

**Error:** "Promotional text on image [image_link]"

**Why it happens:** Images contain text like "SALE", "FREE SHIPPING", watermarks, or promotional badges.

**Fix:**

1. Use clean product images without text overlay
2. Remove watermarks
3. Remove promotional stickers/badges
4. Logo is generally okay if small and unobtrusive

### Generic or Placeholder Image

**Error:** "Generic image [image_link]"

**Why it happens:** Using stock photos, placeholder images, or images that don't show the actual product.

**Fix:**

1. Use actual product photos
2. Show the specific product being sold
3. Avoid stock photography

## URL and Link Errors

### Invalid URL

**Error:** "Invalid URL [link]"

**Why it happens:** Product URL is malformed, redirects, or returns an error.

**Fix:**

1. Check product URLs are valid and accessible
2. Ensure no redirect chains
3. Verify URLs work without being logged in
4. Use HTTPS (required)

### Landing Page Error

**Error:** "Unavailable landing page [link]"

**Why it happens:** Google can't access your product page.

**Causes:**
- Page returns 404
- Page is behind login/password
- Robots.txt blocks Google
- Server errors

**Fix:**

1. Verify page loads correctly
2. Check robots.txt allows Googlebot:
   ```
   User-agent: Googlebot
   Allow: /
   ```
3. Remove any login requirements for product pages
4. Check server isn't blocking Google's IP ranges

## Account-Level Issues

### Website Claim Issues

**Error:** "Website not claimed" or "Verify and claim your website"

**Fix:**

1. Go to Merchant Center → Settings → Business information
2. Click "Website" and enter your URL
3. Choose verification method:
   - HTML file upload
   - HTML tag
   - Google Analytics
   - Google Tag Manager
4. Complete verification

### Policy Violations

**Error:** "Account suspended" or "Misrepresentation"

**Common causes:**
- Prices don't match between feed and website
- Misleading product information
- Prohibited products
- Missing or unclear return/refund policy
- Missing contact information

**Fix:**

1. Review [Google Merchant Center policies](https://support.google.com/merchants/answer/6149970)
2. Ensure prices match exactly
3. Add clear return/refund policy
4. Add contact information (phone, email, address)
5. Remove any prohibited products
6. Request account review after fixing

### Shipping Configuration Issues

**Error:** "Missing shipping information"

**Fix:**

1. In Merchant Center → Settings → Shipping and returns
2. Create shipping services matching your WooCommerce settings
3. Options:
   - Set up shipping in Merchant Center manually
   - Use automatic shipping from your feed
   - Enable shipping settings in your feed plugin

## Data Quality Warnings

### Missing Recommended Attributes

**Warning:** "Missing recommended: [attribute]"

These won't disapprove products but may reduce visibility:

- `product_type` - Your category hierarchy
- `google_product_category` - Google's taxonomy
- `mpn` - Manufacturer part number
- `additional_image_link` - Extra product images

**Fix:** Add these attributes to improve product data quality.

### Duplicate Products

**Warning:** "Duplicate item"

**Why it happens:** Multiple products with the same GTIN or identical content.

**Fix:**

1. Ensure each product has a unique SKU/ID
2. Don't submit the same GTIN twice
3. For variations, each should have unique identifier

## Troubleshooting Workflow

When you see errors, follow this process:

### 1. Identify Scope

- How many products affected?
- Is it the same error on all products?
- When did it start?

### 2. Check Your Feed

View your feed directly:

```
https://yoursite.com/wp-content/uploads/product-feed.xml
```

Verify the problematic products have correct data.

### 3. Compare Feed to Website

For price/availability mismatches:
- Check feed value
- Check live website value
- They must match exactly

### 4. Regenerate Feed

After fixing issues in WooCommerce:
1. Regenerate your product feed
2. In Merchant Center, go to Products → Feeds
3. Click "Fetch now" to pull updated data

### 5. Wait for Reprocessing

Google can take 24-72 hours to reprocess products. Don't panic if issues don't disappear immediately.

## Prevention Strategies

### Keep Feed Fresh

- Update feed at least daily
- Use scheduled updates (Pro feature)
- Regenerate after major changes

### Validate Before Submitting

- Check feed for errors before upload
- Use [Google's Feed Rules](https://support.google.com/merchants/answer/7450276) to fix data
- Test with a small product set first

### Monitor Regularly

- Check Merchant Center weekly
- Set up email notifications for issues
- Address warnings before they become errors

### Use Quality Source Data

- Complete product information in WooCommerce
- High-quality images
- Accurate pricing and stock

## FAQ

**Q: How long after fixing an error will my product be approved?**

Usually 24-72 hours. Some issues may take longer during manual review.

**Q: Can I appeal a disapproval?**

Yes, after fixing the issue, you can request a review in Merchant Center. Go to Products → Diagnostics → Request review.

**Q: Why do some products get disapproved randomly?**

Google periodically re-crawls your site. If your website was temporarily down or prices changed, products may get flagged.

**Q: Do warnings affect my products?**

Warnings don't disapprove products but may reduce visibility and performance. Fix them when possible.

**Q: How do I prevent price mismatch errors?**

Use a feed plugin with automatic updates, or regenerate feed immediately after price changes. The Pro version of Google Shopping for WooCommerce updates feeds automatically when products change.

---

Need help preventing these errors? [Google Shopping for WooCommerce](/google-shopping) generates compliant feeds with proper data formatting. The [Pro version](/google-shopping-pro) includes automatic feed updates to prevent sync issues.
