import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "system",
  setTheme: (theme) => {
    set({ theme });
    if (typeof window !== "undefined") {
      localStorage.setItem("msl-theme", theme);
      const root = document.documentElement;
      if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  },
  initializeTheme: () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("msl-theme") as "light" | "dark" | "system" | null;
      const theme = stored || "system";
      set({ theme });
      const root = document.documentElement;
      if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  },
}));
