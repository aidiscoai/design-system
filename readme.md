# AiDisco Design System

> **Be discovered. Get cited by AI.**
> Signal in the noise — clarity amidst chaos, light amidst darkness.

AiDisco is the leading **AI Discoverability & Citation Optimisation** agency, built to help businesses become *the answer* in AI search. As buyers shift from Google to ChatGPT, Gemini, Claude, and Perplexity, traditional SEO is no longer enough. AiDisco ensures a brand is **selected, cited, and recommended** by AI systems through a proprietary three-pillar framework: **Schema Injection, Prompt Architecture, and Authority Synthesis**. The category is also known as AEO (Answer Engine Optimisation), GEO, or AI SEO.

This design system encodes that brand into reusable tokens, components, and full-screen UI kits so any team can produce on-brand interfaces, decks, and marketing artifacts.

---

## Source materials

Nothing here assumes you can open these — they're recorded for provenance and deeper exploration:

- **`uploads/AiDisco Design Visual Study.pdf`** — the brand's own "Design Philosophy: Signal in the Noise" study. Primary source for the palette, type pairing, and tone rules below.
- **GitHub — [`aidiscoai/aeo-framework`](https://github.com/aidiscoai/aeo-framework)** — the public AEO framework: README, `SCHEMA_ALIGNMENT.md`, `PROMPT_ARCHITECTURE.md`, `CONTRIBUTING.md`, and a "Be Discovered" pitch deck PDF. Explore it for the product narrative, the three pillars, and copy voice. *Recommended reading before building product/marketing surfaces.*
- **Live site — aidisco.ai** — source of the terminal / "LIVE_QUERY_ANALYSIS" data-readout motif and the MATCH / IGNORE narrative device.
- **Approved logo lockups** — supplied by the user, stored in `assets/logos/` (primary, secondary, monochrome, icon-only, and website variants for dark & light backgrounds).

---

## CONTENT FUNDAMENTALS — how AiDisco writes

**Voice:** confident, witty, human-first, and unmistakably AI-native. The brand is a B2B authority that refuses to be lifeless. Energy comes from *conviction and contrast*, never from hype punctuation.

- **Person:** Speak to the reader as **"you" / "your brand."** Use **"we"** for AiDisco. Never "users."
- **Casing:** Sentence case for headlines and UI. **UPPERCASE is reserved** for monospace technical labels and eyebrows (`LIVE_QUERY_ANALYSIS`, `AUDIT_COMPLETE`, `BE DISCOVERED.`) — it signals the "machine readout," not shouting.
- **Length:** Short, punchy, declarative. Headlines are often two to four words. Fragments are welcome.
- **No emoji.** No exclamation marks. Confidence carries the energy; punctuation doesn't.
- **British spelling** in brand copy: *optimise, discoverability, recognised.*
- **Signature vocabulary:** "Be the answer." · "the Golden Answer" · "the Citation Gap" · "digital ghost" · "AI doesn't search. It selects." · "From ranked to cited." · "If you're not cited, you're invisible." · "Day Zero."
- **Contrast as a device:** before/after, ranked vs cited, MATCH vs IGNORE, visible vs invisible. The whole brand is built on a binary: the AI either chooses you or it doesn't.

*Example headline + subhead:*
> **Be the answer. Not a digital ghost.**
> AI doesn't search. It selects. We make sure ChatGPT, Gemini, and Perplexity cite, recommend, and choose you.

---

## VISUAL FOUNDATIONS

The governing idea from the brand study: **"Disco ≠ use every color. A dark stage + controlled bursts of light."** Nothing cluttered, but nothing lifeless. Motion is implied even in static layouts.

### Color
- **Dark by default.** The primary surface is **Midnight Black `#0A0A0F`**; cards sit on **Deep Indigo `#121826`**, elevated surfaces on **Deep Slate `#1F2937`**. This is the "nightclub / future-tech" stage.
- **Accents are rare and deliberate.** **Electric Violet `#7B5CFF`** is the primary brand anchor (CTAs, key UI). **Neon Cyan `#00E5FF`** is secondary — links, live data, highlights. **Laser Magenta `#FF2DA6`** is the *expression* accent: campaigns, hero callouts, special moments **only**.
- **Neutrals:** Soft White `#F5F7FA` for type, Cool Gray `#9CA3AF` for secondary text.
- **Signature gradient:** Violet → Cyan (`--gradient-signal`), used on borders, indicators, the score gauge, and text fills — never as a full heavy background wash.
- **Light theme ("AI Clarity")** exists via `.theme-light`: neons step *down* in saturation (violet/cyan deepen for AA contrast) and shift from fills to text/UI accents. The study explicitly warns: **avoid harsh neon on white.**

### Type
- **Display — Space Grotesk** (600–700): hero text, section headers, key messaging. Tight tracking (`-0.02 to -0.03em`), confident oversized sizing. *This is where the disco energy lives.*
- **Body — Inter** (400–600): paragraphs, UI, navigation. Line-height 1.6. Clean, contemporary, legible.
- **Mono — JetBrains Mono:** the terminal / data-readout motif — tags, scores, technical eyebrows. Uppercase, wide tracking (`0.08–0.14em`).
- Both brand typefaces are loaded from **Google Fonts** (see *Caveats*).

### Backgrounds, motifs & texture
- Backgrounds are **solid dark or subtle radial "stage glow"** (`--gradient-stage`: a faint indigo halo at the top fading to black). No busy patterns, no photographic hero washes.
- The **terminal / data-readout motif** is core: monospace panels labelled `LIVE_QUERY_ANALYSIS`, pulsing status dots, `QUERY_INPUT`, `PROCESSING_SELECTION...`.
- The **MATCH / IGNORE** device visualises whether an AI engine selects a brand — green positive vs red negative, used in before/after pairs.

### Depth, glow & shadows
- **Glow is the signature effect** — soft neon edges (`--glow-violet`, `--glow-cyan`, `--glow-magenta`) for "controlled bursts of light." Use sparingly, on featured elements.
- On the dark stage, elevation shadows are **deep and soft** (`--shadow-md`, `--shadow-lg`), not crisp.
- **No heavy/overused gradients.** Transitions are subtle (violet → cyan), and glow > drop-shadow for emphasis.

### Cards, borders & radii
- Cards: Deep Indigo fill, **1px hairline border** at ~10% white, radius **16px** (`--radius-lg`), deep soft shadow. Featured cards add a neon glow edge.
- Radii are **measured, not pill-soft** — 4 / 8 / 12 / 16 / 24px scale, plus a true pill for badges and toggles.
- Borders are low-contrast (rgba white at 10–18%); brand borders use violet at ~45%.

### Motion, hover & press
- **Easing:** `--ease-out` `cubic-bezier(0.22,1,0.36,1)`; durations 120 / 200 / 360ms.
- **Hover:** cards lift `translateY(-3px)` + deepen shadow; buttons brighten/glow. No color inversion.
- **Press:** subtle `scale(0.97)` — a quick, confident tap, no bounce.
- **Reveal:** the AI Discoverability Score animates 0→value with a cubic ease; pillar bars fill left-to-right.
- **Avoid** infinite decorative loops on content; reserve subtle pulses for "live" status indicators.

### Transparency & blur
- Glass/blur (`--blur-panel` 16px) is used on the **sticky nav** and floating panels over the dark stage — `rgba(10,10,15,0.72)` + backdrop blur. Used purposefully, not everywhere.

### Spacing & layout
- **8px base grid** (4 → 128px scale). Containers cap at ~1280–1320px and center.
- Generous vertical rhythm (`--section-pad-y` 96px between major sections). Layouts are structured and breathable — "nothing cluttered."

### Imagery vibe
- Cool, electric, future-tech. The hero mark is a **gradient mirror-ball** (cyan → blue → violet → magenta) — disco heritage rendered as a precise 3D object, not kitsch. When using photography, lean cool-toned and high-contrast.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) — clean, consistent 2px-stroke line icons that match the precise, modern, future-tech feel. Loaded from CDN (`unpkg.com/lucide`) in cards and UI kits; mount with `data-lucide="<name>"` then `lucide.createIcons()`. There is no proprietary icon font in the source material, so Lucide is the chosen standard — **flag for the user if an official set exists.**
- **Stroke style:** line icons only, ~2px stroke, `currentColor` so they inherit text/accent color. Avoid filled or duotone icon styles.
- **Glyphs as status:** the brand uses simple check (`✓`) and cross (`✕`) glyphs inside colored circles for the MATCH / IGNORE verdict — see `QueryVerdict`. Pulsing dots (`●●●`) signal "live."
- **No emoji** anywhere — it breaks the B2B authority tone.
- **Logos** live in `assets/logos/` as PNGs with transparency. Tight-cropped variants (`*-cropped.png`) are provided for nav/favicon use. Pick the lockup that matches the background: `*-dark` for dark surfaces, `*-light` for light, `*-mono-*` for single-color contexts, `aidisco-icon-cropped.png` for the standalone mark.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — CSS custom properties (all `@import`ed by `styles.css`)
- `fonts.css` (webfont loading) · `colors.css` (base, accent, neutral, semantic, light theme) · `typography.css` (families, scale, tracking) · `spacing.css` (8px grid, containers) · `effects.css` (radii, shadows, glows, blur, motion).

**`components/core/`** — primitives (namespace `AiDiscoDesignSystem_12e451`)
- `Button` · `IconButton` · `Badge` · `Tag` · `Card` · `Input` · `Switch` · `Tabs` · `Avatar`

**`components/brand/`** — signature brand components
- `ScoreGauge` (the AI Discoverability Score ring) · `QueryVerdict` (MATCH / IGNORE card)

**`guidelines/`** — foundation specimen cards (Design System tab): colors, type, spacing, radii, glows, logos, voice.

**`ui_kits/website/`** — interactive marketing-site recreation
- `index.html` (orchestrator: Hero → live Audit → Pricing) · `primitives.jsx` · `SiteChrome.jsx` · `Hero.jsx` · `AuditDashboard.jsx` · `Pricing.jsx`. See its own `README.md`.

**`assets/logos/`** — approved logo lockups (primary/secondary/mono/icon, dark & light, plus tight-cropped variants).

---

## Caveats & how to extend

- **Fonts** are the *actual* brand typefaces (Space Grotesk + Inter) but loaded from the **Google Fonts CDN** rather than self-hosted. To self-host, drop woff2 files into `assets/fonts/` and replace the `@import` in `tokens/fonts.css` with local `@font-face` rules. (This is why the compiler reports 0 bundled font binaries — they resolve at runtime via the import.)
- **Icons** use Lucide as a substitute for a (currently unknown) official icon set — swap if the brand has one.
- **UI-kit primitives** are inlined in `ui_kits/website/primitives.jsx` so the kit renders standalone; they mirror the compiled design-system components a production consumer would import from `_ds_bundle.js`.
