---
title: Installation
description: How to install Product Feed for WooCommerce Pro on your WordPress site.
---

## Requirements

Before installing the Pro plugin, ensure your site meets these requirements:

- WordPress 6.0 or higher
- WooCommerce 6.0 or higher
- PHP 8.0 or higher
- At least 128MB of PHP memory

## Recommended: Automatic Installation via Free Plugin

The easiest way to install Pro is through the free plugin:

1. Install **"GTIN Product Feed for Google Shopping"** from [WordPress.org](https://wordpress.org/plugins/product-feed-for-woocommerce/)
2. Go to **WooCommerce → Google Shopping** in your WordPress admin
3. Scroll to the "Upgrade to Pro" section
4. Enter your license key (received after purchase)
5. Click **Validate & Install Pro**
6. Pro downloads and installs automatically
7. The free plugin deactivates and Pro activates with your license ready

That's it! No ZIP files to download or upload.

## Manual Installation

If automatic installation doesn't work, contact support@wooplugin.pro for a direct download link.

### Upload via WordPress Admin

1. Download the Pro ZIP file (from email or support)
2. Go to **Plugins → Add New** in your WordPress admin
3. Click the **Upload Plugin** button at the top
4. Choose the downloaded ZIP file
5. Click **Install Now**
6. After installation, click **Activate Plugin**
7. Go to **WooCommerce → Settings → Product Feeds → License** to activate your license

## After Installation

Once activated, you'll find the plugin at **WooCommerce → Settings → Product Feeds**.

Your next steps:

1. [Activate your license](/docs/getting-started/license-activation) (if not auto-activated)
2. [Create your first feed](/docs/feeds/google-shopping) for Google Shopping or other platforms

## Troubleshooting Installation

### "Upload failed: destination folder already exists"

This means you already have a version installed. Options:

- **If you have Free installed**: Use the automatic installation method above instead
- **If you have an older Pro version**: Deactivate and delete it first, then install the new version

### "Installation failed: could not create directory"

Check that your `/wp-content/plugins/` directory is writable. Contact your hosting provider if you're unsure how to fix permissions.

### Memory or timeout errors

Large sites may need increased limits. Add to `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
```

Or contact your host to increase the PHP max_execution_time.

## Do I Need the Free Version?

**For installation**: The free plugin provides the easiest way to install Pro with one-click automatic installation.

**After Pro is installed**: You only need Pro. The free plugin deactivates automatically when Pro activates. Pro includes all features from the free version plus advanced features.
