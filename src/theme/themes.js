/**
 * Theme registry.
 *
 * The actual colour values live in `src/theme/themes.css` (single source of
 * truth) — they are applied by setting `data-theme="<id>"` on <html>.
 * This file only declares which themes are available and how they are named.
 */
export const STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME = "purple";

export const THEMES = [
  { id: "purple", label: "Black & Purple" },
  { id: "orange", label: "Black & Orange" },
  { id: "blue", label: "Black & Blue" },
  { id: "silver", label: "Black & Silver" },
  { id: "green", label: "Black & Green" },
];

export const THEME_IDS = THEMES.map((theme) => theme.id);

export function isValidTheme(value) {
  return THEME_IDS.includes(value);
}
