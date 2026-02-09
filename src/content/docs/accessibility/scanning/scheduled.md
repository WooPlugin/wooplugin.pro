---
title: Scheduled Scans
description: Set up automatic recurring accessibility scans with notifications. Pro feature.
---

## Overview

Scheduled scans run full site crawls automatically on a recurring basis. You'll be notified when new issues are found, so accessibility regressions don't go unnoticed.

This is a Pro feature. [Upgrade to Pro](https://wooplugin.pro/accessibility-scanner) to enable scheduled scans.

## Setting Up a Schedule

1. Go to **Accessibility → Settings**
2. Under **Scheduled Scans**, enable the toggle
3. Choose your frequency
4. Set your preferred time
5. Save settings

### Frequency Options

| Frequency | Best For |
|-----------|----------|
| Daily | Sites with frequent content updates |
| Weekly | Most sites — good balance of coverage and resources |
| Monthly | Stable sites with infrequent changes |

## Notifications

Get notified when a scheduled scan finds new issues.

### Email Notifications

1. Enable **Email notifications** in Settings
2. Enter one or more email addresses
3. Choose notification level:
   - **New errors only** — Only when new error-severity issues are found
   - **All new issues** — Errors, warnings, and notices
   - **Always** — Full report after every scan, even if no new issues

### Slack Notifications

1. Enable **Slack notifications** in Settings
2. Add your Slack webhook URL
3. Choose which channel receives notifications

Notifications include:

- Total issues found (new vs existing)
- Score change since last scan
- Link to the full report in WordPress

## Viewing Scheduled Scan Results

Scheduled scan results appear on the **Accessibility → Dashboard** just like manual scans. The dashboard shows:

- When the last scan ran
- Score trend over time
- New issues since the previous scan

## Managing Schedules

### Pause Scanning

Disable the scheduled scan toggle in Settings. Your configuration is preserved — re-enable to resume.

### Change Frequency

Update the frequency in Settings. The next scan runs according to the new schedule.

## Tips

- Start with weekly scans and adjust based on how often your content changes
- Use email notifications at minimum — catching regressions early prevents issues from accumulating
- Review scan results within a few days of each scheduled scan
- Combine with [Monitoring & Alerts](/docs/accessibility/reports/monitoring) for real-time regression detection
