---
name: UI/UX Principles — Sams 3PL Solutions
description: Interaction design, usability laws, component behavior, error handling, and the "how it feels to use" discipline for every page in the Sams 3PL Solutions network. Load this skill whenever designing flows, specifying component behavior, writing form logic, or reviewing whether an interaction feels credible and effortless.
type: ux-system
depends_on: 01-brand-system.md, 02-visual-design.md
version: 1.0
last_updated: 2026-04-11
---

# UI/UX Principles

`01-brand-system.md` says what the brand is. `02-visual-design.md` says how to compose it. This file says how it should *behave* — how the site feels under a real human finger, on a real device, in a real moment of "I need to ship 40 pallets to Columbus by Thursday."

The guiding question for every interaction is the same one from the Master Manual:

> Would someone stop scrolling to look at this? Could this win an award?

Usability is the precondition for winning an award, not the substitute for it. A confusing page cannot be beautiful. A beautiful page that frustrates its user is neither beautiful nor useful.

---

## 1. The Core UX Principles

These are the non-negotiable interaction principles every Sams 3PL site must honor. They distill Jakob Nielsen's 10 heuristics, Don Norman's foundations, and Bruce Tognazzini's 19 First Principles into the subset that actually matters for logistics sites.

1. **Visibility of system status.** The site tells the user what is happening, always. Loading states, success messages, form submission confirmations, "copied" toasts — every state change is visible within 100ms.
2. **Match between system and real world.** Speak shipping English, not developer English. "Get a Quote," not "Initiate Request." "Connect," not "Submit Form." "Docks," not "Loading Bay Interfaces."
3. **User control and freedom.** Every action is reversible or confirmable. No dead ends. A user who clicked into the wrong section can always back out with one click — browser back button, breadcrumbs, or a visible "return to services" link.
4. **Consistency and standards.** The same pattern means the same thing everywhere on the site. A red button is always a primary action. An underlined word is always a link. Never invent a new pattern when an existing one works.
5. **Error prevention.** It is always better to prevent an error than to show a friendly error message. Disable submit until the form is valid. Offer dropdown options instead of free-text when possible. Confirm destructive actions.
6. **Recognition over recall.** Never make the user remember. Show the shipping address they just entered. Show the selected option. Show the current page in the nav. Show the phone number in the header so they don't have to scroll back to find it.
7. **Flexibility and efficiency.** First-time visitors get obvious paths. Return visitors and power users get shortcuts — keyboard focus, tab order, autofill-friendly form attributes, "recent searches" where relevant.
8. **Aesthetic and minimalist design.** Every extra word, icon, or decoration competes for attention with the thing that matters. The Sams 3PL quality bar is "nothing on this page is decorative clutter." If you cannot defend why an element is there, remove it.
9. **Help users recognize, diagnose, and recover from errors.** When something does go wrong, the error message is in plain English, tells the user exactly what went wrong, and tells them exactly how to fix it. Never a tech stack trace. Never a vague "Something went wrong."
10. **Help and documentation.** Most users shouldn't need help to use the site — but when they do, it's one click away. FAQ links, a visible phone number, a clear "talk to a person" path.

---

## 2. The Usability Laws We Design To

### 2.1 Fitts's Law

**Time to acquire a target is a function of the distance to and size of the target.**

Applied:
- Primary CTAs are **at minimum 48×48 pixels** (the WCAG 2.2 AA target size and the Apple/Google mobile standard). Secondary CTAs minimum 44×44.
- Primary actions sit at the natural thumb rest on mobile — typically the bottom-right on right-handed grip. Our `Connect` CTA belongs in the sticky mobile header OR a bottom-fixed utility bar, never buried mid-page.
- Clickable targets have visible hit areas with generous padding — the entire card is clickable, not just the small text link inside it.
- Dangerous targets (destructive actions, external links, anything that navigates away) are deliberately *smaller or farther* from safe targets, so the thumb doesn't drift into them.

### 2.2 Hick's Law

**Decision time grows with the number of choices.**

Applied:
- Primary nav: **five top-level items maximum**. More than five and we're asking the user to do our information architecture for us.
- Homepage hero: **one primary CTA**, one secondary at most. Never three buttons fighting for attention.
- Service lists: chunk into meaningful categories of 3–5 items. Twelve services in a flat list is twelve decisions; four categories of three is four decisions.
- Forms: break long forms into progressive steps when the user is otherwise staring down 10+ fields at once.

### 2.3 Jakob's Law

**Users spend most of their time on other sites. They expect our site to work the way those sites work.**

Applied:
- Logo top-left. Clicking the logo always returns to home.
- Primary nav top. Contact CTA top-right.
- Phone number visible in the header AND footer.
- Search icon (where applicable) in the expected corner.
- Shopping cart, login, profile icons use standard iconography (when they exist at all — most Sams 3PL sites won't have e-commerce).
- External links open in new tabs only when genuinely expected (social media, third-party docs); internal links open in the same tab.

We break Jakob's Law **only** where convention is actively bad for users (autoplay carousels, hamburger menus on desktop, "cookie walls"). We never break it because "it's more interesting that way."

### 2.4 Miller's Law

**People can hold roughly seven (plus or minus two) items in working memory.**

Applied:
- Lists of 7 or fewer items where possible. If a list must be longer, chunk it into labeled groups of 3–5.
- Phone number formatted with natural pauses: `+1 (419) 745-9492` — the parens and space chunk it into memorizable groups.
- Multi-step forms show progress as chunked phases ("About you → Your shipment → Review"), not 1/14, 2/14, 3/14.

### 2.5 Law of Proximity (Gestalt)

**Things close together are perceived as related.**

Applied:
- Labels sit directly above their inputs (≤4px gap), not floating 40 pixels away.
- Captions sit directly under their images.
- "Call us" and the phone number are inseparable — no column gap, no dividers between them.
- Buttons sit immediately after the content they act on, not in a far-right utility bar disconnected from context.

### 2.6 Aesthetic-Usability Effect

**Users perceive beautiful interfaces as more usable — and are more patient with minor friction when the interface feels crafted.**

Applied:
- Typography, spacing, and photography quality are treated as *functional* requirements, not decoration. A page that looks premium earns trust before the user has read a word.
- But beauty never justifies hidden controls, mystery-meat navigation, or style-over-substance affordances. If a button is beautiful but no one realizes it's a button, it failed.

### 2.7 Peak-End Rule

**People judge an experience by its emotional peak and its ending, not its average.**

Applied:
- The hero is the emotional peak — real photography, confident headline, a single clear next step. This is where we earn the rest of the visit.
- The ending is the form submission or the phone-call moment. We invest in making the "success" state feel deliberate: a confirmation message that names the human who will reply, a realistic "we'll call you within 4 business hours" promise, and the Easter egg (see §9) waiting for the curious.

### 2.8 Tesler's Law (Law of Conservation of Complexity)

**Every system has irreducible complexity. The question is who absorbs it — the user or the system.**

Applied:
- The `Connect` CTA deliberately absorbs complexity on our side. Behind the scenes we handle routing, qualification, and follow-up. On the user's side, they see one form with N/A options so the friction is minimum.
- City selection is inferred from the subdomain, not asked of the user.
- Service selection offers a clear "I'm not sure yet" path so users who don't know our taxonomy aren't forced to learn it to get in the door.

### 2.9 Doherty Threshold

**Productivity soars when a system responds to user actions in under 400ms.**

Applied:
- Every click, tap, and key press produces visible feedback within 100ms (focus rings, button press states).
- Page transitions complete within 400ms — enforced by our performance budget (see `06-performance.md`: LCP <2.5s, INP <200ms).
- Forms validate on blur (not on every keystroke, which feels nagging) and respond within 100ms when they do.

### 2.10 Postel's Law (Robustness Principle)

**Be liberal in what you accept, conservative in what you send.**

Applied:
- Form inputs accept phone numbers in any reasonable format (`4197459492`, `419-745-9492`, `(419) 745-9492`, `+14197459492`) and normalize server-side.
- Email inputs strip whitespace, accept `+` subaddressing, and don't reject on capitalization.
- Search accepts typos, plurals, and partial matches.
- Our outbound data (schema.org, sitemaps, meta tags) is strictly conformant.

---

## 3. Information Architecture

### 3.1 The core site map

Every Sams 3PL city site uses the same top-level structure. This is a deliberate cohesion choice per non-negotiable — every site in the network feels like the same company.

```
/                      Home
/services/             Services overview
  /services/[slug]/    Individual service page (warehousing, fulfillment, cross-dock, ...)
/about/                About — facility, team, COPE-style facts
/industries/           Industries we serve (optional, city-dependent)
/connect/              The one-and-only contact/quote form
/blog/                 Content hub
  /blog/[slug]/        Individual post
/privacy/              Privacy policy
/accessibility/        Accessibility statement
/terms/                Terms (where applicable)
```

**Primary nav item order (Non-Negotiable #22) — left to right:**

```
Logo + "A Sams 3PL Solutions Company" (far left)
  → Industries (dropdown)
  → Services (dropdown)
  → "Port of ___" or City link
  → About
  → Blog
  → Connect CTA button (far right)
```

This is a fixed sequence across every site in the network. The only variation is the "Port of ___" / City link label, which changes per city (e.g., "Port of Houston," "Port of Savannah," "Detroit"). That's six nav items + the logo lockup — the extra item beyond the Hick's Law ceiling of five is acceptable because the CTA is visually separated as a button, not a text link, so the user perceives five items + one action.

**Footer exposes:** everything — full sitemap, contact block, hours, legal links, network lockup.

### 3.2 Depth and breadth

Never more than **three clicks** from the home page to any piece of content. If a user needs four clicks, we need to flatten the structure.

Never fewer than **two clicks** either — we don't want the home page to be a flat dump of every service. Two clicks is "home → services → cross-dock." That's the right rhythm.

### 3.3 Breadcrumbs

Every page below the top level shows breadcrumbs in the header below the nav:

```
Home  ›  Services  ›  Cross-Dock
```

Breadcrumbs use schema.org `BreadcrumbList` markup (see `05-seo-aeo-geo-llmo.md`) so they also feed search-result rich snippets.

### 3.4 URL discipline

- Lowercase, hyphenated slugs.
- No trailing `.html`, no query strings in canonical URLs.
- Slugs describe the content, not the platform (`/services/warehousing/`, not `/p?id=42`).
- Blog posts use `/blog/[slug]/` — no date in the URL, so evergreen content doesn't look dated.
- Canonical URLs are always `https://` with the trailing slash, and 301-redirect every other variant to the canonical.

---

## 4. Navigation Behavior

### 4.1 The header

Header behavior rules:
- **Sticky on scroll** with a subtle translucent off-white background (`backdrop-filter: blur(8px)`) and a 1px fog bottom border once the user scrolls past 8px.
- **Reveals on scroll-up, hides on scroll-down** on mobile — common pattern that returns screen real estate during reading but keeps the Connect CTA one scroll-flick away.
- **Phone number is clickable** (`tel:` link) on every viewport, not just mobile. Desktop users call too.
- **Current page** in the nav is marked with a petrol underline and `aria-current="page"` — both a visual and an accessible signal.

### 4.2 The mobile menu

- Hamburger icon opens a full-screen overlay. No cramped dropdown, no tiny fly-out.
- First item in the overlay is the phone number — prominently sized, tap-to-call.
- Second item is the Connect CTA as a primary red button.
- Then the full nav, stacked vertically with generous touch targets (56px minimum).
- The overlay has a visible close button AND closes on escape/back.
- Focus is trapped inside the overlay while open; focus returns to the hamburger button on close.

### 4.3 Footer

- The footer is full of content, not a graveyard. It contains:
  - Network lockup ("A Sams 3PL Solutions Company")
  - Full address + hours + phone + email (with `LocalBusiness` schema)
  - Sitemap in columns
  - Blog preview (latest 3 posts)
  - Legal links (Privacy, Accessibility, Terms)
  - Small social icons (if any)
- The footer is the user's safety net. If they got lost in the site, they can always find their way out from here.

### 4.4 Skip-to-content link

Every page has a **visible-on-focus** skip link as the first interactive element:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

This is mandatory for WCAG 2.2 AA and is covered in detail in `04-accessibility-wcag22aa.md`.

---

## 5. Feedback Principles

Every interaction produces one of four forms of feedback:

### 5.1 Immediate feedback (≤100ms)

Visual response to input without any work happening behind the scenes:
- Button press state (95% scale for 80ms).
- Link hover underline.
- Input focus ring appearing.
- Checkbox/radio state change.

### 5.2 Short operation feedback (100ms–1s)

The system is doing something brief but perceptible:
- Button shows a loading spinner or "Sending…" label while in flight.
- The button remains physically in place (never "jumps") so the user's thumb doesn't chase it.
- The operation cannot be re-triggered while in flight (disabled state prevents double-submit).

### 5.3 Long operation feedback (1s+)

The system is doing real work:
- Progress indicator or skeleton state if the result takes ≥1 second.
- For anything ≥10 seconds, a real percent-complete or phase indicator ("Uploading… Validating… Done").
- For anything ≥30 seconds, an honest "this takes a minute" message with a cancel option.

Most Sams 3PL site interactions are in the ≤1s bucket. The Connect form submission is the one that might push into this range — plan accordingly.

### 5.4 System-state feedback

The user needs to know the state of the world even when they didn't just act:
- Form validation errors appear on blur.
- Toast notifications confirm "Link copied," "Message sent," etc.
- Banners announce site-wide states if any exist (rare for us).

---

## 6. Forms (The Crown Jewel)

The Connect form is the single most important interactive element on every site. Full form structure, field list, validation rules, and submission handling live in `08-forms-and-connect-cta.md`. This section defines the *behavior principles* forms must honor.

### 6.1 Structure

- Labels always above inputs, never inside them as placeholder-only. Placeholder-only labels are a documented accessibility and recall failure.
- Optional fields are marked "(optional)". Required fields are the default assumption — we don't asterisk every single required field because everything is required by default.
- Fields that genuinely don't apply offer an "N/A" or "Not sure yet" option so the user can proceed with minimum friction (Tesler's Law applied).
- Phone and email inputs use `inputmode` and `autocomplete` attributes so mobile keyboards and browser autofill do the right thing:
  - `<input type="tel" inputmode="tel" autocomplete="tel">`
  - `<input type="email" inputmode="email" autocomplete="email">`

### 6.2 Validation

- **On blur, not on keystroke.** Nagging users as they type an email feels hostile.
- **Inline, not at-the-top.** Error messages sit directly under their field.
- **Plain-English, actionable.** "Please enter a valid email address (we'll use this to reply)." Not "ERROR: regex failed." Not "Invalid input."
- **Never destructive.** Don't wipe entered data on a validation error. Ever.
- **Summary on submit attempt.** If the user tried to submit a form with errors, focus moves to the first invalid field AND an accessible summary announces "Please fix 2 errors before submitting."

### 6.3 Submission

- Button shows `Sending…` state with a spinner, remains in place, cannot be re-triggered.
- Success state replaces the form with a confirmation message that:
  - Thanks the user by name (using the name they entered).
  - Tells them exactly what happens next ("We'll call you at +1 (419) 745-9492 within 4 business hours — or sooner if you're shipping today").
  - Offers a secondary action (read the blog, explore services).
- Failure state keeps the form populated, shows a clear error with a fallback phone number prominently displayed, and logs the error server-side.

### 6.4 Anti-spam (zero user friction)

We use the **honeypot pattern** — an invisible field that humans never see but bots fill in. If the honeypot is non-empty on submission, the submission is silently dropped. This is covered in full in `08-forms-and-connect-cta.md`. No CAPTCHAs, no Turnstile, no user-visible friction.

---

## 7. Error Handling

### 7.1 Four types of error

1. **Validation errors** (user input is wrong): handled inline at the field (§6.2).
2. **Operational errors** (network failure, server error): handled with a clear banner, retry option, and fallback to phone.
3. **Not-found errors** (404): custom 404 page (§7.2).
4. **Unexpected errors** (JavaScript exception, rendering failure): caught at a root error boundary, logged, and replaced with a graceful "Something unexpected happened — please reload or call +1 (419) 745-9492" message. Never a stack trace.

### 7.2 404 page

The 404 page is a test of craftsmanship. Every Sams 3PL site gets a custom 404 that:
- Confirms what happened in human language ("This page doesn't exist anymore — or maybe never did.").
- Offers clear next steps: back to home, to services, to connect, search.
- Shows the phone number prominently (because users who hit 404 are often frustrated and a human conversation solves everything).
- Uses the real city photography and voice, not a generic cartoon.
- Is a candidate spot for the city's Easter egg (see §9), where a small reward for the curious user turns a frustration into a moment of delight.

### 7.3 Error prevention beats error recovery

Every time you're about to design an error message, ask: "Could the system have prevented this from being possible?" If yes, redesign the interaction so the error cannot occur.

Examples:
- Instead of an error on an invalid date, use a date picker.
- Instead of an error on mis-typed email, offer autocomplete suggestions.
- Instead of an error on a required field, disable submit until it's filled.
- Instead of an error on a duplicate submission, disable the button after first click.

---

## 8. Touch and Input Device Discipline

### 8.1 Touch targets

- **Minimum 48×48 CSS pixels** for any tappable element. WCAG 2.2 AA requires 24×24 as a bare minimum; we exceed this everywhere.
- **Minimum 8px of space between adjacent touch targets** so a fat thumb doesn't hit the wrong one.
- **Tap targets have visible hit areas** (the whole card is tappable, not just the 16px link inside).

### 8.2 Hover-only interactions are banned

A feature that only reveals itself on hover is invisible on touch. If a piece of UI only appears on hover, it is broken on mobile — period. Any hover behavior must have a visible equivalent on touch devices:
- Dropdown menus open on click/tap, not hover.
- Tooltips have tap-to-reveal equivalents.
- Hover reveals (like "more info" on a card) have a visible always-on affordance.

### 8.3 Keyboard parity

Every interaction that works with a mouse must work with a keyboard. This is a WCAG 2.2 AA requirement but also a basic usability one. See `04-accessibility-wcag22aa.md` for the full keyboard interaction spec, but the short version is:
- Tab to focus every interactive element, in logical order.
- Enter/Space to activate buttons and links.
- Escape to close modals, menus, and overlays.
- Arrow keys to navigate within groups (radio buttons, tab lists, menubars).
- Visible focus ring on every focusable element, always.

### 8.4 Pointer capabilities detection

Use CSS `@media (hover: hover)` to apply hover effects **only** on devices that actually support them. This prevents the "sticky hover state on tap" bug on touch devices.

```css
@media (hover: hover) {
  .card:hover { transform: translateY(-2px); }
}
```

---

## 9. The Easter Egg Principle

Per non-negotiable: every site gets one Easter egg. This section defines what makes an Easter egg work from a UX perspective.

### 9.1 What an Easter egg is

A deliberate, hidden reward for a curious user. It is discoverable but not required. It respects the user's time — it never blocks the primary path, never interferes with utility, and never reveals itself to users who didn't seek it.

### 9.2 What an Easter egg is not

- A surprise popup that interrupts a user trying to get a quote.
- A hidden button that breaks the nav.
- A gag that undermines the brand's credibility (see the Houston sci-fi "warp drive" competitive warning in `MASTER-MANUAL.md`).
- A gimmick that screams "someone was bored and had time to waste."

### 9.3 Placement candidates

- The 404 page (turn a failure into a moment).
- The `/about/` page, deep in the team bio (reward a reader who went the distance).
- The footer (a hidden tooltip on the city name or a small icon).
- The blog, in an unrelated post's sidebar.
- A subtle animation that only plays on the 10th page-view in a session.

### 9.4 The rule

An Easter egg is only successful if:
1. A user who never finds it has an identical, complete experience.
2. A user who finds it smiles, feels clever, and thinks slightly more warmly of the brand.
3. It matches the city's character without undermining the city's credibility.

If any of those three fail, cut it.

---

## 10. Page Type Behavior Specs

Each canonical page type has a behavior profile. These are the defaults — deviate only with justification.

### 10.1 Home

- **Above the fold:** hero photograph (real, city-specific), H1 with city-character tagline, one primary CTA (Connect), one secondary CTA (Services).
- **Section 2:** three services cards (chunked per Hick/Miller).
- **Section 3:** city-character block (real local data, real facility facts).
- **Section 4:** social proof or "who we serve" block.
- **Section 5:** short "about" preview with link.
- **Section 6:** blog preview (latest 2–3).
- **Section 7:** Connect form preview OR full-width CTA strip linking to `/connect/`.
- Footer.

### 10.2 Services overview

- Hero: short H1, brief intro, real photograph of a facility operation.
- Card grid of all services with short descriptions and click-through to individual pages.
- "Not sure which service?" Connect CTA at the bottom.

### 10.3 Service detail

- Hero: service name, one-sentence what-it-is, real photograph of that service being performed (not stock).
- Section: what it is in plain language.
- Section: who it's for (audience matching).
- Section: how it works at this facility (process narrative — E-E-A-T evidence).
- Section: specs table (dock count, SKU capacity, hours) in tabular numerals.
- Section: FAQ with FAQPage schema (feeds AEO — see `05-seo-aeo-geo-llmo.md`).
- Section: Connect form preview OR inline CTA.

### 10.4 About

- Hero: facility photograph.
- Section: who we are in 1–2 paragraphs.
- Section: team (named people, real photos — optional but strongly preferred for E-E-A-T).
- Section: facility facts (square footage, dock count, hours, certifications, fire protection posture from COPE) — presented honestly.
- Section: city-character narrative (why we do it here, what this city means to us).
- Section: Connect.

### 10.5 Connect

- Hero: short H1 ("Let's make this easy"), one short intro sentence, phone number displayed at hero size as an alternative path.
- Form: the full Connect form with N/A-friendly dropdowns (see `08-forms-and-connect-cta.md`).
- Secondary: hours, address, map (if available).
- Trust reinforcement: response-time promise, one-line privacy reassurance, easy opt-out statement for marketing contact.

### 10.6 Blog index

- Hero: brief H1 ("Field notes from the [city] warehouse").
- Filterable/sortable post list (by category, optional).
- Card grid with real photography per post.
- Author byline on every card (see `10-blog-system.md` for the 12 permanent author personas).

### 10.7 Blog post

- Editorial layout using Fraunces for body.
- Byline + date + reading time above the fold.
- Author bio block at the end with link to that author's archive.
- Related posts (3) at the bottom.
- Connect CTA at the bottom (contextually phrased: "Have a shipping question we didn't answer here? Connect with our team.").

---

## 11. Progressive Disclosure

Don't show everything at once. Use progressive disclosure to reduce cognitive load without hiding critical information.

### 11.1 Where to disclose progressively

- FAQ accordions (collapsed by default, expand on click). Default to the first question open if it's the most commonly asked.
- "Read more" expansions for long service descriptions.
- Multi-step forms for anything with more than ~6 fields.
- "Show all N" controls on card grids when the default view shows 3–6.

### 11.2 Where NOT to hide

- Phone number. Always visible.
- Address and hours. Always visible in footer.
- Primary CTA. Always visible.
- Price ranges where published. Never hidden behind a "request to see."
- Critical safety or legal information.

### 11.3 The rule

Progressive disclosure is for **detail**, not for **essence**. If the hidden content is essential to decision-making, it's not progressively disclosed — it's buried. Don't bury things.

---

## 12. The "Stop Scrolling" Test

Every page must pass this test before shipping. Ask:

1. **Does the hero earn a pause?** A first-time visitor's thumb is moving. If the first viewport doesn't earn three seconds of held attention, nothing that follows matters.
2. **Does every section below the fold earn its scroll?** A user reading past the fold has given the page a gift. Each subsequent section either returns the gift with value (new information, a real photo, a clear benefit) or loses them.
3. **Does the primary CTA feel like the obvious next move at every scroll position?** Not "findable" — obvious. If a user at any point thinks "I want to talk to someone about this," they should be able to tap to call or tap to Connect within one gesture.
4. **Does a keyboard user get the same experience?** Tab through the page. If the tab order is nonsensical, the focus rings are missing, or the keyboard can't reach something the mouse can, the page is broken.
5. **Does a screen reader user get the same narrative?** Run NVDA or VoiceOver. If the reading order is confused or critical images have no alt text, the page is broken.

A page that passes all five tests is shippable. A page that passes four is not.

---

## 13. Self-Check Before Shipping

Beyond the visual checklist in `02-visual-design.md`, verify:

1. Every interactive element is at least 48×48 px with 8px separation from neighbors.
2. Every form input has a visible label above it (not placeholder-only).
3. Every form validates on blur, not on keystroke, with plain-English inline errors.
4. The submit button shows a loading state and cannot be double-triggered.
5. The success state tells the user what happens next in specific, human terms.
6. Every hover interaction has a touch-device equivalent.
7. Every modal and overlay traps focus and closes on escape.
8. The 404 page is custom and on-brand.
9. Breadcrumbs appear on every page below the top level and use schema markup.
10. The nav exposes five or fewer top-level items.
11. The home hero has exactly one primary CTA.
12. Phone number is clickable, visible in header, visible in footer.
13. Skip-to-content link appears as the first focusable element.
14. Reduced-motion preferences are honored.
15. The Easter egg (if present on this page) is discoverable but does not interfere with the primary path.

---

## 14. Sources

This skill distills the interaction and usability portions of:

- Jakob Nielsen, *10 Usability Heuristics for User Interface Design* (NN/g)
- Don Norman, *The Design of Everyday Things*
- Bruce Tognazzini, *First Principles of Interaction Design*
- Steve Krug, *Don't Make Me Think*
- Laws of UX (Jon Yablonski) — Fitts, Hick, Jakob, Miller, Tesler, Doherty, Peak-End, Aesthetic-Usability
- WCAG 2.2 AA — touch target, focus visibility, keyboard parity requirements
- Tyler's uploaded UI/UX articles (form design, error handling, progressive disclosure, F/Z patterns)
- Sams 3PL Solutions non-negotiables from `MASTER-MANUAL.md`

When a general usability principle conflicts with a Sams 3PL non-negotiable, the non-negotiable wins — document the deviation and the reason inline.

---

**End of UI/UX Principles.** Next skill to load for any page build: `04-accessibility-wcag22aa.md` (full WCAG 2.2 AA compliance spec, screen reader behavior, keyboard interaction models).
