---
title: Common Errors
description: Solutions for common errors and issues with product feeds.
---

## Feed Generation Errors

### "Memory limit exhausted"

Your server ran out of memory during feed generation.

**Solutions**:

1. Increase PHP memory limit in `wp-config.php`:
   ```php
   define('WP_MEMORY_LIMIT', '256M');
   ```

2. Enable background processing:
   - Go to **Settings → Performance**
   - Enable **Background Feed Generation**
   - Set smaller chunk sizes (50-100 products)

3. Contact your host to increase memory limits

### "Maximum execution time exceeded"

Feed generation took too long.

**Solutions**:

1. Enable background processing (works in chunks, avoiding timeouts)

2. Reduce feed size with filters:
   - Exclude out-of-stock products
   - Filter to specific categories
   - Remove unnecessary products

3. Increase PHP max_execution_time (ask your host)

### "Failed to write feed file"

The plugin couldn't save the feed file.

**Solutions**:

1. Check file permissions on `/wp-content/uploads/product-feeds/`
   - Should be writable (755 or 775)

2. Verify disk space is available

3. Check for security plugins blocking file writes

### "Invalid feed URL"

The feed URL isn't accessible.

**Solutions**:

1. Verify the URL works in your browser
2. Check for security plugins blocking access
3. Ensure `.xml` or `.csv` files aren't blocked
4. Test with a simple URL (no query parameters)

## Google Merchant Center Errors

### "Missing required attribute: gtin"

Google requires GTIN for products from known brands.

**Solutions**:

1. Add GTINs to products:
   - Edit product → Product Feed tab → Enter GTIN

2. Use [Smart Auto-Fill](/docs/features/smart-auto-fill) for suggestions

3. For custom products without GTINs:
   - In feed settings, set identifier_exists to "no"

### "Invalid GTIN"

The GTIN format is incorrect.

**Solutions**:

1. Verify GTIN is correct:
   - UPC: 12 digits
   - EAN: 13 digits
   - ISBN: 13 digits

2. Check for typos or extra characters

3. Validate using an online GTIN checker

### "Landing page error"

Google couldn't access your product page.

**Solutions**:

1. Verify product URL works publicly
2. Check for password protection
3. Ensure robots.txt allows Googlebot
4. Check SSL certificate is valid
5. Remove any geographic restrictions

### "Price mismatch"

Feed price doesn't match landing page price.

**Solutions**:

1. Regenerate feed after price changes
2. Check for caching issues:
   - Clear WooCommerce cache
   - Clear page cache
   - Clear CDN cache

3. Verify tax settings match:
   - Feed and site should both include or exclude tax
   - Check your region's requirements

4. For variable products, ensure correct price shows

### "Image too small"

Product image doesn't meet size requirements.

**Solutions**:

1. Google requires minimum 100x100 pixels
2. Recommended: 800x800 pixels or larger
3. Re-upload larger images to products
4. Check image URLs are accessible

### "Policy violation"

Product violates Google's policies.

**Common issues**:

- Prohibited products (weapons, drugs, counterfeits)
- Misleading claims
- Inappropriate content
- Trademark issues

**Solutions**:

1. Review [Google Merchant policies](https://support.google.com/merchants/answer/6149970)
2. Remove or modify violating products
3. Filter problematic items from feed
4. Appeal if you believe it's an error

## Plugin Configuration Errors

### "License key invalid"

Your Pro license wasn't recognized.

**Solutions**:

1. Double-check for typos
2. Ensure no extra spaces before/after
3. Verify license hasn't expired
4. Try deactivating and reactivating
5. [Contact support](/#contact) with your purchase email

### "Could not connect to license server"

Your server can't reach our API.

**Solutions**:

1. Check outbound HTTPS is allowed
2. Verify no firewall blocking api.wooplugin.pro
3. Ensure SSL/TLS is working
4. Try again later (temporary server issues)

### "Settings not saving"

Plugin settings won't save.

**Solutions**:

1. Check for JavaScript errors (browser console)
2. Disable conflicting plugins temporarily
3. Clear browser cache
4. Verify user permissions

### "Feed tab missing on products"

Product Feed tab doesn't appear when editing products.

**Solutions**:

1. Ensure plugin is activated
2. Check for JavaScript errors
3. Verify you're editing a supported product type
4. Clear browser cache and reload

## Data Issues

### Products missing from feed

Expected products aren't in the generated feed.

**Solutions**:

1. Check filter rules aren't excluding them
2. Verify product is published (not draft)
3. Check product has required data:
   - Title
   - Price
   - Image
   - Stock status

4. Regenerate the feed

### Wrong prices in feed

Feed shows incorrect prices.

**Solutions**:

1. Check WooCommerce price settings
2. Verify sale prices and dates
3. For variable products, check price display setting
4. Clear transient cache:
   ```
   WooCommerce → Status → Tools → Clear transients
   ```

### Images not updating

Old images showing in feed.

**Solutions**:

1. Regenerate feed after image changes
2. Clear image caches
3. Check CDN cache settings
4. Verify image URLs are correct

### Special characters breaking feed

Non-ASCII characters causing XML errors.

**Solutions**:

1. Ensure feed encoding is UTF-8
2. Enable HTML entity encoding for special chars
3. Check product titles/descriptions for problematic characters
4. Avoid copy-pasting from Word documents

## Server Issues

### Feed returns 404

Feed URL shows "not found".

**Solutions**:

1. Regenerate the feed
2. Check permalink settings (resave)
3. Verify .htaccess isn't blocking
4. Check file exists in uploads folder

### Feed returns 500 error

Server error when accessing feed.

**Solutions**:

1. Check PHP error logs
2. Increase memory limits
3. Disable problematic plugins
4. Contact your hosting provider

### Slow feed loading

Feed takes too long to load.

**Solutions**:

1. Feeds are static files—should load quickly
2. Check server response times
3. Use CDN for feed delivery
4. Verify no plugin is processing feed on load

## Getting Help

If you can't resolve an issue:

1. Check the [FAQ](/docs/troubleshooting/faq)
2. Search for your error message
3. [Contact support](/#contact) with:
   - Error message
   - Steps to reproduce
   - WordPress/WooCommerce versions
   - Screenshot if applicable
