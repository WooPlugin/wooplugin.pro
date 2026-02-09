---
title: Monitoring & Alerts
description: Continuous accessibility monitoring with email and Slack notifications. Pro feature.
---

## Overview

Monitoring tracks your site's accessibility over time and alerts you when new issues are introduced. Instead of discovering regressions weeks later, you'll know immediately when something changes.

This is a Pro feature. [Upgrade to Pro](https://wooplugin.pro/accessibility-scanner) to enable monitoring and alerts.

## How Monitoring Works

1. [Scheduled scans](/docs/accessibility/scanning/scheduled) run automatically at your chosen frequency
2. Results are compared against the previous scan
3. New issues trigger notifications via your configured channels
4. The dashboard shows trends and changes over time

## Setting Up Alerts

### Email Notifications

1. Go to **Accessibility → Settings**
2. Under **Notifications**, enable **Email alerts**
3. Enter recipient email addresses (one per line)
4. Choose notification triggers:
   - **New errors** — Alert when new error-severity issues appear
   - **Score drop** — Alert when the site score decreases
   - **Scan complete** — Summary after every scheduled scan

### Slack Integration

1. Create a Slack webhook URL in your Slack workspace settings
2. Go to **Accessibility → Settings**
3. Under **Notifications**, enable **Slack alerts**
4. Paste your webhook URL
5. Choose which events trigger Slack messages

Slack notifications include a summary with a link to the full report in WordPress.

## What Gets Monitored

### Score Trends

The dashboard displays a score graph over time, showing:

- Score at each scan
- Direction of change (improving or declining)
- Rolling average

### Regression Detection

The system identifies regressions — issues that were previously fixed but reappeared. Common causes:

- Theme updates overwriting accessibility fixes
- New content published without alt text
- Plugin updates changing frontend markup
- CSS changes affecting contrast or focus visibility

Regressions are flagged separately from new issues so you can address them quickly.

### Issue Trends

Track the total number of open issues over time:

- New issues introduced per scan
- Issues resolved per scan
- Net change (improving or getting worse)

## Alert Examples

### Email Alert

> **Accessibility Alert: 3 new errors found**
>
> Your scheduled scan on example.com found 3 new errors:
> - Missing alt text on /about/ (2 images)
> - Empty button on /contact/
>
> Score: 82 → 76 (-6)
>
> View full results: [link]

### Slack Alert

> **Accessibility Scan Complete** — example.com
> Score: 82 → 76 | 3 new errors | 1 regression
> [View Report]

## Best Practices

- Set up both email and Slack for redundancy
- Use "New errors" alerts at minimum — catching errors early prevents accumulation
- Review the score trend monthly to track overall progress
- Investigate regressions immediately — they often indicate a theme or plugin update issue

## Next Steps

- [Set up scheduled scans](/docs/accessibility/scanning/scheduled) (required for monitoring)
- [Generate PDF reports](/docs/accessibility/reports/pdf) for compliance documentation
