---
title: Accessibility Statement
description: Generate a WCAG-compliant accessibility statement page for your site.
---

## Overview

An accessibility statement is a public page that describes your site's commitment to accessibility, its current compliance status, and how users can report issues. Many accessibility laws require one.

The plugin includes a built-in generator that creates a statement page based on your scan results and organization details.

## Setting Up Your Statement

### Configure Organization Info

1. Go to **Accessibility → Settings**
2. Under **Accessibility Statement**, fill in:
   - **Organization name** — Your company or site name
   - **Contact email** — Where users can report accessibility issues
   - **Contact phone** — Optional phone number
   - **Compliance target** — Which standard you're working toward (e.g., WCAG 2.2 Level AA)
   - **Known limitations** — Any known issues you're working on

### Generate the Statement Page

1. Go to **Accessibility → Statement**
2. Review the generated content
3. Click **Create Page**
4. The plugin creates a new WordPress page with the statement content

The page is created as a draft so you can review it before publishing.

## Statement Content

The generated statement includes:

- **Commitment** — Your organization's accessibility commitment
- **Standards** — Which WCAG version and level you target
- **Current status** — Summary of your latest scan results
- **Known limitations** — Issues you're aware of and working on
- **Feedback** — How users can report accessibility problems
- **Enforcement** — Links to relevant enforcement bodies (based on your region)
- **Last updated** — Date the statement was last generated

## Shortcode

Use the `[asfw_statement]` shortcode to embed the accessibility statement on any page:

```
[asfw_statement]
```

This renders the same content as the generated page but lets you place it anywhere. The shortcode output updates automatically when you regenerate the statement.

## Updating Your Statement

Re-generate the statement after:

- Running a new scan (to update compliance status)
- Fixing accessibility issues
- Changing your contact information
- Updating your compliance target

Go to **Accessibility → Statement** and click **Update Page** to refresh the content on your existing statement page.

## Best Practices

### Where to Link It

Make the statement easy to find:

- Add a link in your site footer
- Include it in your privacy policy page
- Link from your contact page

### Keep It Honest

- Don't claim full compliance if you have known issues
- List real limitations and your plan to fix them
- Provide a working contact method for reporting issues

### Review Regularly

Update the statement at least quarterly or after any major site changes.

## Legal Context

### European Accessibility Act (EAA)

The EAA requires an accessibility statement for websites serving EU customers. It must include:

- Compliance status
- Known limitations with justification
- Contact information for accessibility feedback
- Link to enforcement procedure

### Section 508 / ADA (US)

While not strictly required, an accessibility statement demonstrates good faith effort and is recommended as part of compliance documentation.

## Next Steps

- [Run a scan](/docs/accessibility/scanning/single-page) to update your compliance data
- Upgrade to Pro for [PDF compliance reports](/docs/accessibility/reports/pdf)
