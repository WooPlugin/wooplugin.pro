---
title: Product Fields
description: Add GTIN, Brand, MPN, and other custom fields to your products.
---

## Overview

Product fields let you add important product identifiers like GTIN (barcode), Brand, and MPN (Manufacturer Part Number) to your WooCommerce products. These fields are essential for Google Shopping and other advertising platforms.

## Available Fields

### Standard Fields

| Field | Description | Example |
|-------|-------------|---------|
| GTIN | Global Trade Item Number (barcode) | 012345678905 |
| Brand | Manufacturer or brand name | Apple |
| MPN | Manufacturer Part Number | A2894 |

### GTIN Types

GTIN is a universal identifier that includes:

- **UPC** (12 digits) - North America
- **EAN** (13 digits) - International
- **ISBN** (13 digits) - Books
- **JAN** (13 digits) - Japan

The plugin accepts any valid GTIN format.

## Adding Fields to Products

### Single Product

1. Edit a product
2. Go to the **Product Feed** tab (in Product Data section)
3. Enter values for GTIN, Brand, MPN
4. Save the product

### Variable Products

For variable products, you can set fields at:

**Product Level** (default for all variations):
- Edit the parent product
- Set values in Product Feed tab
- All variations inherit these values

**Variation Level** (overrides parent):
- Edit the product
- Go to **Variations** tab
- Expand a variation
- Find Product Feed fields
- Enter variation-specific values

### Bulk Editing

Edit multiple products at once:

1. Go to **Products → All Products**
2. Select products to edit
3. Choose **Edit** from Bulk Actions
4. Click **Apply**
5. Find Product Feed fields in the bulk edit panel
6. Enter values and save

## Import/Export

### Exporting Product Data

Download your current product feed data:

1. Go to **WooCommerce → Product Feed → Settings**
2. Click **Import/Export** tab
3. Click **Export**
4. Choose format (CSV or JSON)
5. Download the file

The export includes:

- Product ID
- SKU
- Title
- GTIN
- Brand
- MPN
- Google Product Category

### Importing Product Data

Upload product field data in bulk:

1. Prepare your CSV file with columns:
   - `sku` or `id` (required, to match products)
   - `gtin`
   - `brand`
   - `mpn`

2. Go to **WooCommerce → Product Feed → Settings**
3. Click **Import/Export** tab
4. Click **Choose File** and select your CSV
5. Click **Import**
6. Review the import summary

### CSV Template

Download a template with your products pre-filled:

1. Click **Download Template**
2. Open in Excel or Google Sheets
3. Fill in GTIN, Brand, MPN columns
4. Save as CSV
5. Import back into the plugin

## Field Validation

### GTIN Validation

The plugin validates GTINs:

- Checks digit count (8, 12, 13, or 14)
- Validates check digit
- Flags invalid formats

Invalid GTINs show a warning but can still be saved.

### Brand Validation

No strict validation, but recommendations:

- Use official brand names
- Be consistent across products
- Match manufacturer's branding

### MPN Validation

No format requirements. MPNs vary by manufacturer:

- Alphanumeric combinations
- May include dashes or dots
- Case-sensitive on some platforms

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

## Field Mapping

The plugin automatically maps these fields to platform requirements:

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
- Using the exempt values for custom products
- Using [Smart Auto-Fill](/docs/features/smart-auto-fill) for suggestions

### Field Not Saving

If values don't save:

- Check for JavaScript errors (browser console)
- Ensure user has edit permissions
- Try a different browser
- Check for plugin conflicts
