import { persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type Theme = "light" | "dark";

export type ThemeState = {
  theme: Theme;
};

export type ThemeActions = {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export type ThemeStore = ThemeState & ThemeActions;

export const defaultInitState: ThemeState = {
  theme: "dark",
};

export const createThemeStore = (initState: ThemeState = defaultInitState) =>
  createStore<ThemeStore>()(persist((set) => ({
    ...initState,
    setTheme: (theme) => set({ theme }),
    toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  }), { name: "theme" }));