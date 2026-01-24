---
title: Scheduled Updates
description: Automatically regenerate feeds on a schedule to keep data fresh.
---

## Overview

Scheduled updates automatically regenerate your product feeds at regular intervals. This ensures platforms like Google Merchant Center always have up-to-date pricing, availability, and product information.

## Why Schedule Updates?

Product data changes frequently:

- **Prices** update during sales
- **Stock levels** change as orders come in
- **New products** get added
- **Product details** get updated

Platforms fetch your feed on their own schedule, but they can only get current data if your feed is current.

## Setting Up Schedules

### Per-Feed Schedule

Each feed can have its own update schedule:

1. Go to **WooCommerce → Product Feeds Pro**
2. Click on a feed to edit it
3. Find **Update Schedule**
4. Choose a frequency
5. Save the feed

### Available Frequencies

| Frequency | Best For |
|-----------|----------|
| Every 15 minutes | High-volume stores, flash sales |
| Hourly | Active stores, frequent inventory changes |
| Every 6 hours | Standard stores, moderate changes |
| Daily | Stable inventory, few changes |
| Weekly | Catalog sites, rarely changing products |
| Manual only | Testing, one-time exports |

## How Scheduled Updates Work

### WordPress Cron

Updates run via WordPress's built-in scheduling system (WP-Cron):

1. A scheduled task is registered for each feed
2. When due, WordPress triggers the regeneration
3. The feed file is recreated with current data
4. Platforms fetch the updated file

### Background Processing

Large catalogs use background processing:

- Feed generation runs in chunks
- Won't timeout on large stores
- Doesn't block admin operations
- Progress shown in dashboard

## Timing Considerations

### When to Update

Consider when your data changes most:

- After daily inventory syncs
- Before peak shopping hours
- After automated price updates

### Coordinating with Platform Fetches

Platforms fetch feeds on their own schedule. For best results:

1. Check platform fetch times in their dashboards
2. Schedule your updates to complete before fetches
3. Allow buffer time for generation

**Example**: Google fetches at 6 AM → Schedule update for 5 AM

## Server Resources

Feed generation uses server resources. Consider:

### Shared Hosting

- Use longer intervals (6 hours or daily)
- Avoid peak traffic times
- Monitor for timeout issues

### VPS/Dedicated

- Shorter intervals are fine
- Background processing handles load well
- Can run during any time

### Memory Usage

Large catalogs need more memory:

```php
// In wp-config.php if needed
define('WP_MEMORY_LIMIT', '256M');
```

## Manual Regeneration

You can regenerate feeds manually anytime:

1. Go to **WooCommerce → Product Feeds Pro**
2. Find your feed
3. Click **Regenerate**
4. Wait for completion

This doesn't affect the automatic schedule.

## Monitoring Updates

### Last Update Time

Each feed shows:

- Last successful update
- Next scheduled update
- Generation status

### Update History

View recent update history:

1. Click on a feed
2. Go to **History** tab
3. See past regenerations with timestamps

### Error Notifications

If updates fail, you'll see:

- Error status on the feed
- Details in the History tab
- Admin notice for critical failures

## Troubleshooting Schedules

### Updates Not Running

Check these common issues:

1. **WP-Cron disabled**: Some hosts disable WP-Cron. Set up a real cron job:
   ```
   */15 * * * * wget -q -O - https://yoursite.com/wp-cron.php > /dev/null 2>&1
   ```

2. **Caching issues**: Aggressive caching can interfere. Exclude cron from cache.

3. **Memory limits**: Increase PHP memory if generation times out.

### Updates Taking Too Long

For large catalogs:

- The plugin processes feeds efficiently in the background
- Consider filtering unnecessary products from feeds
- Increase PHP memory limits if needed

### Feeds Outdated Despite Schedule

- Verify the schedule is set correctly
- Check WP-Cron is running (install Health Check plugin)
- Look for PHP errors in logs
- Ensure sufficient memory/time limits

## Best Practices

### Match Update Frequency to Changes

- Flash sale starting? Update every 15 minutes during the sale
- Normal day? Hourly or 6-hour updates are fine
- Nothing changing? Daily is sufficient

### Monitor Feed Health

Regularly check:

- Feed URL accessibility
- Platform diagnostics for data issues
- Update history for failures

### Large Catalogs

For stores with 500+ products:

- Feed generation runs efficiently in the background
- Consider filtering to only include products you're advertising
- Ensure adequate PHP memory (256MB recommended)
