// ------------------------------------
// projects/dremnik/src/components/theme-toggle.tsx
//
// export function ThemeToggle()    L13
// ------------------------------------

"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@/components/ui/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="inline-block size-[13px]" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-muted hover:text-ink transition-colors duration-200 cursor-pointer inline-flex items-center"
    >
      {isDark ? <IconSun className="size-[13px]" /> : <IconMoon className="size-[13px]" />}
    </button>
  );
}
