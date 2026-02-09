---
title: Full Site Crawl
description: Automatically scan every page on your site for accessibility issues. Pro feature.
---

## Overview

Full site crawl automatically discovers and scans every page, post, and product on your WordPress site. Instead of scanning pages one at a time, the crawler finds all your content and checks everything.

This is a Pro feature. [Upgrade to Pro](https://wooplugin.pro/accessibility-scanner) to enable full site crawling.

## How It Works

1. The crawler starts from your home page
2. It discovers all published pages, posts, and custom post types
3. Each page is scanned against all enabled WCAG checks
4. Results are aggregated into a site-wide accessibility report

## Starting a Full Site Crawl

1. Go to **Accessibility → Scanner**
2. Click **Full Site Crawl**
3. The crawler begins discovering and scanning pages

### Progress Tracking

During the crawl, you'll see:

- Total pages discovered
- Pages scanned so far
- Current page being scanned
- Estimated time remaining

You can leave the page and return — the crawl continues in the background.

## Crawl Settings

Configure the crawl under **Accessibility → Settings**:

| Setting | Description | Default |
|---------|-------------|---------|
| Post types | Which content types to include | Pages, Posts, Products |
| Max pages | Maximum number of pages to crawl | 500 |
| Crawl speed | Delay between requests | Normal |
| Exclude URLs | URL patterns to skip | None |

### Excluding URLs

Add URL patterns to skip pages that don't need scanning:

- `/wp-admin/*` — Admin pages (excluded by default)
- `/cart/*` — Dynamic cart pages
- `/my-account/*` — User account pages

## Site-Wide Results

After a crawl completes, the dashboard shows:

- **Overall site score** — Average across all scanned pages
- **Total issues** — Aggregate issue count by severity
- **Worst pages** — Pages with the lowest scores
- **Common issues** — Issues that appear on multiple pages

## When to Run a Full Crawl

- After initial plugin setup for a baseline
- After major theme or content changes
- Before an accessibility audit
- As part of a compliance review

For ongoing monitoring, use [Scheduled Scans](/docs/accessibility/scanning/scheduled) to automate regular crawls.

## Tips

- Start with a smaller `Max pages` limit to test the crawl, then increase
- Use `Exclude URLs` to skip pages that are behind authentication or are dynamically generated
- Run crawls during low-traffic hours to minimize server load
