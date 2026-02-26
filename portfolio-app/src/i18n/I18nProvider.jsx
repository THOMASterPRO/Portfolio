import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLanguage, resources, supportedLanguages } from './resources';

const I18nContext = createContext(null);
const LANGUAGE_STORAGE_KEY = 'portfolio-language';

function getNestedValue(object, path) {
  return path.split('.').reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return current[key];
    }

    return undefined;
  }, object);
}

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }

  return defaultLanguage;
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const t = useCallback(
    (namespace, key, fallback) => {
      const currentNamespace = resources[language]?.[namespace];
      const defaultNamespace = resources[defaultLanguage]?.[namespace];

      const currentValue = getNestedValue(currentNamespace, key);
      if (typeof currentValue === 'string') {
        return currentValue;
      }

      const defaultValue = getNestedValue(defaultNamespace, key);
      if (typeof defaultValue === 'string') {
        return defaultValue;
      }

      return fallback ?? `${namespace}.${key}`;
    },
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      supportedLanguages,
      t,
    }),
    [language, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
}
