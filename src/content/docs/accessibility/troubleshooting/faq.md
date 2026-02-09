---
title: Frequently Asked Questions
description: Common questions about Accessibility Scanner and WCAG compliance.
---

## General

### How is this different from overlay widgets like accessiBe?

Overlay widgets add a JavaScript layer on top of your site but don't fix the underlying HTML. They typically cover only 20-30% of WCAG criteria, and courts have ruled them insufficient for legal compliance. This plugin scans your actual HTML and helps you fix real issues at the source.

### Do I need WooCommerce?

No. The plugin works with any WordPress site. WooCommerce-specific checks are available in Pro for stores that need them.

### What is WCAG 2.2?

WCAG (Web Content Accessibility Guidelines) 2.2 is the current international standard for web accessibility. It has three levels:

- **Level A** — Minimum requirements (included free)
- **Level AA** — Recommended standard, required by most laws (Pro)
- **Level AAA** — Highest level, not typically required

### What is the European Accessibility Act (EAA)?

The EAA is an EU directive that became mandatory in June 2025. It requires websites and apps serving EU customers to meet WCAG 2.2 Level AA. Non-compliance can result in fines.

### Does this slow down my site?

No. The plugin only runs in the WordPress admin. It adds zero frontend JavaScript or CSS. Scanning happens server-side and doesn't affect visitors.

### Is automated scanning enough for legal compliance?

Automated scanning catches a significant portion of accessibility issues, but full legal compliance also requires manual testing and user testing. Use this tool alongside professional accessibility audits for complete coverage.

## Scanning

### How many scans can I run for free?

Unlimited. The free version lets you scan any single page as many times as you want. Pro adds full site crawling and scheduled scans.

### What does the accessibility score mean?

The score (0-100) represents what percentage of checks pass on a scanned page. See [Understanding Your Score](/docs/accessibility/scanning/score) for the full breakdown.

### Can this plugin fix issues automatically?

Yes — common issues like missing alt text, empty links, and missing form labels can be fixed using [Quick Fix](/docs/accessibility/checks/quick-fixes). More complex issues require manual fixes, and the plugin provides guidance for each.

### Why did my score change between scans?

Scores can change when:

- You fixed issues (score goes up)
- New content was added with accessibility issues (score goes down)
- A theme or plugin update changed the HTML

### Can I scan external sites?

No. The scanner only works with pages on your WordPress site.

## Technical

### Scan times out or fails

Increase the scan timeout in **Accessibility → Settings**. Default is 30 seconds, which works for most pages. Increase to 60 seconds for pages with heavy content.

If scans still fail:

- Check that your server allows loopback requests (`wp_remote_get` to your own site)
- Ensure your site is accessible from the server (not behind HTTP auth that blocks internal requests)
- Check PHP memory limits — increase to 256MB if needed

### Scans fail on localhost or Docker

The scanner fetches pages via HTTP. In local development environments:

- Make sure the site URL is reachable from the server
- For Docker setups, the scanner rewrites local URLs to the internal container hostname
- Self-signed SSL certificates may need verification disabled in WordPress:

```php
add_filter('https_ssl_verify', '__return_false');
```

Only use this in development environments.

### How do I reset scan data?

Go to **Accessibility → Settings** and click **Clear All Scan Data**. This removes all stored scan results and issues. Your settings are preserved.

### Does the scanner execute JavaScript?

No. The scanner fetches the page HTML and analyzes the static DOM. It doesn't execute JavaScript, so issues in dynamically rendered content (React, Vue, etc.) may not be detected. Most WordPress content is server-rendered and fully covered.

### Does it work with page caching?

Yes. The scanner fetches the cached version of your page, which is what real users see. If you've made changes, clear your page cache before re-scanning.

### Does it work with multisite?

Yes. Install and activate the plugin on each site in the network that needs scanning. Each site manages its own scans and results independently.

## Free vs Pro

### What's the difference between Free and Pro?

| Feature | Free | Pro |
|---------|------|-----|
| Level A checks (22) | Yes | Yes |
| Level AA checks (30+) | — | Yes |
| Single page scans | Unlimited | Unlimited |
| Full site crawl | — | Yes |
| Scheduled scans | — | Yes |
| Quick fixes | Yes | Yes |
| Accessibility statement | Yes | Yes |
| PDF reports | — | Yes |
| WooCommerce checks | — | Yes |
| Monitoring & alerts | — | Yes |
| White-label reports | — | Agency |
| Priority support | — | Yes |

### Do I need both Free and Pro installed?

No. Pro is a complete replacement. When you install Pro, it includes everything from Free plus all Pro features. Only one plugin is active at a time.

## Support

### How do I contact support?

- **Free users:** [WordPress.org support forum](https://wordpress.org/support/plugin/wp-accessibility-scanner/)
- **Pro users:** Email support@wooplugin.pro for priority support

### What should I include in a support request?

- WordPress version
- PHP version
- Plugin version
- Description of the issue
- Any error messages or screenshots
- Steps to reproduce
