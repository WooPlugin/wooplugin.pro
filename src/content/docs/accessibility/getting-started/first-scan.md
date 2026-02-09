---
title: Your First Scan
description: Run your first accessibility scan and understand the results.
---

## Navigate to the Scanner

Go to **Accessibility → Scanner** in your WordPress admin.

## Run a Scan

You have two ways to start a scan:

### Enter a URL

1. Type or paste any URL from your site into the URL field
2. Click **Scan**

### Quick Scan Buttons

The scanner provides quick scan buttons for common pages:

- **Home** — Your site's front page
- **Shop** — WooCommerce shop page (if WooCommerce is active)
- **Cart** — WooCommerce cart page
- **A recent post** — Your latest published post

Click any button to scan that page immediately.

## Understanding the Results

After a scan completes, you'll see:

### Accessibility Score

A score from 0 to 100 based on how many checks pass:

| Score | Rating |
|-------|--------|
| 90–100 | Excellent |
| 70–89 | Good |
| 50–69 | Needs improvement |
| Below 50 | Poor |

See [Understanding Your Score](/docs/accessibility/scanning/score) for details on how scores are calculated.

### Issue Summary

A breakdown of issues found, grouped by severity:

- **Error** — Must fix. Fails a WCAG success criterion.
- **Warning** — Should fix. Potential accessibility barrier.
- **Notice** — Review recommended. May need manual verification.

### Issue List

Each issue shows:

- **Check name** — Which WCAG criterion was tested
- **Severity** — Error, warning, or notice
- **Element** — The HTML element that triggered the issue
- **Description** — What's wrong and how to fix it

## Fix Issues

From the results, you can:

1. **Quick Fix** — Click the fix button on supported issues to resolve them instantly
2. **Ignore** — Dismiss false positives or issues you've addressed manually
3. **View Details** — See the exact HTML element and WCAG reference

Learn more about fixing issues in [Quick Fixes](/docs/accessibility/checks/quick-fixes).

## View All Issues

Go to **Accessibility → Issues** to see all issues across all scans. You can filter by:

- Severity (error, warning, notice)
- Check type
- Page URL
- Status (open, fixed, ignored)

## Next Steps

- [Understand the 22 Level A checks](/docs/accessibility/checks/level-a)
- [Learn about score calculation](/docs/accessibility/scanning/score)
- [Generate an accessibility statement](/docs/accessibility/reports/statement)
