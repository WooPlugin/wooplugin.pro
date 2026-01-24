---
title: Installation
description: How to install Product Feed for WooCommerce Pro on your WordPress site.
---

## Requirements

Before installing the Pro plugin, ensure your site meets these requirements:

- WordPress 5.8 or higher
- WooCommerce 6.0 or higher
- PHP 7.4 or higher (PHP 8.0+ recommended)
- At least 128MB of PHP memory

## Download the Plugin

After purchasing Pro, you'll receive an email with your download link. You can also download the plugin from your [account dashboard](https://wooplugin.pro/account).

1. Log in to your WooPlugin account
2. Navigate to **Downloads**
3. Click **Download** next to Product Feed for WooCommerce Pro

## Installation Methods

### Method 1: Upload via WordPress Admin (Recommended)

1. Go to **Plugins → Add New** in your WordPress admin
2. Click the **Upload Plugin** button at the top
3. Choose the downloaded ZIP file
4. Click **Install Now**
5. After installation, click **Activate Plugin**

### Method 2: Upload via FTP/SFTP

1. Extract the ZIP file on your computer
2. Connect to your server via FTP/SFTP
3. Upload the `product-feed-for-woocommerce-pro` folder to `/wp-content/plugins/`
4. Go to **Plugins** in WordPress admin
5. Find "Product Feed for WooCommerce Pro" and click **Activate**

## After Installation

Once activated, you'll find the plugin at **WooCommerce → Product Feeds Pro**.

Your next steps:

1. [Activate your license](/docs/getting-started/license-activation) to enable updates and support
2. [Create your first feed](/docs/feeds/google-shopping) for Google Shopping or other platforms

## Troubleshooting Installation

### "Upload failed: destination folder already exists"

This means you have the free version installed. You have two options:

- **Recommended**: Keep the free version active, install Pro, and it will prompt you to migrate settings and deactivate the free version automatically
- **Manual**: Deactivate and delete the free version first, then install Pro

### "Installation failed: could not create directory"

Check that your `/wp-content/plugins/` directory is writable. Contact your hosting provider if you're unsure how to fix permissions.

### Memory or timeout errors

Large sites may need increased limits. Add to `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
```

Or contact your host to increase the PHP max_execution_time.
