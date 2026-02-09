---
title: WooCommerce Checks
description: Accessibility checks designed specifically for WooCommerce stores. Pro feature.
---

## Overview

WooCommerce stores have unique accessibility challenges. Product pages, the cart, and checkout all contain interactive elements that standard WCAG checks don't fully cover. WooCommerce Checks add store-specific scanning on top of the general WCAG checks.

This is a Pro feature. [Upgrade to Pro](https://wooplugin.pro/accessibility-scanner) to enable WooCommerce checks.

## Product Page Checks

### Product Images

- **Gallery alt text** — Product gallery images must have descriptive alt text
- **Thumbnail labels** — Gallery thumbnail navigation needs accessible labels
- **Zoom functionality** — Image zoom controls must be keyboard accessible

### Product Information

- **Price announcements** — Sale prices must convey both original and sale price to screen readers
- **Variation selects** — Product variation dropdowns need proper labels
- **Add to cart button** — Must have a clear, descriptive label (not just "Add")
- **Quantity input** — Quantity field needs an associated label
- **Stock status** — Availability must be programmatically conveyed, not just by color

### Reviews

- **Star rating** — Star ratings must have text alternatives
- **Review form** — All review form fields need labels

## Cart Checks

### Cart Table

- **Table structure** — Cart must use proper table markup with headers
- **Remove buttons** — Each remove button must identify which product it removes
- **Quantity updates** — Quantity change controls need labels and announce updates
- **Coupon form** — Coupon input and button need proper labels

### Cart Totals

- **Price changes** — Updated totals must be announced to screen readers
- **Shipping calculator** — Shipping form fields need labels

## Checkout Checks

### Checkout Form

- **Required fields** — Required fields must be programmatically marked, not just with asterisks
- **Error messages** — Validation errors must be associated with their fields
- **Payment methods** — Payment option selection must be keyboard accessible
- **Order review** — Order summary must be readable by screen readers
- **Place order button** — Must clearly describe the action

### Guest vs Account

- **Login/register toggle** — Account creation options must be accessible
- **Password fields** — Password strength indicators need text alternatives

## Mini Cart / Cart Widget

- **Widget accessibility** — Slide-out or dropdown carts must be keyboard accessible
- **Focus management** — Opening the mini cart should move focus appropriately
- **Close mechanism** — Must be closeable with keyboard (Escape key)

## Running WooCommerce Checks

WooCommerce checks run automatically when:

- WooCommerce is active on your site
- You scan a WooCommerce page (product, cart, checkout, shop)

Results appear alongside standard WCAG check results, tagged as "WooCommerce" for easy filtering.

## Common WooCommerce Fixes

| Issue | Fix |
|-------|-----|
| Product images missing alt text | Add alt text in the product gallery editor |
| Add to cart button not descriptive | Ensure button text includes product name |
| Cart remove buttons not labeled | Theme must include `aria-label` with product name |
| Checkout required fields unclear | Use `aria-required="true"` on required inputs |

## Next Steps

- [Run your first scan](/docs/accessibility/getting-started/first-scan)
- [View all Level A checks](/docs/accessibility/checks/level-a)
- [Generate a compliance report](/docs/accessibility/reports/pdf)
