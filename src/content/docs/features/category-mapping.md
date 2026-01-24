---
title: Category Mapping
description: Map WooCommerce categories to Google Product Categories for better ad performance.
---

## Overview

Category mapping connects your WooCommerce categories to the standardized Google Product Category (GPC) taxonomy. This helps shopping platforms correctly classify your products, improving ad targeting and search relevance.

## Why Map Categories?

### Platform Requirements

- Google Shopping requires or strongly recommends category data
- Facebook uses categories for ad targeting
- Proper categories improve product visibility

### Better Performance

Products with accurate categories:

- Appear in more relevant searches
- Get matched to appropriate audiences
- Have higher click-through rates
- Cost less per click

## The Google Product Taxonomy

Google maintains a taxonomy of 5,500+ product categories organized hierarchically:

```
Apparel & Accessories
├── Clothing
│   ├── Dresses
│   ├── Pants
│   └── Shirts & Tops
├── Shoes
│   ├── Athletic Shoes
│   └── Boots
└── Jewelry
    ├── Necklaces
    └── Rings
```

The plugin includes the full, up-to-date taxonomy.

## Setting Up Mappings

### Accessing Category Mapping

1. Go to **WooCommerce → Product Feed → Settings**
2. Click the **Category Mapping** tab

You'll see your WooCommerce categories listed with mapping options.

### Mapping a Category

For each WooCommerce category:

1. Click the category row
2. Search for the appropriate Google category
3. Type keywords to filter (e.g., "running shoes")
4. Select the best match
5. Save mappings

### Hierarchical Mapping

Parent mappings can apply to children:

- Map "Clothing" to a general apparel category
- Child categories inherit unless specifically mapped
- Override children with more specific mappings

**Example**:
- "Apparel" → Apparel & Accessories > Clothing
- "T-Shirts" → Apparel & Accessories > Clothing > Shirts & Tops

## Finding the Right Category

### Search Tips

Use specific keywords:
- Product type ("running shoes")
- Material ("cotton dress")
- Intended use ("gaming laptop")

### Category Specificity

Be as specific as possible:

**Good**: Apparel & Accessories > Shoes > Athletic Shoes > Running Shoes

**Less Specific**: Apparel & Accessories > Shoes

More specific categories improve targeting.

### When Categories Don't Match

If your products don't fit standard categories:

1. Find the closest reasonable match
2. Use the most specific applicable category
3. Consider if products should be in different WooCommerce categories

## Auto-Suggestion

The plugin can suggest categories based on:

- WooCommerce category names
- Product titles in that category
- Existing mappings for similar categories

### Enabling Auto-Suggestion

1. In Category Mapping, click **Auto-Suggest**
2. Review suggestions for unmapped categories
3. Accept, modify, or dismiss each suggestion
4. Save your choices

## Managing Mappings

### Bulk Actions

Map multiple categories quickly:

1. Select categories (checkboxes)
2. Click **Bulk Actions**
3. Choose **Set Category**
4. Select a Google category
5. Apply to all selected

### Export/Import Mappings

Back up or transfer your mappings:

**Export**:
1. Click **Export Mappings**
2. Download CSV file
3. Contains category ID → Google category pairs

**Import**:
1. Prepare CSV with your mappings
2. Click **Import Mappings**
3. Upload the file
4. Review and confirm

### Clear Mappings

Remove all mappings to start fresh:

1. Click **Clear All Mappings**
2. Confirm the action
3. All mappings reset to "Not mapped"

## How Mappings Apply

### Feed Generation

When generating feeds:

1. Plugin checks product's WooCommerce category
2. Looks up the mapped Google category
3. Includes it in the feed

### Multiple Categories

If a product is in multiple WooCommerce categories:

- The primary category's mapping is used
- Or the most specific mapped category

### Unmapped Categories

Products in unmapped categories:

- May use parent category mapping
- Or have no category in the feed
- Platforms may auto-categorize (less accurately)

## Category Requirements by Platform

| Platform | Category Field | Required? |
|----------|---------------|-----------|
| Google Shopping | google_product_category | Strongly recommended |
| Facebook | google_product_category | Recommended |
| Pinterest | google_product_category | Recommended |
| Bing | product_category | Optional |
| TikTok | google_product_category | Recommended |

## Best Practices

### Map All Active Categories

Ensure every category with products has a mapping:

1. Go to Category Mapping
2. Filter to show "Not Mapped"
3. Map each category

### Use Specific Categories

- Avoid top-level general categories
- Drill down to the most specific match
- Update mappings as taxonomy evolves

### Review Periodically

- Google updates their taxonomy
- New products may need new mappings
- Check for "Not Mapped" products regularly

### Test Your Mappings

After mapping:

1. Generate a feed
2. Submit to Google Merchant Center
3. Check Diagnostics for category issues
4. Adjust mappings if needed

## Troubleshooting

### "Category not found" Errors

The taxonomy may have updated. Try:

- Searching for the category again
- Using alternative keywords
- Selecting a parent category temporarily

### Products Missing Categories

Check:

- Product has a WooCommerce category assigned
- That category is mapped
- Feed includes category mapping

### Wrong Category Showing

Verify:

- Correct mapping for the product's category
- No conflicting parent/child mappings
- Feed was regenerated after mapping changes
