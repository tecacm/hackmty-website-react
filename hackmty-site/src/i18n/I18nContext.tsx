import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { withBase } from '../utils/Utils';

export type Lang = 'en' | 'es';

type Messages = Record<string, string>;

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('lang') as Lang | null) : null;
    return stored === 'es' ? 'es' : 'en';
  });
  const [messages, setMessages] = useState<Messages>({});

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch {}
  }, []);

  useEffect(() => {
    let cancelled = false;
    const url = withBase(`/i18n/${lang}.json`);
    fetch(url)
      .then(r => r.ok ? r.json() : {})
      .then((data: Messages) => { if (!cancelled) setMessages(data || {}); })
      .catch(() => { if (!cancelled) setMessages({}); });
    return () => { cancelled = true; };
  }, [lang]);

  const t = useCallback((key: string, fallback?: string) => {
    return messages[key] ?? fallback ?? key;
  }, [messages]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
