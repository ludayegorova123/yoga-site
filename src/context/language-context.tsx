"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  t: typeof translations.en;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "uk",
  t: translations.uk,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("uk");

  const toggle = () => setLang((l) => (l === "uk" ? "en" : "uk"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
