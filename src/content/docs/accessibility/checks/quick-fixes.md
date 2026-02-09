---
title: Quick Fixes
description: Fix common accessibility issues directly from the WordPress dashboard.
---

## Overview

Quick Fixes let you resolve common accessibility issues without editing theme files or writing code. When an issue supports Quick Fix, a fix button appears next to it in the issue list.

## How Quick Fix Works

1. Scan a page (or view existing issues)
2. Find an issue with a **Fix** button
3. Click **Fix** to open the fix dialog
4. Enter the required value (e.g., alt text for an image)
5. Click **Apply Fix**

The fix is saved and applied on your site. The issue is marked as fixed in the dashboard.

## What Can Be Quick Fixed

| Issue | Quick Fix Action |
|-------|-----------------|
| Missing alt text | Add alt text to the image |
| Empty link | Add accessible text to the link |
| Missing form label | Add a label to the form field |

These are the most common issues on WordPress sites and often account for a large portion of your accessibility score.

## Mark as Fixed

For issues you've resolved manually (by editing your theme, content, or CSS), click **Mark Fixed** to clear the issue from your dashboard. The issue will be verified on the next scan — if it's truly fixed, it stays resolved. If it's still present, it reappears.

## Ignore Issues

Some issues may be false positives or intentional design choices. Click **Ignore** to dismiss an issue:

- Ignored issues are hidden from the default view
- They don't affect your accessibility score
- You can view ignored issues by filtering for "Ignored" status
- Ignored issues can be restored at any time

### When to Ignore

- Decorative images correctly using `alt=""` flagged as informative
- Elements with accessibility handled by JavaScript not visible in static HTML
- Third-party content you can't control (ads, embedded widgets)

### When Not to Ignore

- Real issues you haven't fixed yet
- Issues you're unsure about (investigate first)
- Issues on pages you control

## Bulk Actions

Select multiple issues and apply actions in bulk:

- **Mark Fixed** — Clear multiple resolved issues at once
- **Ignore** — Dismiss multiple false positives
- **Restore** — Bring back previously ignored issues

## Limitations

Quick Fixes work at the content level within WordPress. Some issues require changes to:

- **Theme templates** — Heading structure, landmark regions, skip navigation
- **Theme CSS** — Color contrast, focus indicators
- **Plugin output** — Third-party plugin HTML

For these, use the issue description and WCAG reference to guide manual fixes.

## Next Steps

- [View all Level A checks](/docs/accessibility/checks/level-a)
- [Understanding your score](/docs/accessibility/scanning/score)
- [Generate an accessibility statement](/docs/accessibility/reports/statement)
