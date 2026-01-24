---
title: Smart Auto-Fill
description: Automatically suggest GTIN, Brand, and MPN values based on product data.
---

## Overview

Smart Auto-Fill uses your product data to automatically suggest values for GTIN, Brand, MPN, and Google Product Category. This saves hours of manual data entry, especially for stores with many products.

## How It Works

Smart Auto-Fill analyzes:

- Product title
- Product categories
- Product tags
- Existing attributes
- Product descriptions

Based on this data, it suggests appropriate values that you can accept or modify.

## Enabling Smart Auto-Fill

### Global Setting

1. Go to **WooCommerce → Settings → Product Feeds**
2. Find **Smart Auto-Fill**
3. Toggle it **On**
4. Choose which fields to auto-fill:
   - Brand
   - Google Product Category
5. Save settings

### On Product Pages

When enabled, Smart Auto-Fill runs automatically when you:

- Open a product for editing
- Create a new product
- Import products

Look for the "Auto-filled" indicator next to suggested values.

## Brand Detection

Smart Auto-Fill identifies brands by:

1. **Known brand lists**: Common electronics, fashion, home goods brands
2. **Title patterns**: Brand names often appear at the start of titles
3. **Category associations**: Certain categories have known brand patterns
4. **Tag matching**: Product tags that match brand names

### Example

For a product titled "Nike Air Max 90 Running Shoes":

- Brand suggested: **Nike**
- Confidence: High (known brand, title position)

## Category Suggestions

Smart Auto-Fill suggests Google Product Categories based on:

1. **WooCommerce categories**: Mapped to Google's taxonomy
2. **Product keywords**: Title and description analysis
3. **Product type**: Simple, variable, grouped, etc.

### Example

For a product in WooCommerce category "Men's Shoes":

- Suggested: **Apparel & Accessories > Shoes > Men's Shoes**

## Acceptance Workflow

### Automatic Application

When set to automatic mode:

1. Suggested values are applied immediately
2. Products save with suggested data
3. You can override at any time

### Manual Review

When set to suggestion mode:

1. Suggestions appear with a "Suggested" badge
2. Click **Accept** to apply
3. Click **Edit** to modify
4. Click **Dismiss** to ignore

## Bulk Auto-Fill

Apply Smart Auto-Fill to multiple products at once:

1. Go to **Products → All Products**
2. Select products (or use bulk select)
3. From **Bulk Actions**, choose **Auto-Fill Product Feed Data**
4. Click **Apply**
5. Review the results summary

### Filtering for Bulk Operations

Target specific products:

- Products missing GTIN
- Products missing Brand
- Products without category mapping
- Products in specific categories

## Configuration Options

### Field Settings

| Setting | Options | Default |
|---------|---------|---------|
| Auto-fill Brand | On/Off | On |
| Auto-fill Category | On/Off | On |
| Overwrite existing | Yes/No | No |
| Confidence threshold | Low/Medium/High | Medium |

### Overwrite Behavior

**When "Overwrite existing" is Off:**
- Only empty fields receive suggestions
- Existing values are preserved

**When "Overwrite existing" is On:**
- All fields may receive new suggestions
- Useful for re-analyzing after title changes

### Confidence Threshold

| Level | Behavior |
|-------|----------|
| Low | Accept most suggestions |
| Medium | Accept reasonable matches |
| High | Only accept high-confidence matches |

Higher thresholds mean fewer automatic fills but greater accuracy.

## Best Practices

### Review Suggestions

While Smart Auto-Fill is accurate, always review:

- High-value products
- Products in unfamiliar categories
- Items with unusual naming

### Keep Titles Consistent

Smart Auto-Fill works best with structured titles:

- **Good**: "Apple iPhone 15 Pro Max 256GB Black"
- **Poor**: "Latest smartphone great deal!!!"

### Use Categories Effectively

Well-organized WooCommerce categories improve suggestions:

- Map categories to Google taxonomy first
- Use specific, hierarchical categories
- Consistent categorization across products

## Limitations

Smart Auto-Fill cannot:

- Generate GTINs (these must come from manufacturers)
- Identify brands not in its database
- Work with non-English product data (currently)
- Override manually entered data (unless configured)

For GTIN data, you'll need to obtain values from:

- Product packaging
- Manufacturer databases
- Distributor data feeds
- GS1 registrations
