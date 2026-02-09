---
title: Single Page Scan
description: How to scan individual pages for accessibility issues.
---

## Overview

Single page scanning lets you check any page on your site for WCAG 2.2 accessibility issues. It's available in both the free and Pro versions with unlimited scans.

## Starting a Scan

Go to **Accessibility → Scanner** and choose how to start:

### Enter a URL

Type or paste any URL from your site into the URL field and click **Scan**. The URL must be on your WordPress site — external URLs are not supported.

### Quick Scan Buttons

Click a quick scan button to scan a common page instantly:

- **Home** — Front page
- **Shop** — WooCommerce shop page
- **Cart** — WooCommerce cart page
- **Recent post** — Latest published post

## How Scanning Works

When you start a scan:

1. The plugin fetches the page's HTML from your server
2. The HTML is parsed and analyzed against all enabled checks
3. Each check evaluates specific WCAG 2.2 criteria
4. Results are saved and displayed immediately

Scanning is server-side only. No browser rendering is required, and no external services are contacted.

## Viewing Results

After a scan completes, you'll see:

- **Accessibility score** — 0 to 100
- **Issues by severity** — Error, warning, and notice counts
- **Issue details** — Each issue with the affected HTML element, description, and fix guidance

## Re-scanning a Page

Scan the same URL again at any time to check your progress after making fixes. The new scan replaces the previous results for that URL.

## Tips

### Scan Your Most Important Pages First

Start with pages that get the most traffic:

- Home page
- Main landing pages
- Contact page
- Shop and product pages (if using WooCommerce)

### Scan After Theme or Content Changes

Re-scan pages after:

- Updating your theme
- Adding new content or page sections
- Installing plugins that affect the frontend

### Check Different Page Types

Different templates may have different issues. Scan at least one of each:

- Page (static)
- Post (blog)
- Product (WooCommerce)
- Archive/category
- Search results

## Next Steps

- [Understand your score](/docs/accessibility/scanning/score)
- [Fix issues with Quick Fixes](/docs/accessibility/checks/quick-fixes)
- Upgrade to Pro for [full site crawling](/docs/accessibility/scanning/full-site)
