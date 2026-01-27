import useLanguageStore from '../store/useLanguageStore'
import ko from '../locales/ko'
import en from '../locales/en'

const translations = { ko, en }

export function useTranslation() {
  const { language, setLanguage, toggleLanguage } = useLanguageStore()

  const t = (key, params = {}) => {
    const keys = key.split('.')
    let value = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // 키를 찾지 못하면 영어로 fallback, 그래도 없으면 키 반환
        let fallback = translations['en']
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk]
          } else {
            return key
          }
        }
        return fallback
      }
    }

    // 파라미터 치환 (예: {name} -> 실제 값)
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{(\w+)\}/g, (_, paramKey) => params[paramKey] || `{${paramKey}}`)
    }

    return value
  }

  return {
    t,
    language,
    setLanguage,
    toggleLanguage,
  }
}

export default useTranslation
