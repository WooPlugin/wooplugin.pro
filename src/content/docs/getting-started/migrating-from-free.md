---
title: Migrating from Free
description: How to upgrade from the free plugin to Pro without losing your settings.
---

## Overview

The Pro version is a complete replacement for the free plugin, not an add-on. When you install Pro, it automatically migrates all your settings and data from the free version.

**New to the plugin?** You still need the Free plugin first—it provides the easiest way to install Pro. See the [installation guide](/docs/getting-started/installation).

## What Gets Migrated

Everything transfers automatically:

- **Feed settings** (store name, default brand, condition, etc.)
- **Product fields** (GTIN, Brand, MPN values stored in products)
- **Feed URLs stay the same** (no need to update Merchant Center)

## Upgrade Steps

### Step 1: Enter Your License Key

1. Go to **WooCommerce → Google Shopping** in your WordPress admin
2. Scroll to the "Upgrade to Pro" section
3. Enter your license key (from purchase email)
4. Click **Validate & Install Pro**

### Step 2: Automatic Migration

Pro installs and activates automatically. During activation:

1. Pro copies all settings from the Free plugin
2. Pro copies your license key (already activated)
3. Free plugin deactivates automatically

### Step 3: Verify

1. Go to **WooCommerce → Settings → Product Feeds**
2. Verify your feeds appear and URLs are correct
3. Check that feeds still work in Merchant Center

That's it. You're now running Pro.

## Feed URLs

Your feed URLs remain the same after migration. Both plugins use identical URL structures, so there's no need to update your Google Merchant Center or other platform configurations.

## After Migration

You can safely delete the free plugin—Pro has all its functionality plus advanced features. The free plugin is only needed for the initial Pro installation.

## Troubleshooting

### Settings didn't migrate

Settings migrate automatically when Pro activates for the first time. If something is missing:

1. Deactivate and reactivate Pro
2. Check if the setting exists in Pro's settings page
3. Manually configure any missing settings

### Product data missing

Product fields (GTIN, Brand, MPN) are stored in product meta and persist automatically. If data appears missing:

1. Edit a product
2. Check the **Product Feed** tab
3. Verify fields have values

The same meta keys are used by both Free and Pro, so data should be available.

## Reverting to Free

If you need to go back to the free version:

1. Deactivate Pro
2. Reactivate the free version (reinstall from WordPress.org if deleted)
3. Your basic settings and product data will still work

Note: Pro-only features (additional feed channels, smart auto-fill, advanced filters) won't be available in the free version.
