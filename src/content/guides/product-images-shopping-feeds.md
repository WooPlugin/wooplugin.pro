---
title: "Product Image Optimization for Google Shopping and Social Commerce"
description: "Optimize your WooCommerce product images for Google Shopping, Facebook, and Pinterest. Learn size requirements, best practices, and common mistakes to avoid."
publishedAt: 2026-02-10
category: google-shopping
keywords:
  - product images google shopping
  - ecommerce product photography
  - shopping feed images
  - product photo requirements
readingTime: "9 min read"
featured: false
coverImage:
  src: /images/covers/product-images.jpg
  alt: Team meeting discussing product strategy with laptop
  credit: Austin Distel
  creditUrl: https://unsplash.com/@austindistel
---

Your product images are often the first thing shoppers see on Google Shopping, Facebook, or Pinterest. A great image can mean the difference between a click and a scroll-past. This guide covers everything you need to know about optimizing product images for shopping feeds.

## Why Product Images Matter

On shopping platforms, images do the heavy lifting:

- **Google Shopping** - Images are the largest element in product listings
- **Facebook/Instagram** - Visual-first platforms where images drive engagement
- **Pinterest** - Entirely image-driven discovery

Studies show:
- Products with high-quality images get 94% more views
- Clear product images reduce return rates
- Multiple images increase conversion by up to 58%

## Image Requirements by Platform

### Google Shopping

| Requirement | Specification |
|-------------|---------------|
| Minimum size | 100 x 100 px |
| Apparel minimum | 250 x 250 px |
| Recommended | 800 x 800 px or larger |
| Maximum | 64 megapixels |
| File size | Max 16 MB |
| Format | JPEG, PNG, GIF, BMP, TIFF |
| Background | White or transparent preferred |

### Facebook / Instagram

| Requirement | Specification |
|-------------|---------------|
| Minimum size | 500 x 500 px |
| Recommended | 1024 x 1024 px |
| Aspect ratio | 1:1 (square) works best |
| Format | JPEG, PNG |
| File size | Max 8 MB |

### Pinterest

| Requirement | Specification |
|-------------|---------------|
| Minimum size | 600 x 900 px |
| Recommended | 1000 x 1500 px |
| Aspect ratio | 2:3 (vertical) performs best |
| Format | JPEG, PNG |

## Google Shopping Image Policies

Google has strict rules about what's allowed:

### Allowed

- Clean product photography
- White or neutral backgrounds
- Product clearly visible
- Small, unobtrusive watermarks/logos
- Lifestyle images (in addition to main image)

### Not Allowed

- Promotional text ("SALE", "FREE SHIPPING")
- Watermarks covering the product
- Placeholder or generic images
- Blurry or low-quality images
- Multiple products in main image (unless bundle)
- Borders or frames

### Category-Specific Rules

**Apparel:**
- Show on human model or flat lay
- Full product must be visible
- No mannequins with visible hardware

**Non-apparel:**
- Product should fill 75-90% of frame
- Show actual product, not packaging (unless selling packaging)

## Technical Optimization

### Image Size for WooCommerce

Configure WooCommerce image sizes:

1. Go to WooCommerce → Settings → Products
2. Under "Product images":
   - Main image width: 800px minimum
   - Thumbnail width: 300px
3. Regenerate thumbnails after changing

**Tip:** Use your feed plugin's full-size image option, not thumbnails.

### File Format Selection

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| JPEG | Photos | Small file size, universal | Lossy compression |
| PNG | Graphics, transparency | Lossless, transparency | Larger files |
| WebP | Modern sites | Best compression | Limited email support |

**Recommendation:** Use JPEG for product photos at 80-85% quality.

### Image Compression

Balance quality and file size:

1. **For Google Shopping:** Under 16 MB, but aim for under 500 KB
2. **For page speed:** Under 200 KB per image
3. **Tools:**
   - TinyPNG / TinyJPG
   - ShortPixel (WordPress plugin)
   - Imagify

### File Naming

Use descriptive, SEO-friendly file names:

**Good:**
- `nike-air-max-90-white-black-mens-running-shoe.jpg`
- `blue-cotton-t-shirt-front-view.jpg`

**Bad:**
- `IMG_4523.jpg`
- `product-1.jpg`
- `Screenshot 2024-01-15.png`

### Alt Text

Write descriptive alt text for every image:

```
Alt: Nike Air Max 90 men's running shoe in white and black colorway, side view
```

Benefits:
- Accessibility for screen readers
- SEO value
- Used in some feed attributes

## Photography Best Practices

### Equipment

You don't need expensive gear:

- **Camera:** Smartphone with good camera (iPhone, Pixel) works
- **Lighting:** Natural light or basic softbox kit ($50-100)
- **Background:** White poster board or sweep
- **Tripod:** Any stable mount for consistency

### Lighting Setup

**Option 1: Natural Light**
- Shoot near a large window
- Use white reflector to fill shadows
- Avoid direct sunlight (creates harsh shadows)

**Option 2: Basic Studio**
- Two softboxes at 45° angles
- White background
- Consistent, diffused light

### Composition

**Main product image:**
- Product fills 75-90% of frame
- Centered or slightly off-center
- Clean, uncluttered

**Additional images:**
- Different angles (front, back, side)
- Detail shots (texture, labels)
- Scale reference
- Lifestyle/in-use shots

### Background

**White background (recommended for main image):**
- RGB 255, 255, 255 or close
- Clean, professional look
- Required for some categories

**Lifestyle backgrounds:**
- Use for additional images
- Show product in context
- Popular on social platforms

## Multiple Images Strategy

Google and social platforms support multiple images:

### Google Shopping

| Attribute | Purpose |
|-----------|---------|
| `image_link` | Main product image |
| `additional_image_link` | Up to 10 additional images |

### Recommended Image Set

1. **Main image:** Product on white, front view
2. **Back view:** Show all sides
3. **Detail shot:** Texture, features, labels
4. **Scale reference:** Product with common object
5. **In-use/lifestyle:** Product being used
6. **Packaging:** If relevant to purchase decision

### Implementation in WooCommerce

1. Set main image in "Product image" section
2. Add additional images to "Product gallery"
3. Your feed plugin will export these as `additional_image_link`

## Social Media Optimization

### Pinterest-Specific

Pinterest favors vertical images:

- **Aspect ratio:** 2:3 (1000 x 1500 px)
- **Text overlay:** Minimal, if any
- **Rich colors:** Stand out in feed
- **Lifestyle context:** Products in use

Consider creating Pinterest-specific images separate from your main product photos.

### Instagram/Facebook

- **Square (1:1)** works across all placements
- **Lifestyle imagery** performs well
- **Consistency** in style builds brand
- **Multiple images** via carousel posts

## Common Mistakes

### 1. Using Manufacturer Images Only

**Problem:** Same images as every other retailer.

**Solution:** Take your own photos or add lifestyle shots to differentiate.

### 2. Wrong Aspect Ratio

**Problem:** Images cropped awkwardly on different platforms.

**Solution:** Shoot with cropping in mind. Leave space around product.

### 3. Inconsistent Style

**Problem:** Product catalog looks unprofessional.

**Solution:** Use consistent lighting, background, and editing style.

### 4. Forgetting Mobile

**Problem:** Images look great on desktop, tiny on mobile.

**Solution:** Test images on mobile devices. Ensure product is clearly visible at small sizes.

### 5. Slow Loading Images

**Problem:** Large images slow your site and feed processing.

**Solution:** Compress images. Use WebP with JPEG fallback.

### 6. Missing Variation Images

**Problem:** Different color shown than what customer orders.

**Solution:** Upload unique images for each color/style variation.

## Image Feed Troubleshooting

### "Image too small"

Your image doesn't meet minimum requirements.

**Fix:** Upload larger images (minimum 800x800 recommended).

### "Generic image"

Google detected a placeholder or stock photo.

**Fix:** Use actual product photography.

### "Promotional overlay"

Image contains text like "SALE" or "50% OFF".

**Fix:** Use clean product images without promotional text.

### "Image not crawlable"

Google can't access your image URL.

**Fix:**
1. Check image URL works publicly
2. Verify robots.txt doesn't block images
3. Ensure CDN serves images to Googlebot

### Images not updating

Old images showing in Google despite updates.

**Fix:**
1. Regenerate feed
2. Use unique image URLs (add version parameter if needed)
3. Wait 24-72 hours for Google to re-fetch

## Checklist

Before uploading product images:

- [ ] Minimum 800 x 800 pixels
- [ ] Clean background (white for main image)
- [ ] Product fills 75-90% of frame
- [ ] No promotional text or large watermarks
- [ ] Properly compressed (under 500 KB)
- [ ] Descriptive file name
- [ ] Alt text added
- [ ] Multiple angles available
- [ ] Variation-specific images for colors

## FAQ

**Q: Can I use manufacturer images?**

Yes, but they're often lower quality and identical to competitors. Add your own photos when possible.

**Q: Do I need a white background?**

For Google Shopping main images, white or light neutral backgrounds are strongly recommended. Additional images can have lifestyle backgrounds.

**Q: How many images should each product have?**

Minimum 1, recommended 4-6. Include main, back, detail, and lifestyle shots.

**Q: What about videos?**

Google Shopping and social platforms increasingly support video. Short product videos can boost engagement significantly.

**Q: Should I edit/retouch images?**

Light editing (color correction, background cleanup) is fine. Don't alter the product's appearance in misleading ways.

---

Great images start with great product data. [Google Shopping for WooCommerce](/google-shopping) ensures your product images are correctly linked in your feed along with all required attributes.
