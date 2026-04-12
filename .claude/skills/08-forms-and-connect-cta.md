---
name: Forms & the Connect CTA — Sams 3PL Solutions
description: The Connect form structure, field definitions, validation rules, honeypot anti-spam, submission handling via Cloudflare Workers / Zapier, success and error states, and the philosophy behind combining "Contact Us" and "Get a Quote" into one frictionless entry point. Load this skill whenever building, modifying, or debugging the Connect form or any other form on a Sams 3PL site.
type: forms
depends_on: 01-brand-system.md, 03-ui-ux-principles.md, 04-accessibility-wcag22aa.md, 07-astro-cloudflare-stack.md
version: 1.0
last_updated: 2026-04-11
---

# Forms & the Connect CTA

The Connect form is the single most important interactive element on every Sams 3PL Solutions site. It is the conversion point — the moment a visitor becomes a lead, a phone call, or a booked consultation. Every design decision, every UX choice, every performance optimization in the entire system exists to get a qualified visitor to this form and make it effortless to complete.

This file defines exactly how the form works, field by field, state by state.

---

## 1. The "Connect" Philosophy

### 1.1 Why "Connect" and not "Contact Us" or "Get a Quote"

Most logistics sites force a choice: "Contact Us" (general inquiry) or "Get a Quote" (specific request). This creates two problems:

1. **Decision friction.** A visitor who wants to ask about warehousing AND get pricing has to pick a door. Many pick neither and leave.
2. **Separate forms, separate fields, separate maintenance.** Two forms means double the work to build, style, test, and keep accessible.

The Sams 3PL "Connect" form solves both by combining everything into one entry point. The form is smart enough to handle both a casual "tell me more" and a detailed "I need 40,000 sq ft by Q3" — because it uses **optional fields with N/A options** instead of separate flows.

The word "Connect" itself is deliberate. It's warmer than "Contact." It implies a two-way relationship, not a one-directional submission. It matches the brand voice: approachable, direct, no corporate fog.

### 1.2 The conversion hierarchy

On every page, the conversion path follows this priority:

1. **Phone call** — the fastest path. The phone number is clickable in the header and footer on every page. A visitor who picks up the phone is the highest-intent lead. **Important:** clicking the phone number does NOT fire the `tel:` dialer directly — it routes to the hidden character contact page (see `12-city-character-injection.md` §3.8 and Non-Negotiable #35). That page adds a human touch and city flair before the visitor taps the final "Call" button, which triggers the dialer.
2. **Connect form** — the primary digital conversion. Available at `/connect/` and as a preview/CTA strip on most other pages.
3. **Email** — a fallback for visitors who prefer async communication. Visible in the footer and on the Connect page.

The form never competes with the phone number. They're complementary: the phone is for "I need to talk to someone now," and the form is for "I want to start a conversation at my pace." The hidden character contact page is a bridge between the two — it catches the caller's momentum and gives them a styled, city-flavored moment before the dialer fires.

---

## 2. Form Fields

### 2.1 The field set

Every Connect form across the network uses this exact field set. Fields marked "optional" include an explicit "(optional)" label and an "N/A" or "Not sure yet" option where applicable.

| # | Field | Type | Required | Notes |
|---|---|---|---|---|
| 1 | **First Name** | text | Yes | `autocomplete="given-name"` |
| 2 | **Last Name** | text | Yes | `autocomplete="family-name"` |
| 3 | **Company** | text | No (optional) | `autocomplete="organization"` |
| 4 | **Email** | email | Yes | `autocomplete="email"`, `inputmode="email"` |
| 5 | **Phone** | tel | Yes | `autocomplete="tel"`, `inputmode="tel"` |
| 6 | **How Can We Help?** | select | Yes | See §2.2 for options |
| 7 | **Estimated Square Footage** | select | No (optional) | See §2.3; includes "Not sure yet" |
| 8 | **Preferred Timeline** | select | No (optional) | See §2.4; includes "Just exploring" |
| 9 | **Tell Us More** | textarea | No (optional) | 4 rows, 500-character max, counter shown |
| 10 | **How Did You Hear About Us?** | select | No (optional) | See §2.5; includes "N/A" |

**Total: 10 fields. 5 required. 5 optional with N/A escape hatches.**

A visitor in a hurry can complete the form in under 60 seconds by filling only the 5 required fields. A visitor with detailed needs can use all 10 to give us a head start. Neither visitor is punished for their choice.

### 2.2 "How Can We Help?" options

```
- General Inquiry
- Warehousing
- Fulfillment & Distribution
- Cross-Docking / Transloading
- Transportation & Freight
- Multiple Services
- Something Else
```

"Something Else" is the escape valve. Never force a visitor to pick a category that doesn't fit — they'll abandon the form or pick randomly, which gives us bad data.

### 2.3 "Estimated Square Footage" options

```
- Not sure yet
- Under 10,000 sq ft
- 10,000 – 25,000 sq ft
- 25,000 – 50,000 sq ft
- 50,000 – 100,000 sq ft
- 100,000+ sq ft
```

"Not sure yet" is the default selected option. This field is purely for lead qualification — it helps the sales team prioritize, but it should never be a barrier to submission.

### 2.4 "Preferred Timeline" options

```
- Just exploring
- Within 30 days
- 1 – 3 months
- 3 – 6 months
- 6+ months
```

"Just exploring" is the default. Again, this is qualification data, not a gate.

### 2.5 "How Did You Hear About Us?" options

```
- N/A
- Google Search
- Referral
- LinkedIn
- Industry Event / Trade Show
- Blog / Article
- Other
```

"N/A" is the default. This field exists for marketing attribution but should never feel like a required survey question.

---

## 3. Field Behavior and Validation

### 3.1 General principles (from `03-ui-ux-principles.md` §6)

- **Labels always visible above inputs.** Never placeholder-only.
- **Validate on blur, not on keystroke.** No nagging while the user is still typing.
- **Inline errors below the field.** Not at the top of the form in a summary block (though an accessible summary is announced on submit attempt — see §3.4).
- **Plain-English error messages.** Always tell the user exactly what to fix.
- **Never wipe entered data on error.** The user's work is sacred.

### 3.2 Per-field validation

| Field | Validation Rule | Error Message |
|---|---|---|
| First Name | Non-empty, 1–50 chars | "Please enter your first name." |
| Last Name | Non-empty, 1–50 chars | "Please enter your last name." |
| Company | None (optional) | — |
| Email | Valid email format (RFC 5322 basic) | "Please enter a valid email address — we'll use this to reply." |
| Phone | Valid U.S. phone (10 digits after stripping formatting) | "Please enter a 10-digit U.S. phone number." |
| How Can We Help? | Selection made (not the placeholder) | "Please select how we can help." |
| Sq Footage | None (optional, has default) | — |
| Timeline | None (optional, has default) | — |
| Tell Us More | Max 500 chars | "Please keep your message under 500 characters." |
| How Did You Hear | None (optional, has default) | — |

### 3.3 Phone number flexibility (Postel's Law)

Accept any reasonable format and normalize server-side:
- `4197459492` → valid
- `419-745-9492` → valid
- `(419) 745-9492` → valid
- `+1 419 745 9492` → valid
- `+14197459492` → valid
- `419.745.9492` → valid

Strip all non-digit characters (except leading `+`), verify 10 digits (or 11 with leading `1`), store as `+14197459492` E.164 format.

### 3.4 Submit attempt with errors

When the user clicks "Send Message" and errors exist:

1. **Focus moves to the first invalid field.**
2. **An accessible summary is announced** via an `aria-live="assertive"` region: "Please fix [N] error(s) before sending."
3. **All error messages appear inline** below their respective fields simultaneously.
4. **The submit button remains enabled** — don't disable it on error. Disabled buttons with no explanation are a UX dead end.

### 3.5 Character counter on textarea

The "Tell Us More" textarea shows a live character count:

```
387 / 500
```

- At 0–400 characters: count is in Graphite (subtle, not distracting).
- At 401–480 characters: count shifts to Warning amber.
- At 481–500 characters: count shifts to Error red.
- At 500: input stops accepting characters (use `maxlength="500"` as a hard cap).

The counter updates on each keystroke (this is the one exception to the "no keystroke validation" rule — a counter is feedback, not validation).

---

## 4. Form Layout and Visual Design

### 4.1 Desktop layout (≥768px)

```
┌──────────────────────────────────────────────────────┐
│  H1: Let's make this easy.                           │
│  Subtitle: Fill out the form, or call us at          │
│  +1 (419) 745-9492 — whichever you prefer.           │
├──────────────────────┬───────────────────────────────┤
│  First Name *        │  Last Name *                  │
├──────────────────────┴───────────────────────────────┤
│  Company (optional)                                   │
├──────────────────────┬───────────────────────────────┤
│  Email *             │  Phone *                      │
├──────────────────────┴───────────────────────────────┤
│  How Can We Help? *                                   │
├──────────────────────┬───────────────────────────────┤
│  Sq Footage (opt)    │  Timeline (opt)               │
├──────────────────────┴───────────────────────────────┤
│  Tell Us More (optional)                              │
│  [textarea — 4 rows]                          387/500 │
├──────────────────────────────────────────────────────┤
│  How Did You Hear About Us? (optional)                │
├──────────────────────────────────────────────────────┤
│  [■ Send Message]                                     │
│                                                       │
│  We respond within 4 business hours — or sooner       │
│  if you're shipping today.                            │
└──────────────────────────────────────────────────────┘
```

Key layout decisions:
- **First Name / Last Name side by side** — natural pairing, saves vertical space.
- **Email / Phone side by side** — another natural pairing.
- **Sq Footage / Timeline side by side** — both are qualification selects, same visual weight.
- **Company, How Can We Help, Tell Us More, How Did You Hear** — full width (single column).
- **Button is left-aligned**, not centered. Left-aligned buttons follow the F-pattern reading path and feel more intentional than centered buttons on a wide form.

### 4.2 Mobile layout (<768px)

All fields stack to single column. Same order, same labels, same validation. The side-by-side pairs break to full-width stacked fields.

Touch targets are 48px minimum height (per `03-ui-ux-principles.md` §8.1 and `04-accessibility-wcag22aa.md` §4.5).

### 4.3 Visual styling

- **Input height:** 48px (meets touch target requirements and prevents iOS auto-zoom at 16px font size).
- **Input border:** 1.5px solid Fog (`#D8D4CD`).
- **Input background:** Off-White (`#F7F4EF`).
- **Input text:** Charcoal (`#1A1A1A`), 16px (1rem), Neue Montreal.
- **Label:** Charcoal, 14px (0.875rem), 600 weight, Neue Montreal. Sits 4px above the input.
- **Focus state:** 2px Brick Red border, subtle Petrol outer glow (`box-shadow: 0 0 0 3px rgba(35, 75, 94, 0.15)`).
- **Error state:** 2px Error Red border, error message below in Error Red 14px with a `⚠` prefix.
- **Placeholder text:** Graphite (`#5A5A5A`), italic, 16px. Used sparingly — only for format hints like "name@company.com" in the email field.

### 4.4 The submit button

- **Label:** "Send Message" (not "Submit" — submit is cold and transactional).
- **Style:** Primary button per `02-visual-design.md` §7.1 — Brick Red fill, Off-White text, 48px height, 600 weight, 2px radius.
- **Width:** Auto (sized to content), minimum 200px. Not full-width — a full-width button on a wide form looks like a footer, not an action.
- **Position:** Left-aligned below the last field, with `--space-6` (32px) of top margin.

---

## 5. Honeypot Anti-Spam

### 5.1 Why honeypot, not CAPTCHA or Turnstile

Per non-negotiable: **zero user-visible friction.** CAPTCHAs make real humans prove they're human. Turnstile is better but still adds a visible widget and a JavaScript dependency. Honeypots are invisible to real users and catch the majority of spam bots.

### 5.2 How it works

1. Add an invisible field to the form that humans never see:

```html
<div class="form-field--honey" aria-hidden="true" tabindex="-1">
  <label for="website">Website</label>
  <input
    type="text"
    id="website"
    name="website"
    autocomplete="off"
    tabindex="-1"
  >
</div>
```

2. Hide it with CSS:

```css
.form-field--honey {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
```

Do NOT use `display: none` — some bots detect that and skip the field. The off-screen positioning is harder for bots to detect.

3. On the server, check the honeypot value:
   - If `website` field is non-empty → bot detected → silently discard the submission (return a fake 200 success so the bot doesn't know it failed).
   - If `website` field is empty → real human → process the submission.

### 5.3 Accessibility

- `aria-hidden="true"` removes the field from the accessibility tree — screen readers don't see it.
- `tabindex="-1"` removes it from the tab order — keyboard users never land on it.
- The field is invisible, intangible, and inert to every real user.

### 5.4 Layered defense

The honeypot catches ~95% of automated spam. For the remaining edge cases, add server-side rate limiting:
- No more than 3 submissions from the same IP within 5 minutes.
- No more than 10 submissions from the same IP within 1 hour.
- If the submission completes in under 3 seconds (impossible for a real human filling 5+ fields), flag it as suspicious.

These checks happen server-side and are invisible to real users.

---

## 6. Form Submission Handling

### 6.1 Client-side submission flow

```
User clicks "Send Message"
  → Client-side validation runs
    → If errors: focus first error, show inline messages, announce summary
    → If valid:
      → Button changes to "Sending..." with a spinner
      → Button is disabled (cannot double-submit)
      → Form data is serialized as JSON
      → POST to the submission endpoint
        → On success: replace form with success state (§7.1)
        → On failure: show error state (§7.2), re-enable button
```

### 6.2 Submission endpoint options

**Option A: Cloudflare Workers (recommended)**

A lightweight Cloudflare Worker receives the form data, validates server-side, checks the honeypot, rate-limits, and forwards to email/CRM:

```
POST https://detroit3pl.com/api/connect
Content-Type: application/json

{
  "firstName": "...",
  "lastName": "...",
  "company": "...",
  "email": "...",
  "phone": "...",
  "service": "...",
  "sqft": "...",
  "timeline": "...",
  "message": "...",
  "source": "...",
  "website": ""  // honeypot — must be empty
}
```

The Worker:
1. Validates all required fields server-side (never trust client-only validation).
2. Checks honeypot.
3. Checks rate limits.
4. Normalizes phone to E.164 format.
5. Sends notification email to `info@sams3plsolutions.com`.
6. Optionally pushes to a CRM or spreadsheet via API.
7. Returns `{ success: true }` or `{ success: false, error: "..." }`.

**Option B: Zapier Webhook**

If the team isn't ready to maintain a Worker, a Zapier webhook is a no-code alternative:

```
POST https://hooks.zapier.com/hooks/catch/[id]/[hook]
```

Zapier receives the form data and triggers a "Zap" that:
- Sends a notification email.
- Creates a row in Google Sheets or Airtable.
- Creates a lead in a CRM (HubSpot, Salesforce, etc.).
- Sends a Slack notification to the team.

Tradeoffs: Zapier adds a third-party dependency and has a ~1–2 second response time. The Worker is faster and self-hosted. Start with Zapier, migrate to Workers when volume justifies it.

### 6.3 Server-side validation (critical)

Never rely solely on client-side validation. A determined user (or bot) can bypass JavaScript entirely. The server (Worker or Zapier) must independently validate:

- Required fields are present and non-empty.
- Email matches a basic format check.
- Phone has 10+ digits.
- Honeypot is empty.
- Payload size is under 10 KB (prevents abuse).
- Rate limits are not exceeded.

If server-side validation fails, return a structured error response so the client can display the appropriate message.

---

## 7. Success and Error States

### 7.1 Success state

When the form submission succeeds, the entire form is replaced (not hidden — replaced in the DOM) with a success message:

```html
<div class="connect-success" role="status" aria-live="polite">
  <h2>Thank you, [First Name].</h2>
  <p>
    We've received your message and will be in touch within
    <strong>4 business hours</strong> — or sooner if you're shipping today.
  </p>
  <p>
    In the meantime, you can always call us directly at
    <a href="tel:+14197459492">+1 (419) 745-9492</a>.
  </p>
  <div class="connect-success-actions">
    <a href="/services/">Explore Our Services</a>
    <a href="/blog/">Read Our Latest Insights</a>
  </div>
</div>
```

Key details:
- **Uses the visitor's first name** (from the form data they just entered). Personal, not generic.
- **States a specific response time** ("4 business hours") — not "soon" or "as quickly as possible." Specificity builds trust.
- **Offers the phone number as an immediate alternative** — for the visitor who submitted but then thought "actually, I need to talk to someone right now."
- **Provides secondary actions** so the visitor stays on the site instead of bouncing.
- **Announced via `aria-live="polite"`** so screen readers hear the confirmation.

### 7.2 Error state (submission failure)

If the network request fails (server error, timeout, CORS issue):

```html
<div class="connect-error" role="alert" aria-live="assertive">
  <h3>Something didn't go through.</h3>
  <p>
    Your message wasn't sent — but your information is still here.
    Please try again, or call us directly at
    <a href="tel:+14197459492">+1 (419) 745-9492</a>.
  </p>
  <button type="submit">Try Again</button>
</div>
```

Key details:
- **The form is NOT cleared.** All entered data remains. The user does not retype anything.
- **The submit button is re-enabled** and relabeled "Try Again."
- **The phone number is prominent** — if the form is broken, the phone is the immediate fallback.
- **The error is announced via `aria-live="assertive"`** — this is urgent feedback, not polite status.
- **The error is logged server-side** (or client-side to a monitoring service) so we know the form is broken.

### 7.3 Offline / no-network state

If the user's device has no network connection at submission time:

```
We couldn't reach our servers — you might be offline. 
Please check your connection and try again, or call us at 
+1 (419) 745-9492.
```

Detect network status via `navigator.onLine` as a quick heuristic (it's not perfectly reliable, but it catches the obvious cases).

---

## 8. The Connect CTA Across the Site

The full form lives at `/connect/`. But the CTA appears across the site in several forms:

### 8.1 Header CTA

A persistent "Connect" button in the header navigation (per `03-ui-ux-principles.md` §4.1):
- Desktop: primary red button, far-right of the nav bar.
- Mobile: prominent red button inside the mobile menu overlay, positioned right below the phone number.

Links to `/connect/`.

### 8.2 Section CTA strip

A full-width CTA band that can be placed between sections on any page:

```html
<section class="cta-strip">
  <div class="container">
    <h2>Ready to simplify your supply chain?</h2>
    <p>Let's talk. No commitment, no pressure — just a conversation.</p>
    <div class="cta-strip-actions">
      <a href="/connect/" class="btn btn-primary">Connect</a>
      <a href="/call/" class="btn btn-secondary">
        Call +1 (419) 745-9492
      </a>
      <!-- Routes to the hidden character contact page (§3.8 in 12-city-character-injection.md),
           NOT directly to tel: — the tel: link lives on that page's final CTA button. -->
    </div>
  </div>
</section>
```

Always pairs the form CTA with the phone number. Always includes a human, conversational headline — never "Submit Your Inquiry" or "Request Information."

### 8.3 Page-bottom CTA

Every service detail page and blog post ends with a contextual CTA:

- **Service page:** "Need [service name] in [city]? Let's connect." → links to `/connect/` with the "How Can We Help?" field pre-selected to that service.
- **Blog post:** "Have a question we didn't answer here? Connect with our team." → links to `/connect/`.

### 8.4 Pre-selected fields via URL parameters

The Connect form should accept URL parameters to pre-populate fields:

```
/connect/?service=warehousing&sqft=50000-100000
```

This enables contextual CTAs from service pages to pre-fill the "How Can We Help?" and "Estimated Square Footage" selects, reducing friction further. The visitor sees a form that already "knows" what they were looking at.

Implementation: read `URLSearchParams` on page load and set the corresponding field values. Don't rely on these parameters for validation — they're a convenience, not a requirement.

---

## 9. Form on the Connect Page vs. Inline Form Previews

### 9.1 The full Connect page (`/connect/`)

The `/connect/` page is the canonical form page. It includes:
- **Hero:** short H1 ("Let's make this easy"), one intro sentence, phone number displayed large as an alternative.
- **The full 10-field form** (§2).
- **Below the form:** hours, address, map (if available), response-time promise, privacy reassurance.

### 9.2 Inline form previews (other pages)

Some pages (home, service detail) may include a shorter inline form preview — typically just:
- First Name, Email, Phone, How Can We Help?, Send Message.

This 4-field mini-form lowers the barrier even further for high-intent pages. On submission, it either:
- Submits directly (if the endpoint accepts partial data), OR
- Redirects to `/connect/` with the entered fields pre-populated via URL params, so the visitor can complete the remaining optional fields.

The mini-form is never the primary form — it's a fast lane. The full form at `/connect/` is always the canonical version.

---

## 10. Email Notification Format

When a submission reaches the team, the notification email should be structured for fast triage:

```
Subject: New Connect Submission — [City] 3PL — [Service Selected]

From: [First Name] [Last Name]
Company: [Company or "Not provided"]
Email: [email]
Phone: [phone, formatted]

Service: [How Can We Help selection]
Square Footage: [selection or "Not sure yet"]
Timeline: [selection or "Just exploring"]
Source: [How Did You Hear selection or "N/A"]

Message:
[Tell Us More content, or "No message provided"]

---
Submitted: [timestamp, city timezone]
Source page: [referrer URL]
City site: [city]3pl.com
```

The subject line includes the city and service so the team can triage at a glance without opening every email.

---

## 11. Analytics and Tracking

### 11.1 Form funnel events (GA4)

Track these events to measure form performance (see `11-analytics-and-consent.md` for GA4 setup):

| Event | When fired | Purpose |
|---|---|---|
| `form_view` | Connect page loads | Top of funnel — how many people see the form |
| `form_start` | First field receives focus | Engagement — how many people start filling it out |
| `form_field_error` | Validation error on blur | Friction — which fields cause trouble |
| `form_submit_attempt` | Submit button clicked | Intent — how many try to submit |
| `form_submit_success` | Server returns success | Conversion — the number that matters |
| `form_submit_error` | Server returns error | Breakage — the number we need to fix |

**Do NOT fire these events until cookie consent is granted.** See `11-analytics-and-consent.md`.

### 11.2 Conversion rate benchmarks

Industry benchmarks for B2B lead-gen forms:
- Form view → form start: 40–60%
- Form start → submit attempt: 50–70%
- Submit attempt → success: 90%+ (if lower, fix the errors)
- Overall form view → success: 20–40% is strong for B2B

If our rates are below these benchmarks, investigate field-level drop-off data to find the friction.

---

## 12. Legal and Privacy

### 12.1 What we collect

The 10 fields listed in §2, plus:
- Submission timestamp.
- Referring URL (which page they came from).
- City site (which domain they submitted from).

We do NOT collect:
- IP address (unless required for rate limiting, in which case it's not stored beyond the rate-limit window).
- Browser fingerprint.
- Device information beyond what GA4 collects (with consent).

### 12.2 Privacy reassurance on the form

Below the submit button, include a one-line privacy statement:

```
Your information is used only to respond to your inquiry. 
We don't sell data. Read our privacy policy.
```

"Read our privacy policy" links to `/privacy/`. The statement is visible, not hidden in fine print. It's a trust signal, not a legal disclaimer.

### 12.3 No marketing opt-in by default

The form does NOT include a pre-checked "Subscribe to our newsletter" checkbox. If we add email marketing in the future:
- The checkbox is **unchecked by default**.
- The label is clear: "Yes, send me occasional logistics insights by email."
- Checking it is entirely optional and has no effect on form submission.

---

## 13. Self-Check Before Shipping the Connect Form

1. All 10 fields are present with correct labels, types, and `autocomplete` attributes.
2. The 5 required fields show clear "required" indicators and validate on blur.
3. The 5 optional fields have "(optional)" in their labels and sensible defaults ("Not sure yet," "N/A," "Just exploring").
4. Phone accepts any reasonable format and normalizes server-side.
5. Error messages are plain English, inline below the field, and announced to screen readers.
6. The submit button shows "Sending..." state and cannot be double-triggered.
7. Success state replaces the form, uses the visitor's first name, states a specific response time, and offers the phone number.
8. Error state preserves all entered data, re-enables the button, and offers the phone as fallback.
9. Honeypot field is present, invisible, excluded from the accessibility tree, and checked server-side.
10. Server-side validation independently verifies all required fields and the honeypot.
11. Rate limiting is in place (3/5min, 10/1hr per IP).
12. Email notification includes city, service, and timestamp for fast triage.
13. Privacy statement is visible below the submit button.
14. URL parameters pre-populate fields correctly when passed from service pages.
15. GA4 form funnel events are configured (and deferred until consent).
16. The form is fully keyboard-navigable: Tab through all fields, Enter to submit, inline errors announced.
17. Touch targets are 48px minimum on mobile.
18. The form looks and functions identically to the spec at 375px, 768px, and 1280px.

---

## 14. Sources

- Tyler's non-negotiables #5 (combined Contact + Quote as "Connect"), #6 (N/A options on dropdowns), #7 (honeypot, not CAPTCHA/Turnstile), from `MASTER-MANUAL.md`
- `03-ui-ux-principles.md` §6 (form behavior principles), §2.8 (Tesler's Law — system absorbs complexity)
- `04-accessibility-wcag22aa.md` §3.3, §5.3 (form accessibility, input purpose, error handling)
- `07-astro-cloudflare-stack.md` §4.2 (Preact form component with `client:visible`)
- Nielsen Norman Group, "Website Forms Usability" research
- Baymard Institute, "Checkout Usability" benchmark studies (form design principles apply beyond e-commerce)

---

**End of Forms & the Connect CTA.** Next skill to load: `09-photography-and-imagery.md` (photo sourcing, licensing, art direction, and the "no stock slop" standard).
