"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { useStore } from "zustand";

import { createThemeStore, type Theme, type ThemeStore } from "@/stores/theme-store";

export type ThemeStoreApi = ReturnType<typeof createThemeStore>;

export const themeStorageKey = "portfolio-theme";

const ThemeStoreContext = createContext<ThemeStoreApi | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = themeStorageKey,
}: ThemeProviderProps) {
  const [store] = useState(() => createThemeStore({ theme: defaultTheme }));

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(storageKey);
    } catch {
      stored = null;
    }

    const initial: Theme = stored === "light" || stored === "dark" ? stored : defaultTheme;
    store.getState().setTheme(initial);
    applyTheme(initial);

    const unsubscribe = store.subscribe((state) => {
      applyTheme(state.theme);
      try {
        window.localStorage.setItem(storageKey, state.theme);
      } catch {
        // ذخیره‌ی ناموفق (مثلاً حالت خصوصی) نباید کارکرد تم را بشکند
      }
    });

    return unsubscribe;
  }, [store, storageKey, defaultTheme]);

  return <ThemeStoreContext.Provider value={store}>{children}</ThemeStoreContext.Provider>;
}

export function useThemeStore<T>(selector: (state: ThemeStore) => T): T {
  const store = useContext(ThemeStoreContext);
  if (!store) {
    throw new Error("useThemeStore must be used within ThemeProvider");
  }
  return useStore(store, selector);
}

export function useTheme() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return { theme, setTheme, toggleTheme };
}