---
title: Product Fields
description: Add GTIN, Brand, MPN, and other custom fields to your products.
---

## Overview

Product fields let you add important product identifiers like GTIN (barcode), Brand, and MPN (Manufacturer Part Number) to your WooCommerce products. These fields are essential for Google Shopping and other advertising platforms.

## Available Fields

### Product Identifiers

| Field | Description | Example |
|-------|-------------|---------|
| GTIN | Global Trade Item Number (barcode) | 012345678905 |
| Brand | Manufacturer or brand name | Apple |
| MPN | Manufacturer Part Number | A2894 |
| Condition | new, refurbished, used | new |
| Identifier exists | Yes/No for custom products | No |

### Product Attributes (Pro)

| Field | Description |
|-------|-------------|
| Google Product Category | Category ID or path |
| Age Group | newborn, infant, toddler, kids, adult |
| Gender | male, female, unisex |
| Color | Product color |
| Size | Product size |
| Material | Product material |
| Pattern | Product pattern |

### Custom Labels

Custom labels 0-4 for campaign segmentation in Google Ads.

## Adding Fields to Products

### Single Product

1. Edit a product
2. Go to the **Product Feeds** tab (in Product Data section)
3. Enter values for GTIN, Brand, MPN, and other fields
4. Save the product

### Variable Products

For variable products, you can set fields at:

**Product Level** (default for all variations):
- Edit the parent product
- Set values in Product Feeds tab
- All variations inherit these values

**Variation Level** (overrides parent):
- Edit the product
- Go to **Variations** tab
- Expand a variation
- Find Product Feed fields (GTIN, MPN, Brand, Color, Size)
- Enter variation-specific values

## GTIN Types

GTIN is a universal identifier that includes:

- **UPC** (12 digits) - North America
- **EAN** (13 digits) - International
- **ISBN** (13 digits) - Books
- **JAN** (13 digits) - Japan

The plugin accepts any valid GTIN format and also reads from WooCommerce's built-in GTIN field.

## Field Validation

### GTIN Validation

The plugin validates GTINs:

- Checks digit count (8, 12, 13, or 14)
- Validates check digit
- Flags invalid formats

Invalid GTINs show a warning but can still be saved.

### Brand and MPN

No strict validation. Use official brand names and be consistent across products.

## Where to Find Product Data

### GTIN Sources

- Product packaging (barcode number)
- Manufacturer's website
- Distributor data sheets
- GS1 (for your own products)

### Brand Names

- Use the manufacturer's official name
- Check their website for correct spelling
- Be consistent with capitalization

### MPN

- Manufacturer's documentation
- Product packaging
- Invoice or purchase order

## Bulk Import via WooCommerce

To import product data in bulk, use WooCommerce's built-in product importer:

1. Go to **Products → All Products**
2. Click **Import**
3. In your CSV, include columns for custom meta:
   - `meta:_gswc_gtin`
   - `meta:_gswc_brand`
   - `meta:_gswc_mpn`
4. Upload and import

## Field Mapping

The plugin automatically maps fields to platform requirements:

| Your Field | Google | Facebook | Bing |
|------------|--------|----------|------|
| GTIN | gtin | gtin | gtin |
| Brand | brand | brand | brand |
| MPN | mpn | mpn | mpn |

## Best Practices

### Prioritize High-Value Products

Focus on products that:

- Have high margins
- Are advertised frequently
- Come from well-known brands

### Use Consistent Formatting

- Same brand capitalization everywhere
- No extra spaces in GTINs
- Standardized MPN formats

### Verify Data Accuracy

Wrong identifiers can hurt ad performance:

- Mismatched GTINs may be flagged
- Wrong brands affect category matching
- Invalid MPNs may not match shopping queries

## Troubleshooting

### "GTIN not valid" Errors

Check:

- Correct number of digits
- No letters (GTINs are numeric)
- Valid check digit

Use an online GTIN validator to verify.

### Missing Data Warnings

Platforms warn about missing identifiers. Address by:

- Adding GTIN/Brand/MPN where available
- Setting "Identifier exists" to No for custom products
- Using [Smart Auto-Fill](/docs/features/smart-auto-fill) for suggestions

### Field Not Saving

If values don't save:

- Check for JavaScript errors (browser console)
- Ensure user has edit permissions
- Try a different browser
- Check for plugin conflicts
