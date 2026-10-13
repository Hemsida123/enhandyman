---
name: En Handyman
description: Practical Stockholm craft and service, organized as a clear workshop job board.
colors:
  orange: "#fa9a66"
  orange-hover: "#ffad80"
  ink: "#20211e"
  paper: "#f6f4ee"
  white: "#fffdf8"
  warm: "#ecebe3"
  muted: "#62645b"
  line: "#d4d5ca"
  focus: "#bd501b"
  directory-line: "#c9cabf"
  directory-hover: "#9a491f"
  dark-line: "#55574d"
  dark-muted: "#c7c9be"
  review-surface: "#eeede5"
  review-star: "#94521f"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(76px,7.2vw,96px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-.025em"
  page-title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(60px,7.1vw,96px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(42px,4.5vw,64px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-.025em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lead:
    fontFamily: "Barlow, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "normal"
  quotation:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-.01em"
  source-note:
    fontFamily: "Barlow, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  button: "3px"
  surface: "12px"
  circle: "50%"
spacing:
  page-gutter: "clamp(24px,5vw,80px)"
  page-gutter-mobile: "22px"
  page-gutter-small: "18px"
  section: "112px"
  section-tablet: "80px"
  section-mobile: "66px"
  inset: "38px"
  inset-mobile: "28px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-carbon:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "15px 24px"
  text-link:
    textColor: "{colors.ink}"
    padding: "6px 0"
  service-row:
    textColor: "{colors.ink}"
    padding: "18px 0"
  service-row-hover:
    textColor: "{colors.directory-hover}"
  review-card:
    backgroundColor: "{colors.review-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "25px"
  estimate-panel:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "38px"
  navigation:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  quotation:
    textColor: "{colors.ink}"
    typography: "{typography.quotation}"
    padding: "32px 0 8px"
  faq-row:
    textColor: "{colors.ink}"
    padding: "23px 0"
---

# Design System: En Handyman

## Overview

**Creative North Star: "The organized workshop job board"**

Practical jobs become clear choices. Condensed trade lettering, authentic photographs, the original company badge and an orange signal color make the site feel capable and local. Generous headings alternate with compact service rows, factual pricing and attributed customer evidence.

This is the system extracted from the finished static build: `dist/styles.css`, `dist/fonts.css`, `dist/script.js` and the 18 HTML pages. It follows the authorized code-first direction, with no additional design approval gate. The full-window photographic home hero is a confirmed home-surface constraint; internal pages use quieter headings. Publication is separate from visual approval: the Sites quota prevented registration, so the deliverable is the local, GitHub-ready package. The finish review in `.impeccable/review/finish-review.md` is **SHIP**.

**Key Characteristics:**
- Narrow, confident display type paired with readable body text.
- Orange action and identity surfaces against chalk and carbon.
- Real photographs, original emblems and visible source attribution.
- Ruled service lists, quiet rounded image panels and spacious quotations.
- One finite completion gesture with a static reduced-motion mode.

## Colors

The palette is warm and workmanlike: a peach-orange signal, near-black carbon, soft chalk and restrained neutral dividers. Frontmatter values are normative; sidecar tonal ramps are generated visualization aids, not additional approved UI colors.

### Primary

- **Workshop Orange** (`orange`) carries the original brand, primary enquiry actions, the owner introduction and price-estimate panel.
- **Orange Hover** (`orange-hover`) is the lightened primary-button state.
- **Burnt Orange Focus** (`focus`) makes keyboard focus visible with a three-pixel outline and six-pixel offset.

### Neutral

- **Carbon** (`ink`) supplies body text, dark chapters, the footer and reverse buttons.
- **Chalk** (`paper`) is the page background and reverse text; **Warm White** (`white`) is hero and header foreground.
- **Workshop Wash** (`warm`) distinguishes the service directory, trust strip, contact band and supporting panels.
- **Muted Olive Gray** (`muted`) supports descriptions and source notes; `line` and `directory-line` separate practical rows.
- **Dark Divider** (`dark-line`) and **Dark Muted Text** (`dark-muted`) retain hierarchy on carbon surfaces.
- **Review Wash** (`review-surface`) groups each Google-module excerpt; **Review Bronze** (`review-star`) colors its individual rating. `directory-hover` is the service-row text response.

**The Useful Orange Rule.** Orange marks contact, identity, a selected piece of emphasis or an actionable next step; its large section fields are part of this world.

The proposed timber-brown value in the direction contract did not become a CSS primitive. It is not an approved token; the implemented contextual bronze and brown values have narrower uses.

## Typography

**Display Font:** Barlow Condensed, with sans-serif fallback.  
**Body Font:** Barlow, with sans-serif fallback.

The narrow display family gives large Swedish job descriptions a direct trade-sign character. Body text stays open and conversational. Fonts are self-hosted in `dist/assets` through `dist/fonts.css`, use `font-display: swap`, and include the local OFL license. Barlow has actual 400/500/600/700 files; Barlow Condensed has 500/600/700 files. The quotation rule inherits a nominal 400 weight, for which the browser selects the available family weight; no separate Condensed 400 font is shipped.

### Hierarchy

- **Display:** the two-line home promise; the highlighted line uses orange. Its distinct line-height and clamp are in `display`.
- **Page title:** internal-page introductions. At 860px and below it becomes 76px; at 600px and below it uses `clamp(52px,13vw,70px)`.
- **Headline:** section-level statements. Contextual headings range from 32px in prose to the contact band's 70px cap.
- **Title:** service and process titles. Photo links use 34px on desktop and mobile, with 28px at the intermediate breakpoint.
- **Body:** 68ch maximum for general paragraphs, reducing to 17px at 600px and below. Lead text uses the separate `lead` role; most supporting labels and metadata are 12–17px.
- **Quotation:** large, sentence-case customer excerpts with source attribution underneath. It becomes 29px at 860px and 35px at 600px.
- **Label:** primary-button wording; navigation uses 16px/500 and the compact header button uses 15px/600.
- **Source note:** subordinate evidence and qualification. At 600px and below, source notes become 12px without disappearing.

**The Two Voices Rule.** Barlow Condensed gives hierarchy to jobs and outcomes; Barlow carries explanations, navigation, qualifications and ordinary controls. Preserve meaningful sentence case.

## Layout

The main wrapper is `calc(100% - var(--space)*2)`, capped at 1320px and centered. Its responsive gutter is the `page-gutter` token, becoming 22px at 600px and 18px at 360px. Standard section spacing is 112px on desktop, 80px at 860px, and 66px at 600px. Colored chapters use their own observed 57–96px padding instead of forcing every section onto one interval.

The layout uses ordinary document flow and CSS grids. Photography, references and process steps use three columns; paired introductions use approximately 1:1.15 proportions. Wider split gaps are 100–120px, reduced at 1100px and 860px. At 600px the primary paired and three-column content stacks; the footer retains two compact link columns. The price and FAQ layouts stack sooner, at 860px. Pricing figures use tabular numerals.

Responsive rules exist at **max-width 1100px, 860px, 600px and 360px**, plus an image-position refinement at **min-width 1700px**. The hero's smaller image source is selected separately by HTML at **max-width 640px**. JavaScript closes a collapsed menu when **min-width 861px** becomes true. Do not merge these distinct responsibilities into an invented single breakpoint.

The desktop header is 112px tall with an 82px badge. At 860px it is 88px with a 64px badge. The home header overlays the photograph; interior headers have a carbon background. Without JavaScript, navigation remains visible, wraps and keeps the home header in ordinary flow.

The home hero is `height:100svh`, with a 740px minimum and 1200px maximum. At 860px its minimum becomes 700px; at 600px it uses a 710px minimum and 1000px maximum. Small screens shorter than the minimum scroll naturally. The photograph covers the entire hero at 70% center, becomes 68% center on mobile, and the bottom rail retains all three audience links. Mobile hides each rail subtitle but preserves its label and arrow. The home display becomes 86px at 860px, `clamp(66px,16.5vw,84px)` at 600px and 61px at 360px.

**The Reachable Work Rule.** Responsive adaptation preserves the service entries, direct phone/email actions and customer-source notes; it changes column count and density instead of concealing the task.

## Elevation & Depth

Surfaces are flat and separated by color, whitespace and thin rules. The mobile navigation has the only box shadow (`0 18px 25px #0002`). There are no elevated card stacks or hard offset shadows. The hero uses two transparent dark gradients over the real image to keep foreground copy legible; these are image scrims, not gradient-filled text or simulated material.

The desktop hero scrim is `linear-gradient(90deg,rgba(14,17,14,.88),rgba(14,17,14,.57) 38%,rgba(14,17,14,.06) 78%),linear-gradient(0deg,rgba(14,17,14,.8),transparent 35%)`. At 600px it becomes `linear-gradient(90deg,rgba(14,17,14,.84),rgba(14,17,14,.35)),linear-gradient(0deg,rgba(14,17,14,.88),transparent 68%)`.

**The Flat Workshop Rule.** Use tonal fields and ruled boundaries for ordinary hierarchy; reserve the existing soft shadow for the overlaid mobile menu.

## Shapes

Buttons have restrained three-pixel corners. Photos, review panels, contact panels, the calculator and identity panels share the 12px surface radius. Service rows, quotations and major color fields stay open and square. Circle shapes belong to actual review initials and numbered process steps. General rules are one pixel; reference quotations start with a two-pixel carbon line.

Icons are inline SVG strokes with rounded caps and joins, commonly using a 24px view box and 1.6px stroke. Direction arrows communicate navigation, the telephone icon accompanies a number, plus signs disclose FAQ content, and stars report real individual ratings. The hero check is a separate SVG stroke with a five-pixel rounded stroke, not a font glyph or an invented certification mark.

## Components

### Buttons and text links

Primary buttons pair carbon text with orange, a 58px minimum height, 28px content gap and the frontmatter padding. Hover lightens the background and moves the arrow four pixels; active presses down one pixel. Dark buttons sit inside orange quote/calculator panels with chalk text. The inherited arrow movement remains their hover response; their carbon background stays unchanged. Header actions are a compact 48px minimum height with `10px 18px` padding. Mobile hero actions are at least 55px high.

Text links remain visibly underlined by a one-pixel bottom rule, have a 44px minimum height and a small diagonal arrow response. Keyboard focus uses the shared outline on links, buttons, summaries and the range input. Phone and email controls are real `tel:` and prefilled `mailto:` links; do not present them as a submitted booking or a backend form.

### Navigation

Desktop navigation is a horizontal Barlow row with a one-pixel orange underline appearing on hover or `aria-current`. At 860px, JavaScript enables the menu button and hides the menu until opened; the overlay uses 30px Barlow Condensed links, a bounded scrolling height and a full-width contact action. Escape closes it and restores toggle focus; Tab stays within the open menu controls. Clicking outside, following a link or returning to desktop width also closes it. Keep the visible no-JavaScript fallback.

### Photography and service directory

Photo links show real 8:5 service images, the shared surface radius, a title/arrow row and one useful descriptive line. Hover applies `brightness(.92)` to the image. The service directory is a ruled list with 21px/500 Barlow text and `18px 0` padding, becoming 20px with 17px block padding at 600px. Hover changes text color and shifts the arrow two pixels diagonally without moving the row.

Every shipping raster is an original site asset or a documented conversion/downsample, tracked in `research/asset-provenance.json`. Preserve the official badge and the existing monochrome drill photograph. The photographs illustrate services; they are not verified owner portraits or completed company projects. Keep meaningful alt text, width/height attributes, the eager hero and lazy service imagery. No generated replacement imagery is part of this system.

### Customer evidence

Company-published references are spacious `figure`/`blockquote` compositions with a top rule, named person and role. The three short verbatim excerpts total 22 source words; preserve their attribution and source link. Expanded material on the testimonials page is explicitly labeled as a summary, not a quotation.

The separate Google-module cards show the recorded individual rating, date and exact available text. Preserve Iss M's 5/5 entry and Olja Rankovic's 4/5 entry without inventing text for the latter. Retain the source and 13 October 2026 retrieval date. These are static excerpts from the existing site's Trustindex module, not a live widget, a directly verified Google profile or an aggregate rating. Do not add a rating to the company references or imply independent verification.

### Price estimate and range control

The orange calculator panel uses a 38px inset and a 12px radius; on mobile the inset is 27px. A native range input has a minimum height of 32px, carbon accent, 2–12 hour bounds and one-hour steps. The total uses 54px/600 condensed tabular numerals, reducing to 50px on mobile. A visible example label, tax wording, exclusions and the distinction from a quote stay adjacent to the result. The implemented output includes one service vehicle with the selected hours and formats SEK for `sv-SE`; the initial two-hour result remains visible without JavaScript.

### FAQ

Native `details`/`summary` rows use one-pixel dividers, 19px/500 summary text, `23px 0` padding and a plus SVG that rotates 45 degrees on opening. At 600px, summaries use 18px and 20px block padding. Supporting text is 16px. Preserve native disclosure behavior and visible focus; do not require a custom accordion runtime.

### Motion

The finished easing is `cubic-bezier(.16,1,.3,1)`. The one-time hero image settles from scale 1.025 to 1 over **1.1s**. The check draws from dash offset 94 to 0 over **.65s**, after a **.2s** delay. This actual 1.1s image duration supersedes the directional draft's 900ms. Buttons use .2s background/press transitions, arrow responses use .25–.3s, and the FAQ icon uses .2s. There are no looping reveals or hidden-by-default sections. Reduced motion disables animations and transitions and restores automatic scrolling; the final check and all content remain visible.

## Do's and Don'ts

### Do:

- **Do** preserve the original company badge, source-backed service photographs and their provenance records.
- **Do** keep the home hero photographic and full-window within its documented bounds, with visible contact and audience routes.
- **Do** use condensed headings, open ruled lists and the existing orange/chalk/carbon section rhythm.
- **Do** keep sources, dates, quotation boundaries and individual review ratings visible and accurate.
- **Do** retain native details, range, phone/email links, keyboard focus and the no-JavaScript navigation fallback.
- **Do** honor reduced motion and keep all essential content visible before animation runs.

### Don't:

- **Don't** substitute generic staff portraits, invented project ownership, fake certificates or decorative rating claims.
- **Don't** turn static review excerpts into a claimed live widget, independently verified profile or aggregate score.
- **Don't** convert email enquiry links or a calculator example into a claimed booking confirmation or quotation.
- **Don't** add recurring page-wide reveal motion, gradient text, glyph icons or hard offset card shadows.
- **Don't** promote unshipped direction values or synthesized sidecar color ramps into implementation tokens.

Not canonized or repaired: no material craft defects were identified by the supplied SHIP review. The draft's 80px mobile header, 900ms image settlement and timber-brown token differ from the finished build; this document records 88px, 1.1s and the actual CSS palette instead. No UI files were changed in this documentation pass.
