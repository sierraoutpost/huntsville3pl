---
name: Accessibility — WCAG 2.2 AA Compliance — Sams 3PL Solutions
description: Full WCAG 2.2 AA compliance specification covering perceivable, operable, understandable, and robust criteria, plus assistive-technology behavior, keyboard interaction models, screen reader expectations, and testing procedures. Load this skill whenever building, reviewing, or auditing any page in the Sams 3PL Solutions network.
type: accessibility
depends_on: 01-brand-system.md, 02-visual-design.md, 03-ui-ux-principles.md
version: 1.0
last_updated: 2026-04-11
---

# Accessibility — WCAG 2.2 AA

Accessibility is non-negotiable #26 in the Master Manual. Every site in the Sams 3PL Solutions network must meet **WCAG 2.2 Level AA** — not as a late-stage patch, not as a separate "accessible version," but as the default condition of every component, every page, every build. If it doesn't work for a keyboard user, a screen reader user, or a user with low vision, it doesn't ship.

This isn't a compliance checklist to run once and forget. It's a design and engineering discipline that runs through every decision from wireframe to deployment.

---

## 1. Why This Matters Beyond Compliance

A logistics company serves everyone. The warehouse manager filling out a Connect form might have low vision. The operations VP reviewing our services page might navigate by keyboard because of a repetitive-strain injury. The procurement analyst comparing 3PL providers might be using a screen reader. These are real people in our real audience — not edge cases, not "nice-to-haves."

Beyond ethics, accessibility is also:
- A legal requirement under the ADA (Americans with Disabilities Act) for commercial websites in the U.S.
- An SEO advantage — accessible, semantic HTML is exactly what search engines reward.
- A quality signal — sites that pass WCAG audits invariably have cleaner code, better structure, and fewer bugs.

---

## 2. The Four Principles (POUR)

WCAG 2.2 organizes requirements under four principles. Every criterion in this file maps to one of them.

### 2.1 Perceivable

Information and UI components must be presentable in ways users can perceive — through sight, hearing, or touch.

### 2.2 Operable

UI components and navigation must be operable — by mouse, keyboard, touch, voice, switch device, or any input method.

### 2.3 Understandable

Information and UI operation must be understandable — clear language, predictable behavior, helpful error guidance.

### 2.4 Robust

Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.

---

## 3. Perceivable — What Every Page Must Do

### 3.1 Text alternatives (SC 1.1.1 — Level A)

Every non-text content element must have a text alternative that serves the equivalent purpose.

**Images:**
- Every `<img>` has an `alt` attribute. Always.
- **Informative images** (photography, diagrams, illustrations): alt text describes *what the image communicates*, not what it looks like. "Loading dock at the Detroit facility with three trucks backed in" — not "image of trucks" and not "IMG_4823.jpg."
- **Decorative images** (visual flourishes, background textures, spacer graphics): `alt=""` (empty alt). The image is invisible to assistive tech.
- **Complex images** (infographics, charts, data visualizations): short `alt` summarizing the conclusion + a longer `aria-describedby` or adjacent text description providing the full data.
- **Hero photographs:** always informative. The hero is the emotional peak of the page — the alt text should carry that weight. "Two warehouse workers coordinating a pallet transfer at dawn, Toledo skyline visible through the open dock door."

**Icons:**
- Icons that convey meaning (a phone icon next to a number, a checkmark in a success message) need `aria-label` or visually hidden text.
- Icons that are purely decorative (an arrow inside a button that already has text) get `aria-hidden="true"`.

**SVGs:**
- Inline SVGs that convey meaning: `role="img"` + `<title>` element + `aria-labelledby` pointing to the title.
- Inline SVGs that are decorative: `aria-hidden="true"` + `focusable="false"`.

### 3.2 Time-based media (SC 1.2.x — Level A/AA)

If any Sams 3PL site uses video or audio:
- **Pre-recorded video** must have captions (synchronized text alternatives for dialogue and meaningful sound).
- **Pre-recorded audio-only** (podcasts, if we ever do them) must have a text transcript.
- **Pre-recorded video** should also provide audio description for visual-only information when the default audio track doesn't cover it. (Level AA requires this for pre-recorded content.)
- **Live video** is unlikely for us, but if it happens: real-time captions required.

Most Sams 3PL sites will not have significant media. If we do add a facility walkthrough video or a testimonial clip, these rules apply without exception.

### 3.3 Adaptable content (SC 1.3.x — Level A/AA)

Content structure must be conveyed through proper semantic HTML, not visual styling alone.

**Heading hierarchy:**
- One `<h1>` per page. It matches the page's primary topic.
- Headings follow a strict nesting order: `<h1>` → `<h2>` → `<h3>`. Never skip a level (no `<h1>` → `<h3>`). Screen reader users navigate by heading level — skipped levels break their mental model.
- Headings describe content, not styling. Don't use `<h3>` because it "looks right" — use the correct semantic level and style it with CSS.

**Lists:**
- Ordered content uses `<ol>`. Unordered groups use `<ul>`. Description lists use `<dl>`. Never fake a list with line breaks and dashes.

**Tables:**
- Data tables use `<th>` for headers with `scope="col"` or `scope="row"`.
- Tables have a `<caption>` or `aria-label` describing the table's purpose.
- Layout tables are banned — use CSS Grid or Flexbox.

**Landmark regions:**
Every page must include:
- `<header>` (site header, including nav)
- `<nav>` (primary navigation, with `aria-label="Primary"` if multiple navs exist)
- `<main>` (single main content area)
- `<footer>` (site footer)
- `<aside>` where applicable (sidebar content)
- `<section>` for major content divisions (each with an `aria-label` or heading)

Screen reader users use landmark navigation to jump between regions. Without landmarks, they're scrolling line-by-line through the entire page.

**Meaningful sequence (SC 1.3.2):**
The DOM order must match the visual reading order. If CSS repositions elements visually (e.g., with `order` in Flexbox/Grid), the screen reader still reads them in DOM order. Ensure these match, or the reading experience is nonsensical.

**Input purpose (SC 1.3.5 — Level AA):**
Form fields that collect personal information must use `autocomplete` attributes:
```html
<input type="text" autocomplete="given-name" name="firstName">
<input type="text" autocomplete="family-name" name="lastName">
<input type="email" autocomplete="email" name="email">
<input type="tel" autocomplete="tel" name="phone">
<input type="text" autocomplete="organization" name="company">
```
This enables browser autofill and assistive technology to help users fill forms faster.

### 3.4 Distinguishable content (SC 1.4.x — Level AA)

**Color contrast (SC 1.4.3 / 1.4.6):**
- Normal text: 4.5:1 minimum.
- Large text (18pt / 24px, or 14pt / ~18.5px bold): 3:1 minimum.
- UI components and graphical objects: 3:1 minimum.
- The brand palette pairings in `02-visual-design.md` §2.3 all meet or exceed these ratios. Do not introduce new pairings without checking.

**Color not sole indicator (SC 1.4.1):**
- Error states are never indicated by color alone. Use color + icon + text ("⚠ Please enter a valid email").
- Required fields are never indicated by red label alone. Use a red asterisk + the word "required" in the label or `aria-required="true"`.
- Link text within paragraphs must be distinguishable from surrounding text by more than just color — underline links, or underline on focus/hover at minimum.

**Resize text (SC 1.4.4):**
- Content must remain usable when text is resized up to 200% without loss of content or functionality. This means no fixed-height containers that clip text, no `overflow: hidden` on text blocks, no pixel-locked layouts that break on zoom.

**Text spacing (SC 1.4.12 — Level AA):**
- Content must remain usable when a user overrides:
  - Line height to 1.5× font size
  - Paragraph spacing to 2× font size
  - Letter spacing to 0.12× font size
  - Word spacing to 0.16× font size
- This effectively means: do not use fixed-height containers for text. Let text flow.

**Reflow (SC 1.4.10 — Level AA):**
- At 320 CSS pixels wide (equivalent to 400% zoom on a 1280px viewport), all content must be available without horizontal scrolling. This is another way of saying: responsive design is not optional, and it must work to extremely narrow widths.

**Non-text contrast (SC 1.4.11 — Level AA):**
- Active UI components (buttons, form inputs, toggles) must have at least 3:1 contrast against adjacent colors.
- Graphical objects needed to understand the content (icons, chart elements, dividers) must have at least 3:1 contrast.

**Content on hover or focus (SC 1.4.13 — Level AA):**
When additional content appears on hover or focus (tooltips, dropdown menus):
- The new content is **dismissible** (Escape closes it without moving focus elsewhere).
- The new content is **hoverable** (the user can move the pointer over the tooltip/dropdown without it disappearing).
- The new content is **persistent** (it remains visible until the user dismisses it, moves focus, or the hover ends).

---

## 4. Operable — Keyboard, Touch, and Input

### 4.1 Keyboard accessible (SC 2.1.x)

**All functionality available from keyboard (SC 2.1.1 — Level A):**
Every interactive element must be reachable and activatable by keyboard alone. No exceptions. This includes:
- All links and buttons (Tab to focus, Enter/Space to activate)
- All form inputs (Tab between fields, Space for checkboxes, arrow keys for radio groups and selects)
- All navigation menus (Tab into the menu, arrow keys between items, Enter to select, Escape to close)
- All modals and overlays (Tab into content, Tab cycles within the modal, Escape to close, focus returns to trigger on close)
- All accordion/disclosure widgets (Enter/Space to toggle, aria-expanded to announce state)
- All carousels (arrow keys between slides — though we don't use autoplay carousels, manual slideshows are allowed)

**No keyboard trap (SC 2.1.2 — Level A):**
A keyboard user must never get stuck in a component with no way to Tab or Escape out. Test every interactive widget by tabbing into it AND tabbing/escaping out of it.

**Focus visible (SC 2.4.7 — Level AA, enhanced by SC 2.4.13 in 2.2):**
- Every focusable element shows a visible focus indicator. Our standard: 3px solid Petrol Blue outline with 2px offset, visible on all backgrounds.
- WCAG 2.2 adds SC 2.4.13 (Focus Appearance): the focus indicator must have an area of at least a 2px thick perimeter around the component and 3:1 contrast between focused and unfocused states. Our petrol blue ring exceeds this.
- **Never use `outline: none` without providing an equivalent or better custom focus style.** `outline: none` with nothing replacing it is the single most common accessibility violation on the web.

**Focus order (SC 2.4.3 — Level A):**
Tab order must follow a logical, meaningful sequence that matches the visual layout:
1. Skip-to-content link (first focusable element)
2. Logo (links to home)
3. Navigation items, left to right
4. Connect CTA in the header
5. Main content, top to bottom, left to right
6. Footer links

If CSS visually reorders elements, `tabindex` may be needed to correct the focus order — but prefer fixing the DOM order instead.

### 4.2 Enough time (SC 2.2.x)

**Timing adjustable (SC 2.2.1 — Level A):**
If any timed function exists (session timeouts, auto-advancing content), the user must be able to turn it off, adjust it, or extend it. In practice, Sams 3PL sites shouldn't have timed content — forms don't expire, content doesn't auto-advance.

**Pause, stop, hide (SC 2.2.2 — Level A):**
Any moving, blinking, or scrolling content that starts automatically and lasts more than 5 seconds must have a mechanism to pause, stop, or hide it. This applies to:
- Background video (if we ever use one — should be rare)
- Animated stat counters (banned per `02-visual-design.md`)
- Any scroll-triggered animation that loops

### 4.3 Seizures and physical reactions (SC 2.3.x)

**Three flashes or below (SC 2.3.1 — Level A):**
No content may flash more than three times per second. This is a hard safety requirement — photosensitive seizures are a real, dangerous risk. Our motion guidelines in `02-visual-design.md` §8 already prevent any fast-flash patterns, but test every animation.

### 4.4 Navigable (SC 2.4.x)

**Skip navigation (SC 2.4.1 — Level A):**
```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header><!-- nav --></header>
  <main id="main-content"><!-- page content --></main>
  <footer><!-- footer --></footer>
</body>
```
The skip link is visually hidden until focused, then appears at the top of the viewport:
```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  padding: 0.75rem 1.5rem;
  background: var(--color-brick-red);
  color: var(--color-off-white);
  font-weight: 600;
  border-radius: 2px;
  text-decoration: none;
}
.skip-link:focus {
  top: 1rem;
}
```

**Page titled (SC 2.4.2 — Level A):**
Every page has a unique, descriptive `<title>`:
```
Warehousing Services — Detroit 3PL | Sams 3PL Solutions
```
Pattern: `[Page] — [City] 3PL | Sams 3PL Solutions`

**Link purpose (SC 2.4.4 — Level A):**
- Every link's purpose is clear from its text alone, or from its text + immediate context. "Read more" alone is a failure. "Read more about our warehousing services" is correct. Alternatively, `aria-label` can supplement.
- Never use "click here." It means nothing to a screen reader user hearing a list of all page links.

**Multiple ways (SC 2.4.5 — Level AA):**
Users must have at least two ways to find any page: navigation menu + sitemap, or navigation menu + search, or navigation menu + breadcrumbs. Our standard: primary nav + footer sitemap + breadcrumbs on interior pages.

**Headings and labels (SC 2.4.6 — Level AA):**
Headings describe the content they introduce. Labels describe the purpose of the input they belong to. Neither should be vague or generic.

**Focus not obscured (SC 2.4.11 — Level AA, new in WCAG 2.2):**
When an element receives keyboard focus, it must not be entirely hidden behind other content (sticky headers, cookie banners, modal backdrops). Our sticky header must account for this — ensure that focused elements below the sticky header are scrolled into clear view and not clipped behind it.

### 4.5 Input modalities (SC 2.5.x)

**Target size minimum (SC 2.5.8 — Level AA, new in WCAG 2.2):**
Interactive targets must be at least 24×24 CSS pixels. Our standard (from `03-ui-ux-principles.md`) is 48×48 minimum for primary targets, which far exceeds this. But check inline links, icon buttons, and close buttons — these are the common violators.

**Dragging movements (SC 2.5.7 — Level AA, new in WCAG 2.2):**
Any action that uses a dragging movement (drag-to-reorder, sliders) must also have a single-pointer alternative (tap, click, button). Sams 3PL sites are unlikely to have drag interactions, but if a future feature requires one, provide the alternative.

**Consistent help (SC 3.2.6 — Level A, new in WCAG 2.2):**
If a help mechanism exists (phone number, Connect link, FAQ link), it must appear in the same relative location on every page. Our phone number in the header and Connect CTA in the header/footer satisfy this — just ensure they don't move between pages.

**Redundant entry (SC 3.3.7 — Level A, new in WCAG 2.2):**
If the user has already entered information in a process (multi-step form), that information must be either auto-populated or available for selection in subsequent steps. Never ask the user to re-enter their email or phone number on step 3 if they entered it on step 1.

---

## 5. Understandable — Language, Predictability, and Help

### 5.1 Readable (SC 3.1.x)

**Language of page (SC 3.1.1 — Level A):**
```html
<html lang="en">
```
Every page declares its language. If a section uses a different language (e.g., a Spanish translation), it gets `lang="es"` on its container.

**Language of parts (SC 3.1.2 — Level AA):**
Foreign-language phrases within English content get their own `lang` attribute. Rare for Sams 3PL, but if a city page references a local cultural term, mark it.

### 5.2 Predictable (SC 3.2.x)

**On focus (SC 3.2.1):** Receiving focus never triggers a change of context (no navigation on focus, no form submission on focus, no modal opening on focus).

**On input (SC 3.2.2):** Changing a form input value never triggers an unexpected change of context. Selecting a dropdown option doesn't auto-navigate — the user submits when ready.

**Consistent navigation (SC 3.2.3 — Level AA):** Navigation appears in the same order on every page. The header layout is identical across the site. The footer layout is identical across the site.

**Consistent identification (SC 3.2.4 — Level AA):** Components with the same function have the same label. The "Connect" CTA is always labeled "Connect" — not "Contact" on one page and "Get in Touch" on another.

### 5.3 Input assistance (SC 3.3.x)

**Error identification (SC 3.3.1 — Level A):**
When a form input has an error, the error is:
1. Described in text (not by color alone).
2. Associated with its field via `aria-describedby`.
3. Announced to screen readers via `aria-live="polite"` or by moving focus to the error.

**Labels or instructions (SC 3.3.2 — Level A):**
Every form field has a visible `<label>` associated via `for`/`id`. Placeholder text is NOT a substitute for a label — it disappears on input and fails for recall and assistive tech.

**Error suggestion (SC 3.3.3 — Level AA):**
When an error is detected and suggestions are known, the system provides them:
- "Please enter a valid email address, such as name@example.com."
- "Phone number must be a U.S. number with 10 digits."

**Error prevention for legal/financial/data (SC 3.3.4 — Level AA):**
For submissions that create legal or financial commitments (rare for us, but applies if we ever build a contract-signing or payment flow):
- Submissions are reversible, OR
- Data is checked and confirmed before final submission, OR
- The user can review and correct before submitting.

Our Connect form isn't legally binding, but we apply the same "review before submit" principle as good UX anyway.

---

## 6. Robust — Parsing and Compatibility

### 6.1 Valid HTML (SC 4.1.1 — Level A, deprecated in WCAG 2.2 but still good practice)

- HTML is well-formed and validates without critical errors.
- No duplicate `id` attributes.
- All open tags are closed.
- Elements are nested correctly.

### 6.2 Name, role, value (SC 4.1.2 — Level A)

Every UI component must expose:
- **Name:** what it is (button label, input label, link text).
- **Role:** what kind of thing it is (button, link, checkbox, dialog). Use native HTML elements to get free roles; only add ARIA roles when building custom widgets.
- **Value/State:** its current condition (checked, expanded, selected, disabled). Use `aria-checked`, `aria-expanded`, `aria-selected`, `aria-disabled` — or native HTML equivalents where they exist.

### 6.3 Status messages (SC 4.1.3 — Level AA)

Status messages that don't receive focus must be announced to assistive tech via live regions:
```html
<div role="status" aria-live="polite">Form submitted successfully.</div>
<div role="alert" aria-live="assertive">Please fix 2 errors before submitting.</div>
```
- `polite` for non-urgent status updates (success messages, "3 results found").
- `assertive` for urgent alerts (errors, warnings).

---

## 7. ARIA — When to Use It (and When Not To)

### 7.1 The first rule of ARIA

**Don't use ARIA if a native HTML element does the job.** A `<button>` is better than `<div role="button" tabindex="0">`. A `<nav>` is better than `<div role="navigation">`. A `<label for="email">` is better than `aria-label` on the input. Native elements are keyboard-accessible, focus-manageable, and screen-reader-friendly by default. ARIA is a repair tool for cases where native HTML falls short.

### 7.2 When ARIA is needed

- **Custom widgets** not available as native HTML: tab panels, accordions, comboboxes, dialogs, tree views.
- **Live regions** for dynamic content updates: `aria-live`, `role="status"`, `role="alert"`.
- **Relationships** between elements: `aria-describedby`, `aria-labelledby`, `aria-controls`, `aria-owns`.
- **States** for custom controls: `aria-expanded`, `aria-selected`, `aria-checked`, `aria-pressed`.

### 7.3 Common ARIA patterns for Sams 3PL components

**Mobile menu (dialog pattern):**
```html
<div role="dialog" aria-modal="true" aria-label="Navigation menu">
  <button aria-label="Close menu">×</button>
  <nav aria-label="Primary">
    <ul><!-- menu items --></ul>
  </nav>
</div>
```

**Accordion (disclosure pattern):**
```html
<h3>
  <button aria-expanded="false" aria-controls="panel-1">
    What services do you offer?
  </button>
</h3>
<div id="panel-1" role="region" aria-labelledby="heading-1" hidden>
  <p>Answer content...</p>
</div>
```

**Toast/notification:**
```html
<div role="status" aria-live="polite" class="toast">
  Message sent. We'll be in touch within 4 business hours.
</div>
```

---

## 8. Reduced Motion and User Preferences

### 8.1 prefers-reduced-motion

All non-essential animation is disabled when the user has requested reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

"Non-essential" means everything except:
- Focus ring appearance (this is functional feedback, not decoration).
- Immediate state changes (checkbox checked, button pressed).
- Opacity transitions under 100ms (these read as instant and don't cause disorientation).

The sticky-heading-with-content-scrolling-over-it pattern from our inspiration (Odd Ritual's Brand Pillars section) should degrade gracefully to a simple static heading under reduced motion — remove the `position: sticky` and let the heading scroll normally with the content.

### 8.2 prefers-color-scheme

We do not currently ship a dark mode. If dark mode is added in the future:
- It must meet all the same contrast ratios as light mode.
- It should be toggleable by the user independently of the OS preference.
- The toggle state must be announced to screen readers ("Dark mode enabled").

### 8.3 prefers-contrast

If a user requests more contrast via `prefers-contrast: more`:
- Borders on inputs and cards should increase from 1.5px to 2px and shift from Fog to Charcoal.
- Text contrast should be maximized (use Charcoal on Off-White for everything, dropping Graphite for metadata).
- Focus rings should thicken to 4px.

---

## 9. Screen Reader Testing Protocol

### 9.1 Required screen reader / browser pairings

Test with at least two of the following to cover the most common assistive-tech stacks:

| Screen Reader | Browser | OS |
|---|---|---|
| NVDA | Firefox | Windows |
| JAWS | Chrome or Edge | Windows |
| VoiceOver | Safari | macOS / iOS |
| TalkBack | Chrome | Android |

### 9.2 What to test

For each page, verify:

1. **Heading navigation.** Use the screen reader's heading shortcut (H key in NVDA/JAWS) to walk through all headings. Headings must appear in correct order (h1 → h2 → h3), describe their content, and cover all major sections.

2. **Landmark navigation.** Use the screen reader's landmark shortcut (D in NVDA, R in JAWS) to jump between landmarks. Every page must have: banner (header), navigation, main, contentinfo (footer).

3. **Link list.** Pull up the screen reader's links list. Every link should make sense out of context. No "Read more" or "Click here" without additional context.

4. **Form interaction.** Tab through every form. Each input should announce its label, type, required state, and any help text. Errors should announce on blur. The submit button should announce its label and, when in loading state, its disabled state.

5. **Image alt text.** Navigate to each image and verify the alt text is read. Decorative images should be silent.

6. **Dynamic content.** Submit the form and verify the success message is announced via the live region. Trigger an error and verify the error summary is announced.

7. **Modal interaction.** Open the mobile menu. Verify focus is trapped inside. Verify Escape closes it. Verify focus returns to the trigger button.

---

## 10. Automated Testing Tools

Automated tools catch roughly 30–40% of accessibility issues. They're a first pass, not a final answer. Always follow up with manual keyboard/screen-reader testing.

### 10.1 Required tools

- **axe DevTools** (browser extension): Run on every page. Zero critical or serious violations before shipping.
- **Lighthouse Accessibility audit** (Chrome DevTools): Score must be 95+ (100 is the target).
- **WAVE** (WebAIM browser extension): Run as a visual complement to axe — WAVE highlights issues spatially on the page.

### 10.2 Integration testing

- Include `axe-core` in the CI pipeline. Any new axe violation fails the build.
- Run Lighthouse CI on every deploy preview. Accessibility score below 95 fails the check.

### 10.3 Manual testing checklist

After automated tools pass, manually verify:

1. Tab through the entire page start-to-finish. Every interactive element is reachable. Focus never gets trapped. Focus order is logical.
2. Use the page at 200% zoom. No content is clipped or hidden. No horizontal scrollbar appears.
3. Use the page at 320px viewport width. All content is accessible. No overlapping text.
4. Navigate the page with a screen reader (§9.2 protocol).
5. View the page with Windows High Contrast Mode enabled. All text is readable, all interactive elements are identifiable, focus rings are visible.
6. Disable all CSS. Read the page in source order. The content should still make sense and follow a logical narrative.

---

## 11. Accessibility Statement

Every Sams 3PL site publishes an accessibility statement at `/accessibility/`. This is both a legal best practice and a trust signal. The statement must include:

1. **Commitment:** "Sams 3PL Solutions is committed to ensuring digital accessibility for people with disabilities."
2. **Standard:** "We aim to conform to WCAG 2.2 Level AA."
3. **Scope:** "This statement applies to [city]3pl.com."
4. **Feedback:** "If you encounter an accessibility barrier, please contact us at info@sams3plsolutions.com or +1 (419) 745-9492. We take accessibility feedback seriously and will respond within 2 business days."
5. **Date:** "This statement was last updated on [date]."

The statement is a living page — update it after every significant site revision.

---

## 12. Common Violations We Will Not Ship

These are the most frequently found WCAG failures across the web. We catch them before they happen:

1. **Missing alt text on images.** Every image gets evaluated: informative or decorative. No blank `alt` on photos that carry meaning.
2. **Insufficient color contrast.** Use the palette pairings from `02-visual-design.md` §2.3. Don't invent new pairings without checking.
3. **Missing form labels.** Every `<input>` has a `<label>`. Placeholder is not a label.
4. **Missing document language.** `<html lang="en">` on every page.
5. **Empty links or buttons.** Icon-only buttons without `aria-label`. Links wrapping images without alt text.
6. **Missing skip navigation.** Every page gets the skip link per §4.4.
7. **Focus not visible.** Never suppress the default focus ring without providing a better one.
8. **Keyboard inaccessible interactive elements.** Never use `<div>` or `<span>` as a clickable element. Use `<button>` or `<a>`.
9. **Auto-playing media.** Never auto-play video or audio with sound. Background video (muted, decorative) requires a visible pause control.
10. **Missing heading structure.** Every page has an h1. Headings never skip levels.
11. **Focus trapped in modals improperly.** Mobile menu and any overlay must trap focus while open AND release it when closed.
12. **Low-contrast placeholder text.** Placeholder text in inputs must meet 4.5:1 against the input background. Most default browser placeholder styles fail this — override them.

---

## 13. Self-Check Before Shipping

Run this accessibility-specific checklist after passing the visual (02) and UX (03) checklists:

1. axe DevTools reports zero critical or serious violations.
2. Lighthouse Accessibility score is 95+.
3. Tab through the entire page: every interactive element is reachable, focus is visible, order is logical.
4. Screen reader reads the page in a sensible narrative order.
5. Heading hierarchy is correct (h1 → h2 → h3, no skips).
6. All images have appropriate alt text (informative or empty for decorative).
7. All form inputs have visible labels and `autocomplete` attributes.
8. Color is never the sole indicator of state or meaning.
9. Page is usable at 200% zoom and 320px width.
10. `prefers-reduced-motion` is honored for all non-essential animation.
11. Skip-to-content link appears on focus as the first element.
12. Mobile menu traps focus and closes on Escape.
13. Accessibility statement is published at `/accessibility/`.
14. All status messages use `aria-live` regions.
15. No keyboard traps exist anywhere on the page.

A page that fails any of these fifteen items does not ship.

---

## 14. Sources

- [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/) — the authoritative standard
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) — the W3C's own explainers for each success criterion
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) — pattern library for accessible widgets
- [WebAIM Million](https://webaim.org/projects/million/) — annual survey of the most common accessibility failures
- [axe-core rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) — what our automated testing catches
- Tyler's non-negotiable #26 from `MASTER-MANUAL.md`
- WCAG 2.2 new criteria: SC 2.4.11 (Focus Not Obscured), SC 2.4.13 (Focus Appearance), SC 2.5.7 (Dragging Movements), SC 2.5.8 (Target Size Minimum), SC 3.2.6 (Consistent Help), SC 3.3.7 (Redundant Entry)

---

**End of Accessibility — WCAG 2.2 AA.** Next skill to load for any page build: `05-seo-aeo-geo-llmo.md` (search optimization, generative engine optimization, and AI discoverability).
