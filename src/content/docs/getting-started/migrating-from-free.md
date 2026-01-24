---
title: Migrating from Free
description: How to upgrade from the free plugin to Pro without losing your settings.
---

## Overview

The Pro version is a complete replacement for the free plugin, not an add-on. When you install Pro, it automatically migrates all your settings and data from the free version.

**New to the plugin?** If you haven't used the free version, just install Pro directly—no migration needed.

## What Gets Migrated

Everything transfers automatically:

- **Feed settings** (store name, default brand, condition, etc.)
- **Product fields** (GTIN, Brand, MPN values stored in products)
- **Feed URLs stay the same** (no need to update Merchant Center)

## Migration Steps

### Step 1: Install Pro

Follow the [installation guide](/docs/getting-started/installation) to upload and install the Pro plugin. **Do not deactivate the free version yet.**

### Step 2: Activate Pro

When you activate Pro, it will:

1. Check for existing Free plugin data
2. Automatically copy settings to Pro
3. Show a notice to deactivate the free version

### Step 3: Deactivate Free

Pro will display a notice with a button to deactivate the free version. Click it, or manually:

1. Go to **Plugins**
2. Find "Product Feed for WooCommerce" (the free version)
3. Click **Deactivate**

You can delete the free plugin after deactivating—Pro has all the functionality.

### Step 4: Activate Your License

Don't forget to [activate your license](/docs/getting-started/license-activation) to enable updates and support.

### Step 5: Verify

1. Go to **WooCommerce → Product Feeds Pro**
2. Verify your feeds appear and URLs are correct
3. Check that feeds still work in Merchant Center

## Feed URLs

Your feed URLs remain the same after migration. Both plugins use identical URL structures, so there's no need to update your Google Merchant Center or other platform configurations.

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

1. Deactivate Pro (this automatically clears Pro's scheduled tasks)
2. Reactivate the free version
3. Your basic settings and product data will still work

Note: Pro-only features (additional feed channels, smart auto-fill, advanced filters) won't be available in the free version.
