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

## Installation Steps

1. Install **"GTIN Product Feed for Google Shopping"** from [WordPress.org](https://wordpress.org/plugins/product-feed-for-woocommerce/)
2. Go to **WooCommerce → Google Shopping** in your WordPress admin
3. Scroll to the "Upgrade to Pro" section
4. Enter your license key (received after purchase)
5. Click **Validate & Install Pro**
6. Pro plugin downloads and installs automatically
7. Pro plugin activates with your license ready

That's it. No ZIP files to download or upload.

## After Installation

Once activated, you'll find the plugin at **WooCommerce → Settings → Product Feeds**.

Your next steps:

1. [Activate your license](/docs/getting-started/license-activation) (if not auto-activated)
2. [Create your first feed](/docs/feeds/google-shopping) for Google Shopping or other platforms

## Troubleshooting

### Installation fails with an error

Contact support@wooplugin.pro with the error message. Common causes:

- PHP memory limit too low (needs 128MB+)
- Server can't make outbound HTTPS requests
- Plugin folder permissions issue

### Memory or timeout errors

Large sites may need increased limits. Add to `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
```

Or contact your host to increase the PHP max_execution_time.

## Do I Need the Free Version?

**For installation**: The free plugin provides the easiest way to install Pro with one-click automatic installation.

**After Pro is installed**: You only need Pro. The free plugin deactivates automatically when Pro activates. Pro includes all features from the free version plus advanced features.
