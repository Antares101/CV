# PRs to Create

## Branches and PR Details

| # | Branch | PR Title | PR Body |
|---|--------|----------|---------|
| 1 | feature/dark-mode-default | feat: dark mode with system preference support | Dark/System/Light cycle in ThemeToggle. System preference detection via prefers-color-scheme. Prevent FOUC with inline script. |
| 2 | feature/subtle-animations | feat: subtle animations with reduced-motion support | CSS timing variables, prefers-reduced-motion media query, micro-interaction classes. |
| 3 | feature/improved-project-cards | feat: improved project cards with tech badges and links | Tech badges with borders, GitHub/demo links, hover effects, aria-labels. |
| 4 | feature/wcag-accessibility | feat: WCAG 2.2 AA compliance improvements | 44x44px touch targets, focus indicators, muted-contrast class. |
| 5 | feature/seo-optimization | feat: SEO optimization with Open Graph, Twitter Cards, sitemap | Meta tags, Open Graph, Twitter Cards, sitemap.xml, robots.txt. |
| 6 | feature/json-ld-structured-data | feat: add JSON-LD structured data for rich search results | Person schema, social links, knowsAbout for rich snippets. |
| 7 | feature/view-transitions | feat: add View Transitions for smooth page navigation | ViewTransitions component, fallback='swap'. |
| 8 | feature/performance-optimization | feat: performance optimization with resource hints | Preload for critical image, DNS prefetch. |
| 9 | feature/analytics | feat: add privacy-focused analytics placeholder | Commented analytics script, GDPR compliant. |
| 10 | feature/print-stylesheet | feat: improve print stylesheet | Hide decorative elements, reset animations. |
| 11 | feature/contact-form | feat: add contact form with mailto approach | Subject/message form, mailto: submission. |
| 12 | feature/contact-form (content) | feat: optimize CV content for US market ($8k+/month) | Updated headline, about, skills, experience, projects with metrics. |

## Commands to Create PRs (after gh auth)

```bash
# For each branch:
git checkout <branch>
git push origin <branch>
gh pr create --title "<title>" --body "<body>" --base main
```
