---
name: aidisco-design
description: Use this skill to generate well-branded interfaces and assets for AiDisco, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Tokens:** `styles.css` → `tokens/*.css`. Dark by default (`#0A0A0F` stage); Electric Violet `#7B5CFF` primary, Neon Cyan `#00E5FF` secondary, Laser Magenta `#FF2DA6` for rare expression accents.
- **Type:** Space Grotesk (display, tight + bold), Inter (body), JetBrains Mono (data readouts).
- **Voice:** confident, witty, "you"-focused, no emoji, no exclamation marks. "Be the answer." "From ranked to cited."
- **Components:** `components/core/` + `components/brand/` (ScoreGauge, QueryVerdict).
- **UI kit:** `ui_kits/website/` — interactive marketing-site recreation.
- **Logos:** `assets/logos/` (use `*-cropped.png` for tight placement; match dark/light to background).
- **Icons:** Lucide (CDN), 2px line style, no emoji.
