---
title: Installation
description: How to install Accessibility Scanner on your WordPress site.
---

## Requirements

- WordPress 6.0 or higher
- PHP 8.0 or higher
- At least 128MB of PHP memory

WooCommerce is **not required**. The plugin works with any WordPress site.

## Installation from WordPress.org

1. Go to **Plugins → Add New** in your WordPress admin
2. Search for **"Accessibility Scanner"**
3. Click **Install Now** on "Accessibility Scanner – WCAG Compliance"
4. Click **Activate**

### Manual Installation

1. Download the plugin ZIP from [WordPress.org](https://wordpress.org/plugins/wp-accessibility-scanner/)
2. Go to **Plugins → Add New → Upload Plugin**
3. Select the ZIP file and click **Install Now**
4. Click **Activate**

## After Installation

Once activated, you'll find the plugin under **Accessibility** in the WordPress admin menu:

- **Dashboard** — Overview of your accessibility score and recent scans
- **Scanner** — Run scans on any page
- **Issues** — View and fix detected issues
- **Settings** — Configure scanning options
- **License** — Activate a Pro license

## First Scan

Ready to scan your first page? Head to [Your First Scan](/docs/accessibility/getting-started/first-scan) for a step-by-step walkthrough.

## Troubleshooting

### Plugin doesn't appear in admin menu

- Verify the plugin is activated under **Plugins → Installed Plugins**
- Check that no other accessibility plugin is conflicting
- Clear any page caches

### Memory or timeout errors

Large pages may need increased limits. Add to `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
```

See the [FAQ](/docs/accessibility/troubleshooting/faq) for more solutions.
