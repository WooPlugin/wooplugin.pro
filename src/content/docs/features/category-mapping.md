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

Go to **WooCommerce → Category Mapping** in your WordPress admin.

You'll see all your WooCommerce categories listed in a table.

### Mapping a Category

For each WooCommerce category:

1. Find the category in the list
2. Type in the text field to search Google categories
3. Enter the full category path (e.g., "Apparel & Accessories > Shoes > Athletic Shoes")
4. Mappings save automatically as you type

### Hierarchical Mapping

Parent mappings apply to child categories:

- Map "Clothing" to a general apparel category
- Child categories without their own mapping inherit from the parent
- Add specific mappings to children to override

**Example**:
- "Apparel" → Apparel & Accessories > Clothing
- "T-Shirts" → Apparel & Accessories > Clothing > Shirts & Tops (more specific)

## Finding the Right Category

### Search Tips

Use specific keywords when searching:
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
3. Consider reorganizing WooCommerce categories if needed

## How Mappings Apply

### Feed Generation

When generating feeds:

1. Plugin checks product's WooCommerce category
2. Looks up the mapped Google category
3. Includes it in the feed

### Multiple Categories

If a product is in multiple WooCommerce categories:

- The first mapped category found is used
- Parent categories are checked if no direct mapping exists

### Unmapped Categories

Products in unmapped categories:

- Use parent category mapping if available
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

### Map All Categories

Ensure every category with products has a mapping. Categories without mappings will either inherit from parents or have no category data in feeds.

### Use Specific Categories

- Avoid top-level general categories
- Drill down to the most specific match
- More specific = better ad targeting

### Review Periodically

- Google updates their taxonomy occasionally
- New product categories may need mappings
- Check feeds for category warnings

## Troubleshooting

### Products Missing Categories

Check:

- Product has a WooCommerce category assigned
- That category (or a parent) is mapped
- Feed was regenerated after adding mappings

### Wrong Category Showing

Verify:

- Correct mapping for the product's category
- Check if a parent category mapping is being inherited
- Regenerate feed after making changes
