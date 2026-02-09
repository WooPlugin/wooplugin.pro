---
title: Understanding Your Score
description: How the accessibility score is calculated and what it means.
---

## How the Score Works

The accessibility score is a number from 0 to 100 that represents what percentage of checks pass on a scanned page. A higher score means fewer accessibility issues.

## Score Ratings

| Score | Rating | What It Means |
|-------|--------|---------------|
| 90–100 | Excellent | Few or no issues. Page is highly accessible. |
| 70–89 | Good | Some issues to address, but no critical barriers. |
| 50–69 | Needs improvement | Multiple issues that affect usability for people with disabilities. |
| Below 50 | Poor | Significant accessibility barriers. Immediate attention needed. |

## Calculation

The score is calculated based on:

1. **Total checks run** — The number of WCAG checks evaluated on the page
2. **Checks passed** — Checks that found no issues
3. **Severity weighting** — Errors reduce the score more than warnings or notices

### Severity Weights

| Severity | Impact on Score |
|----------|----------------|
| Error | High — Each error significantly reduces the score |
| Warning | Medium — Warnings have a moderate impact |
| Notice | Low — Notices have minimal impact |

The formula prioritizes errors because they represent definite WCAG failures, while warnings and notices may need manual review.

## What Affects Your Score

### Common Score Reducers

- Missing alt text on images (error)
- Form inputs without labels (error)
- Insufficient color contrast (error)
- Missing document language (error)
- Empty links or buttons (error)
- Broken heading hierarchy (warning)
- Missing skip navigation (warning)

### Quick Wins

These fixes often have the biggest impact on your score:

1. **Add alt text to all images** — Usually the most common issue
2. **Add labels to form fields** — Fixes multiple issues at once
3. **Set the document language** — Single fix, site-wide impact
4. **Fix empty links and buttons** — Common in navigation menus

## Score Changes Over Time

Your score may change between scans for several reasons:

- You fixed issues (score goes up)
- New content was added with issues (score goes down)
- A theme or plugin update changed the HTML (score may change in either direction)

Pro users can track score trends over time on the dashboard with [Scheduled Scans](/docs/accessibility/scanning/scheduled).

## Score Limitations

The score reflects automated checks only. It does not measure:

- Keyboard navigation experience
- Screen reader compatibility beyond HTML structure
- Cognitive accessibility
- Content readability

A score of 100 does not guarantee full WCAG compliance. Use the score as a starting point and complement it with manual testing.

## Improving Your Score

1. Start with errors — they have the highest score impact
2. Use [Quick Fixes](/docs/accessibility/checks/quick-fixes) for issues that can be resolved inline
3. Address warnings next
4. Re-scan after making changes to verify improvements
5. Review the [Level A checks](/docs/accessibility/checks/level-a) to understand each criterion
