import { useEffect, useRef, useState } from "react";
import { Palette, Check } from "lucide-react";
import {
  THEMES,
  STORAGE_KEY,
  DEFAULT_THEME,
  isValidTheme,
} from "../../theme/themes";
import "./ThemeSwitcher.css";

/** Reads the theme that is already applied to <html> (set before first paint). */
function readAppliedTheme() {
  if (typeof document === "undefined") return DEFAULT_THEME;
  const applied = document.documentElement.getAttribute("data-theme");
  return isValidTheme(applied) ? applied : DEFAULT_THEME;
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(readAppliedTheme);
  const containerRef = useRef(null);

  /* Apply to <html> + persist */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable (private mode) — theme still applies for this session */
    }
  }, [theme]);

  /* Keep other open tabs in sync */
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;
      if (isValidTheme(event.newValue)) setTheme(event.newValue);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  /* Close on outside click / Escape */
  useEffect(() => {
    if (!open) return undefined;

    const handleMouseDown = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-3 right-3 z-[5] font-primary select-none sm:bottom-5 sm:right-5"
    >
      {open && (
        <div
          className="ts-panel absolute bottom-full right-0 mb-3 w-[14rem] rounded-2xl border border-white/10 bg-[#0b0b0e] p-2 shadow-2xl shadow-black/60"
          role="dialog"
          aria-label="Theme switcher"
        >
          <p className="px-2.5 pt-1.5 pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Theme
          </p>

          <ul className="flex flex-col gap-1">
            {THEMES.map((option) => {
              const isActive = option.id === theme;

              return (
                <li key={option.id} data-theme-id={option.id}>
                  <button
                    type="button"
                    onClick={() => setTheme(option.id)}
                    aria-pressed={isActive}
                    className={`flex w-full cursor-pointer items-center gap-2.5 rounded-xl border px-2.5 py-2 text-left text-[0.85rem] font-medium transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none ${
                      isActive
                        ? "border-white/25 bg-white/10 text-white"
                        : "border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="ts-swatch" aria-hidden="true" />
                    <span className="flex-1 truncate">{option.label}</span>
                    {isActive && (
                      <Check
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                        style={{ color: "var(--swatch-1)" }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Close theme switcher" : "Open theme switcher"}
        title="Switch theme"
        className="ts-toggle flex h-11 w-11 cursor-pointer items-center justify-center rounded-full p-[2px] shadow-lg shadow-black/50 transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none active:scale-95"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--swatch-1), var(--swatch-2))",
        }}
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#161515] text-white">
          <Palette className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}
