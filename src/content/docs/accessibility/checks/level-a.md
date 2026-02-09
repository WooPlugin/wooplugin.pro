---
title: WCAG Level A Checks
description: All 22 Level A accessibility checks included in the free version.
---

## Overview

The plugin includes 22 automated WCAG 2.2 Level A checks. These cover the minimum accessibility requirements that all websites should meet. Every check runs automatically when you scan a page.

## Image Checks

### Missing Alt Text
Detects `<img>` elements without an `alt` attribute. Every image must have alt text describing its content, or an empty `alt=""` for purely decorative images.

**WCAG:** 1.1.1 Non-text Content

### Empty Alt on Informative Images
Finds images that have `alt=""` but appear to be informative (not decorative). Images with links, buttons, or meaningful context should have descriptive alt text.

**WCAG:** 1.1.1 Non-text Content

## Form Checks

### Missing Form Labels
Detects form inputs (`<input>`, `<select>`, `<textarea>`) without an associated `<label>` element or `aria-label` attribute. Every form field needs a visible label.

**WCAG:** 1.3.1 Info and Relationships, 4.1.2 Name, Role, Value

## Navigation Checks

### Empty Links
Finds `<a>` elements with no text content, no `aria-label`, and no meaningful child elements. Links must have accessible text so screen reader users know where they lead.

**WCAG:** 2.4.4 Link Purpose, 4.1.2 Name, Role, Value

### Empty Buttons
Detects `<button>` elements with no text content or accessible label. Buttons must communicate their action.

**WCAG:** 4.1.2 Name, Role, Value

### Skip Navigation
Checks whether the page has a skip navigation link that lets keyboard users jump past repeated navigation to the main content.

**WCAG:** 2.4.1 Bypass Blocks

### Links Opening in New Window
Warns when links use `target="_blank"` without indicating they'll open a new window. Users should be informed before being taken to a new tab.

**WCAG:** 3.2.5 Change on Request

### Tabindex
Flags elements with `tabindex` values greater than 0, which disrupts the natural tab order and creates a confusing keyboard navigation experience.

**WCAG:** 2.4.3 Focus Order

## Structure Checks

### Heading Structure
Verifies that headings follow a logical hierarchy (h1 → h2 → h3) without skipping levels. Skipped heading levels confuse screen reader navigation.

**WCAG:** 1.3.1 Info and Relationships

### Page Title
Checks that the page has a non-empty `<title>` element. Page titles are the first thing screen readers announce and appear in browser tabs and search results.

**WCAG:** 2.4.2 Page Titled

### Title Redundant
Detects elements where the `title` attribute duplicates existing text content, creating redundant announcements for screen reader users.

**WCAG:** 4.1.2 Name, Role, Value

### Document Language
Checks that the `<html>` element has a valid `lang` attribute. Screen readers use this to determine the correct pronunciation language.

**WCAG:** 3.1.1 Language of Page

### Landmarks
Verifies the page uses landmark regions (`<main>`, `<nav>`, `<header>`, `<footer>`) to help assistive technology users navigate the page structure.

**WCAG:** 1.3.1 Info and Relationships

### Duplicate IDs
Finds elements with duplicate `id` attributes. Duplicate IDs break label associations, ARIA references, and fragment links.

**WCAG:** 4.1.1 Parsing

## ARIA Checks

### Invalid ARIA Roles
Detects elements with ARIA roles that are not part of the WAI-ARIA specification. Invalid roles are ignored by assistive technology.

**WCAG:** 4.1.2 Name, Role, Value

### Broken ARIA References
Finds ARIA attributes (`aria-labelledby`, `aria-describedby`, `aria-controls`, etc.) that reference IDs that don't exist on the page.

**WCAG:** 1.3.1 Info and Relationships

## Visual Checks

### Color Contrast
Checks that text has sufficient contrast against its background. Normal text requires a ratio of at least 4.5:1.

**WCAG:** 1.4.3 Contrast (Minimum)

### Color Contrast (Large Text)
Checks contrast for large text (18pt+ or 14pt+ bold), which has a lower requirement of 3:1.

**WCAG:** 1.4.3 Contrast (Minimum)

## Media Checks

### Auto-playing Media
Detects `<video>` and `<audio>` elements with `autoplay` that play for more than 3 seconds. Auto-playing media can be disorienting and must have controls to pause or stop.

**WCAG:** 1.4.2 Audio Control

## Table Checks

### Missing Table Headers
Checks that data tables have header cells (`<th>`) to identify rows and columns. Tables without headers are difficult to understand with screen readers.

**WCAG:** 1.3.1 Info and Relationships

### Empty Table Headers
Finds `<th>` elements that have no text content. Empty headers provide no information to screen reader users.

**WCAG:** 1.3.1 Info and Relationships

### iFrame Title
Checks that `<iframe>` elements have a `title` attribute describing their content. Screen readers use this title to identify the iframe.

**WCAG:** 4.1.2 Name, Role, Value

## Disabling Checks

If a check doesn't apply to your site, you can skip it:

1. Go to **Accessibility → Settings**
2. Under **Checks**, uncheck any checks you want to skip
3. Save settings

Skipped checks won't affect your accessibility score.

## Next Steps

- [Fix issues with Quick Fixes](/docs/accessibility/checks/quick-fixes)
- Upgrade to Pro for [50+ Level AA checks](/docs/accessibility/checks/level-aa)
