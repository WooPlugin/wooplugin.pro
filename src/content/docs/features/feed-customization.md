---
title: Feed Customization
description: Customize feed output, field mapping, and data transformations.
---

## Overview

Feed customization lets you control exactly how your product data appears in feeds. Adjust field mappings, apply transformations, add custom columns, and format output to meet specific platform requirements.

## Field Mapping

### Default Mappings

The plugin automatically maps WooCommerce data to feed fields:

| WooCommerce | Google Shopping |
|-------------|-----------------|
| Product name | title |
| SKU | id |
| Description | description |
| Regular price | price |
| Sale price | sale_price |
| Stock status | availability |
| Product URL | link |
| Image URL | image_link |

### Customizing Mappings

Override default mappings:

1. Edit a feed
2. Go to **Field Mapping** tab
3. For each field, choose a source:
   - Standard WooCommerce field
   - Custom field (meta)
   - Static value
   - Calculated value

### Source Options

| Source Type | Description |
|-------------|-------------|
| Product field | Standard WooCommerce data |
| Custom field | Product meta key |
| Attribute | Product attribute value |
| Static | Fixed value for all products |
| Template | Combine multiple fields |

## Data Transformations

Apply transformations to modify values before output.

### Text Transformations

| Transform | Effect |
|-----------|--------|
| Uppercase | CONVERTS TO UPPERCASE |
| Lowercase | converts to lowercase |
| Title case | Converts To Title Case |
| Trim | Removes extra spaces |
| Strip HTML | Removes HTML tags |

### Value Transformations

| Transform | Effect |
|-----------|--------|
| Prefix | Adds text before value |
| Suffix | Adds text after value |
| Replace | Swaps one value for another |
| Default | Uses fallback if empty |

### Conditional Transforms

Apply transforms based on conditions:

```
If stock_status = "outofstock"
  Set availability = "out of stock"
Else
  Set availability = "in stock"
```

## Templates

Combine multiple fields into one output.

### Template Syntax

Use placeholders for fields:

```
{brand} - {title} ({color}, {size})
```

Outputs: "Nike - Running Shoes (Black, Size 10)"

### Available Placeholders

- `{title}` - Product name
- `{brand}` - Brand field
- `{sku}` - Product SKU
- `{price}` - Current price
- `{category}` - Primary category
- Any custom field: `{_custom_field_name}`

### Conditional Content

Include content conditionally:

```
{title}{if:color} - {color}{/if}
```

Only adds color if it exists.

## Custom Columns

Add extra columns to your feed.

### Adding Custom Columns

1. Go to **Field Mapping** → **Add Custom Field**
2. Enter the column name
3. Set the value source
4. Apply any transforms
5. Save

### Use Cases

- **custom_label_0-4**: Google's custom labels for campaign segmentation
- **identifier_exists**: Set to "no" for custom products
- **shipping_weight**: Calculated from product weight

## Price Formatting

### Currency Handling

Configure how prices appear:

| Setting | Example |
|---------|---------|
| Currency code | USD, EUR, GBP |
| Currency position | Before or after |
| Decimal separator | . or , |
| Thousands separator | , or . or space |

### Price Selection

Choose which price to use:

- Regular price
- Sale price (when active)
- Lowest variation price
- Price including tax
- Price excluding tax

### Price Modifiers

Adjust prices globally:

- Add fixed amount ($5)
- Add percentage (10%)
- Round to nearest dollar

## URL Customization

### Tracking Parameters

Add UTM parameters automatically:

```
?utm_source=google&utm_medium=shopping&utm_campaign={category}
```

### Affiliate/Partner Links

Transform URLs for affiliate tracking:

- Append affiliate IDs
- Redirect through tracking domains
- Add custom parameters

### Canonical URLs

Ensure correct URL format:

- Force HTTPS
- Remove www or add www
- Strip query parameters
- Use product ID URLs

## Image Handling

### Image Selection

Choose which image to use:

- Featured image (default)
- First gallery image
- Custom field image
- Variation image

### Image Transformations

- Force HTTPS URLs
- Resize through CDN parameters
- Replace image domain
- Add quality parameters

### Additional Images

Include multiple images:

```
additional_image_link_1
additional_image_link_2
...
additional_image_link_10
```

## Output Format

### File Format

Choose output format:

| Format | Best For |
|--------|----------|
| XML | Google, most platforms |
| CSV | Facebook, spreadsheet tools |
| TSV | Tab-separated requirements |
| JSON | API integrations |

### XML Settings

For XML output:

- Root element name
- Item element name
- Encoding (UTF-8)
- CDATA wrapping

### CSV Settings

For CSV output:

- Delimiter (comma, semicolon, tab)
- Enclosure character
- Header row inclusion
- Line ending style

## Advanced Options

### Condition Mapping

Map WooCommerce product condition:

```
Default: new
If tag contains "refurbished": refurbished
If tag contains "used": used
```

### Shipping Configuration

Set shipping data:

- Country
- Service name
- Price (fixed or calculated)
- Handling time

### Custom Attributes

Pass through any product data:

```
Column: material
Source: Attribute "material"
Default: Not specified
```

## Saving Configurations

### Per-Feed Settings

Each feed saves its own configuration.

### Templates

Save configurations as templates:

1. Set up a feed with your customizations
2. Click **Save as Template**
3. Name the template
4. Apply to new feeds later

### Import/Export

Share configurations:

1. Export feed settings as JSON
2. Import into another feed or site
