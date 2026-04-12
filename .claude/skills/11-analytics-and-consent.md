---
name: Analytics & Cookie Consent — Sams 3PL Solutions
description: GA4 configuration, Google Consent Mode v2, the cookie consent banner design and behavior, event tracking plan, conversion tracking, Core Web Vitals reporting, and the hard rule that no tracking fires before consent. Load this skill whenever configuring analytics, building the consent banner, defining events, or auditing data collection on any Sams 3PL site.
type: analytics
depends_on: 06-performance.md, 07-astro-cloudflare-stack.md, 08-forms-and-connect-cta.md
version: 1.0
last_updated: 2026-04-11
---

# Analytics & Cookie Consent

Analytics exist to answer one question: **is the site working?** Not "how many pageviews did we get" — that's vanity. The question is: are the right people finding us, engaging with our content, and converting into leads?

But analytics must never come at the cost of user trust. Sams 3PL sites defer ALL tracking scripts until the visitor explicitly consents. No dark patterns, no pre-checked boxes, no "by continuing to browse you accept cookies" fictions. Consent is real or it doesn't count.

---

## 1. The Non-Negotiables

From the Master Manual:
- **Non-negotiable #21:** Cookie consent banner that defers GA4 until acceptance.
- **Non-negotiable #22:** Minimal, non-intrusive consent banner — not a full-page wall.
- **Non-negotiable #33:** No tracking before consent. Period.

These are absolute. A site that fires GA4 before consent is a site that ships with a legal and ethical defect.

---

## 2. Google Analytics 4 (GA4)

### 2.1 Why GA4

GA4 is the standard analytics platform for Sams 3PL sites. It's free, integrates with Google Search Console, supports Consent Mode v2, and provides the event-based tracking model we need.

We do NOT use:
- **Google Tag Manager (GTM).** GTM is an open door for unreviewed scripts. We manage tags directly in code (per `06-performance.md` §6.3).
- **Universal Analytics (UA).** Sunset in 2023. Dead platform.
- **Facebook Pixel, TikTok Pixel, or any social tracking pixel.** We don't run paid social campaigns that require these. If that changes, they follow the same consent-first rules as GA4.

### 2.2 GA4 property setup

Each city site gets its own GA4 property:
- Property name: `Sams 3PL — Detroit` (city-specific).
- Data stream: Web only, configured for the city domain (`detroit3pl.com`).
- Data retention: 14 months (the maximum for free GA4).
- Google Signals: Enabled (for cross-device reporting) but subject to consent.
- Enhanced Measurement: Enabled for pageviews, scrolls, outbound clicks, site search, file downloads, and video engagement. All subject to consent.

### 2.3 The GA4 snippet

GA4 is loaded via a lightweight inline script — NOT via GTM, not via an external tag management layer:

```html
<!-- GA4 — loaded ONLY after consent -->
<script id="ga4-script" type="text/plain" data-consent="analytics">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure',
  });
</script>
<script id="ga4-loader" type="text/plain" data-consent="analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" async>
</script>
```

**Key detail:** Both script tags have `type="text/plain"` instead of `type="text/javascript"`. This prevents the browser from executing them. The consent banner's JavaScript changes the type to `text/javascript` and re-injects them only after the user grants consent.

Replace `G-XXXXXXXXXX` with the actual GA4 Measurement ID per city.

---

## 3. Google Consent Mode v2

### 3.1 What Consent Mode does

Google Consent Mode v2 lets GA4 operate in two modes:

1. **Denied (default on load).** GA4 sends "cookieless pings" — anonymous, aggregated signals that don't set cookies and don't identify the user. Google uses these for conversion modeling (estimating total conversions based on the consented sample). This gives us directional data even from non-consenting visitors without violating their choice.

2. **Granted (after consent).** GA4 operates fully — cookies, user-level tracking, audience building, everything.

### 3.2 Default consent state

On every page load, BEFORE any analytics script runs, declare the default consent state:

```html
<script>
  // Set default consent to denied — runs immediately, before GA4
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',  // always allowed — security essentials
    'wait_for_update': 500,         // ms to wait for consent banner
  });
</script>
```

This script runs synchronously in the `<head>`, before anything else. It ensures that even if GA4 somehow loads early, it operates in denied mode.

### 3.3 Updating consent on acceptance

When the user clicks "Accept" on the consent banner:

```javascript
gtag('consent', 'update', {
  'analytics_storage': 'granted',
});
```

This triggers GA4 to set its cookies, send a full pageview, and begin tracking normally. The `ad_storage` and `ad_personalization` fields remain `denied` unless we run ads (we don't currently).

### 3.4 Consent persistence

Store the user's consent choice in a first-party cookie:

```javascript
document.cookie = 'sams3pl_consent=granted; max-age=31536000; path=/; SameSite=Lax; Secure';
```

On subsequent visits, read this cookie before the consent banner renders:
- If `sams3pl_consent=granted` → skip the banner, fire GA4 immediately.
- If `sams3pl_consent=denied` → skip the banner, keep GA4 in denied mode.
- If no cookie → show the banner.

This means the banner appears only once per year (the `max-age`). Return visitors who already consented get a clean, banner-free experience.

---

## 4. The Cookie Consent Banner

### 4.1 Design principles

The consent banner must be:
- **Minimal.** One sentence, two buttons. Not a full-page wall. Not a multi-tab preference center on first visit.
- **Non-intrusive.** It sits at the bottom of the viewport as a fixed bar. It does NOT overlay the main content, push content down, or block interaction with the page.
- **Honest.** "We use cookies for analytics" — not "we use cookies to improve your experience" (vague) or "by continuing to browse you accept" (not real consent).
- **Dismissable.** The user can decline and the banner goes away permanently.
- **Accessible.** Keyboard navigable, screen-reader announced, sufficient contrast.

### 4.2 Banner content

```
We use cookies to understand how people use this site. 
[Accept]  [Decline]  [Learn more →]
```

That's it. One sentence. Two action buttons. One link to the privacy policy for users who want details.

- **"Accept"** — grants analytics consent, fires GA4, sets the consent cookie, dismisses the banner.
- **"Decline"** — denies analytics consent, keeps GA4 in cookieless mode, sets the consent cookie to "denied," dismisses the banner.
- **"Learn more"** — links to `/privacy/` in the same tab. The banner remains visible when they return.

### 4.3 Visual design

- **Position:** Fixed to the bottom of the viewport. Full-width on mobile, max-width container on desktop.
- **Background:** Charcoal (`#1A1A1A`) at 97% opacity with a subtle `backdrop-filter: blur(4px)`.
- **Text:** Off-White (`#F7F4EF`), 14–15px, Neue Montreal.
- **Accept button:** Brick Red fill, Off-White text (primary button style). This is the visually dominant action because consent benefits both parties.
- **Decline button:** Transparent with Off-White text border (secondary button style). Equally accessible but not visually dominant.
- **Learn more:** Text link, Off-White, underlined.
- **Padding:** 16px vertical, 24px horizontal.
- **Shadow:** Subtle upward shadow to separate the banner from page content.
- **Animation:** Slides up from below the viewport over 300ms. Dismissed with a 200ms fade-out. Both animations respect `prefers-reduced-motion` (instant appear/disappear if reduced motion).
- **Z-index:** Above all page content but below modals (z-index: 900).

### 4.4 Banner as an Astro/Preact island

The consent banner is a Preact component hydrated with `client:idle`:

```astro
---
import CookieConsent from '@components/global/CookieConsent.preact';
---
<CookieConsent client:idle />
```

`client:idle` is correct because:
- The banner is not interaction-critical on page load (it's a secondary UI, not the hero or nav).
- Deferring it to idle prevents it from blocking LCP or contributing to initial JS parse time.
- On fast connections, `client:idle` fires within 50–100ms of page load anyway.

### 4.5 Accessibility

- The banner is a `role="dialog"` with `aria-label="Cookie consent"`.
- Focus is NOT trapped in the banner (it's not a modal — users should be able to interact with the page while the banner is visible).
- The banner is announced to screen readers via `aria-live="polite"` when it appears.
- Both buttons meet minimum 48px touch target and AA contrast ratios.
- The banner is dismissable via keyboard (Tab to buttons, Enter to activate).
- If the user doesn't interact with the banner for the entire session, it persists but never blocks content.

### 4.6 CLS prevention

The consent banner must NOT cause a layout shift:
- It is `position: fixed` — it overlays the viewport, it doesn't push content.
- It does not inject itself into the DOM flow.
- It does not resize or reposition other elements.
- Its appearance/disappearance does not affect the position of any other element on the page.

This is critical for Core Web Vitals. Cookie banners that push content down are a common CLS culprit.

---

## 5. Event Tracking Plan

### 5.1 Automatic events (GA4 Enhanced Measurement)

These fire automatically when Enhanced Measurement is enabled (all subject to consent):

| Event | What it captures |
|---|---|
| `page_view` | Every page navigation |
| `scroll` | User scrolls past 90% of page height |
| `click` (outbound) | Clicks on links leaving the site |
| `file_download` | Downloads of PDFs, documents, etc. |
| `site_search` | Search queries (if search is implemented) |

### 5.2 Custom events

We define these manually for Sams 3PL-specific tracking:

| Event | When fired | Parameters |
|---|---|---|
| `phone_click` | User taps the phone number (`tel:` link) | `link_url`, `page_location` |
| `email_click` | User taps the email address (`mailto:` link) | `link_url`, `page_location` |
| `form_view` | Connect page loads | `page_location` |
| `form_start` | First form field receives focus | `page_location` |
| `form_field_error` | Validation error on blur | `field_name`, `error_type` |
| `form_submit_attempt` | Submit button clicked | `page_location` |
| `form_submit_success` | Server returns success | `page_location`, `service_type` |
| `form_submit_error` | Server returns error | `page_location`, `error_message` |
| `cta_click` | Any Connect CTA button clicked (not on /connect/ page) | `cta_location`, `page_location` |
| `blog_read` | User scrolls past 75% of a blog post | `post_slug`, `author`, `category` |
| `consent_granted` | User clicks Accept on consent banner | — |
| `consent_denied` | User clicks Decline on consent banner | — |

### 5.3 Implementing custom events

Custom events are fired via the `gtag` function. Wrap every event call in a consent check:

```javascript
function trackEvent(eventName, params = {}) {
  // Only fire if analytics consent has been granted
  if (document.cookie.includes('sams3pl_consent=granted')) {
    gtag('event', eventName, params);
  }
}

// Usage
trackEvent('phone_click', {
  link_url: 'tel:+14197459492',
  page_location: window.location.pathname,
});
```

This belt-and-suspenders approach ensures events don't fire even if Consent Mode somehow fails.

### 5.4 Events that fire WITHOUT consent

Only two events are logged regardless of consent (as Consent Mode cookieless pings):
- `page_view` — anonymous, aggregated. Google uses this for conversion modeling.
- `consent_granted` / `consent_denied` — we need to know our consent rate to evaluate banner effectiveness.

These events send NO cookies and NO user-identifiable data when consent is denied. They operate within the Consent Mode `denied` framework.

---

## 6. Conversion Tracking

### 6.1 What counts as a conversion

For Sams 3PL, conversions are:

1. **Primary:** `form_submit_success` — a completed Connect form submission. This is the main conversion.
2. **Secondary:** `phone_click` — a tap on the phone number. We can't track whether the call connected, but the intent signal is strong.
3. **Tertiary:** `email_click` — a tap on the email address.

### 6.2 GA4 conversion configuration

In GA4 Admin → Events → mark `form_submit_success` and `phone_click` as conversions. This enables:
- Conversion reporting in all standard GA4 reports.
- Conversion attribution (which channels, pages, and campaigns drive conversions).
- Audience building for remarketing (if we ever run ads — not currently planned).

### 6.3 Conversion value (optional)

If Tyler wants to assign a monetary value to conversions for ROI analysis:
- Assign `form_submit_success` a value representing the average revenue from a converted lead.
- This is an estimate and should be revisited quarterly as the business grows.

---

## 7. Core Web Vitals Reporting in GA4

### 7.1 Sending CWV data to GA4

Use the `web-vitals` JavaScript library to capture field CWV data and send it as GA4 events:

```javascript
import { onLCP, onINP, onCLS } from 'web-vitals';

function sendToGA4(metric) {
  trackEvent('web_vitals', {
    metric_name: metric.name,
    metric_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    metric_rating: metric.rating,  // 'good', 'needs-improvement', or 'poor'
    metric_delta: Math.round(metric.delta),
    page_location: window.location.pathname,
  });
}

onLCP(sendToGA4);
onINP(sendToGA4);
onCLS(sendToGA4);
```

This gives us per-page CWV data from real users in GA4, supplementing the aggregated data from Google Search Console. It's especially valuable for identifying specific pages that perform poorly in the field but pass lab tests.

### 7.2 CWV dashboard

Create a GA4 Explore report (or Looker Studio dashboard) showing:
- CWV distribution (% good / needs improvement / poor) for each metric.
- CWV by page — identify the worst-performing pages.
- CWV over time — catch regressions after deployments.
- CWV by device type — mobile vs. desktop performance gap.

---

## 8. Privacy Policy Requirements

### 8.1 What the privacy policy must disclose

The privacy policy at `/privacy/` must include:

1. **What data we collect:** Analytics data (page views, interactions, device type, approximate location via IP) via GA4, and form submission data (name, email, phone, company, message).
2. **How we collect it:** GA4 sets first-party cookies after consent. The Connect form collects data submitted by the user.
3. **Why we collect it:** Analytics to understand site usage and improve the experience. Form data to respond to inquiries.
4. **Who we share it with:** Google (via GA4, subject to Google's data processing terms). No data is sold to third parties.
5. **How long we retain it:** GA4 data retained for 14 months. Form submission data retained as long as the business relationship exists.
6. **User rights:** Right to request deletion, right to withdraw consent (clearing the consent cookie or contacting us), right to access their data.
7. **Cookie details:** Name, purpose, duration of each cookie set.
8. **Contact for privacy inquiries:** `info@sams3plsolutions.com` and `+1 (419) 745-9492`.

### 8.2 Cookies we set

| Cookie | Purpose | Set when | Duration |
|---|---|---|---|
| `sams3pl_consent` | Stores the user's consent choice | User clicks Accept or Decline | 1 year |
| `_ga` | GA4 client ID (anonymous) | Consent granted | 2 years |
| `_ga_XXXXXXXXXX` | GA4 session data | Consent granted | 2 years |

That's it. Three cookies total. No marketing cookies, no social tracking pixels, no retargeting.

---

## 9. What We Do NOT Track

Explicit exclusions to protect user trust:

1. **No cross-site tracking.** We don't track users across different Sams 3PL city sites. Each city's GA4 property is independent.
2. **No remarketing or audience targeting.** We don't build audiences for ad targeting (no ads currently).
3. **No heatmaps or session recordings without separate consent.** If Hotjar, FullStory, or similar tools are added in the future, they require their own consent mechanism and disclosure.
4. **No fingerprinting.** We don't use canvas fingerprinting, WebGL fingerprinting, or any technique that identifies users without cookies.
5. **No data sale.** We never sell, rent, or share individual-level data with third parties.
6. **No pre-consent tracking.** GA4 does not execute, set cookies, or identify the user until "Accept" is clicked. Consent Mode's cookieless pings are anonymous and aggregated.

---

## 10. Testing the Consent Implementation

### 10.1 Manual testing checklist

Before shipping the consent banner on any city site:

1. **Fresh visit (no cookie):** Banner appears. GA4 is NOT loaded (check Network tab). No `_ga` cookies exist.
2. **Click Accept:** Banner dismisses. GA4 loads. `_ga` cookies appear. `sams3pl_consent=granted` cookie is set. Page view event fires.
3. **Reload after Accept:** Banner does NOT appear. GA4 loads immediately. Cookies persist.
4. **Fresh visit → Click Decline:** Banner dismisses. GA4 does NOT load. No `_ga` cookies. `sams3pl_consent=denied` cookie is set.
5. **Reload after Decline:** Banner does NOT appear. GA4 does NOT load. No `_ga` cookies.
6. **Clear cookies → reload:** Banner reappears (back to fresh-visit state).
7. **Check Consent Mode:** In Chrome DevTools → Console, run `dataLayer` inspection. Verify `consent default` fires before any `config` call, and `consent update` fires only on Accept.
8. **Check with ad blocker:** Site functions normally. Banner still works. No console errors.
9. **Screen reader test:** Banner is announced. Buttons are labeled. Dismiss is communicated.
10. **Keyboard test:** Tab reaches both buttons. Enter activates. Banner dismisses and focus returns to the page.

### 10.2 Automated testing

- Use Lighthouse to verify no third-party cookies are set before consent (Privacy audit).
- Use `cypress-cookie-consent` or similar to automate the consent flow in CI.
- Run `axe` on the banner component to verify accessibility.

---

## 11. Reporting and Review Cadence

### 11.1 Weekly check

- Scan GA4 Realtime report for anomalies (traffic drop = possible tracking breakage).
- Check consent rate (Accept vs. Decline) — if the decline rate exceeds 50%, the banner copy or design needs review.

### 11.2 Monthly review

- Review top pages by traffic, engagement, and conversion.
- Review form funnel metrics (§5.2 custom events) — identify drop-off points.
- Review blog performance metrics (per `10-blog-system.md` §9).
- Review CWV field data for regressions.

### 11.3 Quarterly audit

- Full GA4 configuration audit: are all events firing correctly? Are conversions marked? Is data retention correct?
- Privacy policy review: does it still accurately describe our data practices?
- Consent banner test: run the full manual testing checklist (§10.1).
- Compare GA4 data to Search Console data for consistency.

---

## 12. Self-Check Before Shipping

1. GA4 property is created and configured for the city domain.
2. GA4 scripts use `type="text/plain"` and are activated only by the consent banner.
3. Consent Mode v2 `default` state is declared synchronously in the `<head>` with all storage types set to `denied`.
4. Consent Mode `update` fires only when the user clicks Accept.
5. The consent cookie (`sams3pl_consent`) is set on both Accept and Decline with a 1-year max-age.
6. Return visitors who already consented do not see the banner.
7. Return visitors who declined do not see the banner and GA4 does not load.
8. The banner is `position: fixed` at the bottom and causes zero CLS.
9. The banner has two clear buttons (Accept, Decline) and a link to `/privacy/`.
10. The banner is accessible: `role="dialog"`, `aria-label`, keyboard navigable, screen-reader announced.
11. All custom events (§5.2) are implemented and wrapped in a consent check.
12. `form_submit_success` and `phone_click` are marked as conversions in GA4.
13. Web Vitals library sends CWV data to GA4 as custom events.
14. The privacy policy at `/privacy/` accurately discloses all data collection practices.
15. No third-party cookies exist before consent (verify in DevTools).
16. No GTM, no social pixels, no heatmap tools without separate disclosure.

---

## 13. Sources

- Tyler's non-negotiables #21, #22, #33 from `MASTER-MANUAL.md`
- [Google Consent Mode v2 documentation](https://developers.google.com/tag-platform/security/guides/consent)
- [GA4 documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [web-vitals library](https://github.com/GoogleChrome/web-vitals)
- [ICO (UK) and GDPR cookie consent guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/) — useful reference even for U.S. sites
- [California Consumer Privacy Act (CCPA)](https://oag.ca.gov/privacy/ccpa) — relevant for California-based users
- `06-performance.md` §6.3 (third-party script management, no GTM)
- `08-forms-and-connect-cta.md` §11 (form funnel events)

---

**End of Analytics & Cookie Consent.** Next skill to load: `12-city-character-injection.md` (how to bake city-specific identity into every page without undermining network cohesion).
