---
name: kunik-design
description: Use this skill to generate well-branded interfaces and assets for Kunik Design (טק בגובה העיניים / kunikHome — Dana Kunik), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.
Useful entry points: `styles.css` (imports every token file), `tokens/`, `assets/` (logo, portrait, fonts, 39 icon SVGs), `components/<group>/<Name>.prompt.md` (per-component usage), `ui_kits/*/README.md`, and `slides/`.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Note: this brand is Hebrew, right-to-left. Set `dir="rtl"` and `lang="he"` on the document unless the user asks otherwise.

For production code (not throwaway mocks): also read readme.md's "Engineering conventions" section — every app must be responsive down to phone width, table columns must be sortable, and any app syncing to a live backend must refetch on tab-resume (`visibilitychange`/`pageshow`), not just once on mount.
