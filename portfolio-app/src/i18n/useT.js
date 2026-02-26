import { useCallback } from 'react';
import { useI18n } from './I18nProvider';

export function useT(namespace) {
  const { t } = useI18n();

  return useCallback((key, fallback) => t(namespace, key, fallback), [namespace, t]);
}
