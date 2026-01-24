---
title: Frequently Asked Questions
description: Answers to common questions about Product Feed for WooCommerce Pro.
---

## General Questions

### What's the difference between Free and Pro?

The free version includes:
- Google Shopping feed generation
- Basic GTIN, Brand, MPN fields
- Manual category mapping

Pro adds:
- All feed channels (Facebook, Pinterest, TikTok, Bing, Snapchat)
- Smart Auto-Fill for field suggestions
- Advanced product filters
- Scheduled background updates
- Priority support

### Do I need both Free and Pro installed?

No. Pro is a complete replacement for Free. When you install Pro, it migrates settings from Free automatically. You only need one plugin active.

### Does Pro work with my theme?

Yes. The plugin works in the WordPress admin area and generates feeds—it doesn't affect your store's frontend appearance.

### Is it compatible with page builders?

Yes. Product Feed Pro doesn't interact with page builders (Elementor, Divi, WPBakery, etc.). It works purely on the backend.

## Installation & Setup

### Where do I download Pro after purchase?

After purchase, you'll receive an email with a download link. You can also log into your [account dashboard](https://wooplugin.pro/account) to download anytime.

### Can I use one license on multiple sites?

Depends on your license:
- **Pro**: 1 site
- **Agency**: Unlimited sites

Staging and local development sites don't count against your limit.

### How do I transfer my license to a new site?

1. Go to [wooplugin.pro/account](https://wooplugin.pro/account)
2. Navigate to **Licenses**
3. Click **Manage Sites**
4. Deactivate the old site
5. Activate on the new site

### Does it work with multisite?

Yes, but each site in a multisite network counts as a separate activation.

## Feed Configuration

### How often should I update my feed?

It depends on how often your data changes:

- **Frequently changing prices/stock**: Every hour
- **Daily updates**: Every 6 hours
- **Stable inventory**: Once daily

Most stores do well with 6-hour updates.

### Can I create multiple feeds for the same platform?

Yes. You might want separate feeds for:
- Different product categories
- Different countries/languages
- Testing vs production

### How do I include only certain products?

Use [Product Filters](/docs/features/product-filters):

1. Edit your feed
2. Go to **Filters** tab
3. Add include/exclude rules
4. Save and regenerate

### Can I customize field values?

Yes. Use [Feed Customization](/docs/features/feed-customization) to:
- Map different source fields
- Apply transformations
- Add static values
- Create templates

## Product Data

### Where do I get GTIN numbers?

GTINs come from:
- Product packaging (barcode number)
- Manufacturer/supplier data
- Distributor spreadsheets
- GS1 (for products you manufacture)

The plugin can't generate GTINs—they must come from official sources.

### My products don't have GTINs. What do I do?

For products without standard identifiers (custom, handmade, vintage):

1. Set `identifier_exists` to "no" in feed settings
2. Provide Brand + MPN as alternatives
3. Google accepts this for genuinely custom products

### How do I add product data in bulk?

Use WooCommerce's built-in product importer:

1. Go to **Products → All Products → Import**
2. In your CSV, include columns: `meta:_gswc_gtin`, `meta:_gswc_brand`, `meta:_gswc_mpn`
3. Upload and import

Or use [Smart Auto-Fill](/docs/features/smart-auto-fill) for automatic suggestions.

### Why isn't my brand auto-detected?

Smart Auto-Fill detects brands from a database of common brand names. If your brand isn't detected:
- Add it manually
- The brand might not be in the database
- Check product title format (brand should be clear)

## Platform-Specific

### Why does Google reject my products?

Common reasons:
- Missing required data (GTIN, brand)
- Price mismatch with landing page
- Policy violations
- Image quality issues

Check Google Merchant Center diagnostics for specific errors. See [Common Errors](/docs/troubleshooting/common-errors) for solutions.

### Can I use the same feed for Google and Facebook?

Technically yes, but we recommend separate feeds because:
- Platforms have different requirements
- You may want different products in each
- Optimization is easier per-platform

### How do I set up Facebook Dynamic Ads?

1. Create a Facebook/Instagram feed
2. Submit to Facebook Commerce Manager
3. Install Facebook Pixel on your site
4. Create a Dynamic Ads campaign

See [Facebook & Instagram](/docs/feeds/facebook-instagram) for details.

### Does it support local inventory ads?

Currently, the plugin focuses on online product feeds. Local inventory ads require additional data (store locations, local stock) that's managed separately in Merchant Center.

## Technical

### What WooCommerce version is required?

WooCommerce 6.0 or higher. We recommend staying reasonably current for best compatibility and security.

### Does it work with HPOS?

Yes. The plugin is fully compatible with WooCommerce's High-Performance Order Storage (HPOS).

### Can I edit the feed file directly?

You can, but changes will be overwritten on the next regeneration. Instead, use feed customization to modify output.

### Where are feed files stored?

Feeds are stored in `/wp-content/uploads/product-feeds/`. They're regenerated based on your schedule settings.

### Why is feed generation slow?

For large catalogs:
- Enable background processing in Settings
- Reduce products with filters if possible
- Increase PHP memory limits
- Use a faster hosting environment

## Billing & License

### How do renewals work?

Licenses are annual. Before expiration, you'll receive a renewal reminder. Renewing ensures continued updates and support.

If you don't renew:
- The plugin continues working
- You won't receive updates
- Priority support access ends

### Can I get a refund?

We offer a 14-day money-back guarantee. If it doesn't work for your needs, contact support for a refund.

### How do I cancel my subscription?

Email [support@wooplugin.pro](mailto:support@wooplugin.pro) to cancel. Your license remains active until the current period ends.

### Do you offer discounts?

- **Renewals**: Existing customers get a renewal discount
- **Upgrades**: Pay the difference to upgrade tiers
- Watch for holiday sales on our website

## Support

### How do I contact support?

- Email: support@wooplugin.pro
- Contact form: [wooplugin.pro/#contact](https://wooplugin.pro/#contact)
- Response time: Within 24 hours (business days)

### What information should I include in support requests?

Help us help you faster:
- Your license key or purchase email
- WordPress version
- WooCommerce version
- Plugin version
- Description of the issue
- Any error messages (screenshots help)
- Steps to reproduce

### Do you offer setup services?

Yes, we offer done-for-you setup for an additional fee. Contact support for details.
