---
title: Migrating from Free
description: How to upgrade from the free plugin to Pro without losing your settings.
---

## Overview

The Pro version is a complete replacement for the free plugin, not an add-on. When you install Pro, it automatically migrates all your settings and data from the free version.

## What Gets Migrated

Everything transfers automatically:

- **All feed configurations** (URLs, settings, filters)
- **Product fields** (GTIN, Brand, MPN values)
- **Category mappings** (Google Product Categories)
- **Plugin settings** (all options and preferences)
- **Feed URLs stay the same** (no need to update Merchant Center)

## Migration Steps

### Step 1: Install Pro

Follow the [installation guide](/docs/getting-started/installation) to upload and install the Pro plugin. **Do not deactivate the free version yet.**

### Step 2: Activate Pro

When you activate Pro, it will:

1. Detect the free version is installed
2. Display a migration prompt
3. Copy all settings from Free to Pro
4. Offer to deactivate the free version

### Step 3: Verify Migration

After migration:

1. Go to **WooCommerce → Product Feed**
2. Check that all your feeds appear
3. Verify feed URLs are correct
4. Test that feeds still work in Merchant Center

### Step 4: Activate Your License

Don't forget to [activate your license](/docs/getting-started/license-activation) to enable updates and support.

### Step 5: Remove Free Version (Optional)

Once you've verified everything works:

1. Go to **Plugins**
2. Find "Product Feed for WooCommerce" (the free version)
3. Click **Deactivate**, then **Delete**

Keeping the free version installed won't cause problems, but it's cleaner to remove it.

## Feed URLs

Your feed URLs remain the same after migration. Both plugins use identical URL structures, so there's no need to update your Google Merchant Center or other platform configurations.

## Troubleshooting

### Settings didn't migrate

If settings weren't automatically migrated:

1. Ensure both plugins are installed
2. Deactivate and reactivate Pro
3. The migration prompt should appear

If it still doesn't work, you can manually export settings:

1. In the free plugin, go to **Settings → Export**
2. Download the settings file
3. In Pro, go to **Settings → Import**
4. Upload the file

### Feed shows errors after migration

Regenerate your feed:

1. Go to **WooCommerce → Product Feed**
2. Find your feed and click **Regenerate**
3. Wait for generation to complete

### Product data missing

Product fields (GTIN, Brand, MPN) are stored in product meta and should persist automatically. If data appears missing:

1. Edit a product
2. Check the **Product Feed** tab
3. Verify fields have values

If fields are empty, the data may not have been saved in the expected format. [Contact support](/#contact) for help with data recovery.

## Reverting to Free

If you need to go back to the free version:

1. Deactivate Pro
2. Reactivate the free version
3. Your feeds and settings will still work

Note: Pro-only features (like additional feed formats or advanced filters) won't be available in the free version.
