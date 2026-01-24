---
title: Product Filters
description: Include or exclude products from feeds based on rules and conditions.
---

## Overview

Product filters control which products appear in your feeds. You can include or exclude products based on categories, stock status, price, tags, and custom conditions.

## Why Filter Products?

Not all products belong in every feed:

- **Out of stock**: Excluded to avoid disapprovals
- **Low margin**: Not worth advertising costs
- **Draft products**: Not ready for public
- **Category restrictions**: Platform policies may prohibit certain items

## Filter Types

### Include Filters

Products must match these rules to appear in the feed.

**Example**: Only include products from "Electronics" category

### Exclude Filters

Products matching these rules are removed from the feed.

**Example**: Exclude products with price under $10

## Setting Up Filters

### Per-Feed Filters

Each feed can have its own filters:

1. Go to **WooCommerce → Product Feed**
2. Edit a feed
3. Click the **Filters** tab
4. Add include and exclude rules
5. Save the feed

### Global Filters

Apply filters to all feeds:

1. Go to **WooCommerce → Product Feed → Settings**
2. Click **Global Filters**
3. Set rules that apply everywhere

## Filter Conditions

### Category Filters

Filter by WooCommerce categories:

| Condition | Matches |
|-----------|---------|
| Is in category | Products in selected categories |
| Is not in category | Products NOT in selected categories |
| Is in category or children | Category and all sub-categories |

**Example**: Include only "Clothing" and its subcategories.

### Stock Status Filters

| Condition | Matches |
|-----------|---------|
| In stock | Products with stock |
| Out of stock | Products without stock |
| On backorder | Products allowing backorders |

**Example**: Exclude out-of-stock products.

### Price Filters

| Condition | Matches |
|-----------|---------|
| Price greater than | Above a threshold |
| Price less than | Below a threshold |
| Price between | Within a range |
| Has sale price | Currently on sale |

**Example**: Include products priced $25 or more.

### Tag Filters

| Condition | Matches |
|-----------|---------|
| Has tag | Products with specific tags |
| Does not have tag | Products without specific tags |
| Has any tag | Products with at least one tag |

**Example**: Exclude products tagged "discontinued".

### Product Type Filters

| Condition | Matches |
|-----------|---------|
| Is simple product | Simple products only |
| Is variable product | Variable products only |
| Is variation | Individual variations |
| Is grouped product | Grouped products |

**Example**: Include only simple and variable products.

### Custom Field Filters

Filter by any product meta:

| Condition | Matches |
|-----------|---------|
| Meta exists | Has the custom field |
| Meta equals | Field matches value |
| Meta contains | Field contains text |
| Meta is empty | Field has no value |

**Example**: Include only products where "brand" is not empty.

## Combining Filters

### AND Logic

When you add multiple conditions within one filter rule, they work with AND logic:

- Rule: Category is "Electronics" AND Price > $50
- Matches: Electronics products over $50

### OR Logic

Add separate filter rules for OR logic:

- Rule 1: Category is "Electronics"
- Rule 2: Category is "Computers"
- Matches: Products in either category

### Complex Filters

Combine for complex logic:

**Include**:
- Category is "Electronics" AND In stock
- Category is "Computers" AND In stock

**Exclude**:
- Price less than $10

This includes in-stock Electronics and Computers, but excludes anything under $10.

## Common Filter Patterns

### Advertising-Ready Products

Include only products ready for ads:

```
Include:
- In stock
- Has image
- GTIN is not empty OR Brand is not empty

Exclude:
- Price less than $10
- Category is "Gift Cards"
```

### High-Value Products Only

Focus budget on profitable items:

```
Include:
- Price greater than $50

Exclude:
- Tag is "clearance"
- Tag is "low-margin"
```

### New Arrivals Feed

Create a feed of recent products:

```
Include:
- Published date within last 30 days
- In stock
```

### Platform-Specific Filters

Some platforms have restrictions:

```
Exclude (for Facebook):
- Category is "Supplements"
- Category is "Weapons"
- Tag is "adult"
```

## Testing Filters

### Preview Mode

Test filters before generating:

1. Set up your filter rules
2. Click **Preview**
3. See which products would be included
4. Adjust rules as needed
5. Generate the feed

### Product Count

The filter interface shows:

- Total products in store
- Products matching filters
- Products that will be excluded

## Filter Performance

### Large Catalogs

Filters run during feed generation:

- Simple filters (category, stock) are fast
- Complex meta queries take longer
- Too many conditions slow generation

### Optimization Tips

- Use indexed fields when possible (category, stock status)
- Avoid regex patterns on large catalogs
- Combine related conditions efficiently

## Troubleshooting

### Products Missing from Feed

If expected products don't appear:

1. Check each filter rule individually
2. Verify product meets all include conditions
3. Confirm product doesn't match exclude rules
4. Test with filters disabled

### Too Many Products Excluded

If filter is too aggressive:

1. Review exclude rules
2. Check for overlapping conditions
3. Verify category selections are correct
4. Test rules in Preview mode

### Filter Changes Not Applied

After changing filters:

1. Save the feed settings
2. Regenerate the feed
3. Clear any caching
4. Check the new feed output
