import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useLanguageStore = create(
  persist(
    (set) => ({
      language: 'ko', // 기본 언어: 한국어
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () => set((state) => ({
        language: state.language === 'ko' ? 'en' : 'ko'
      })),
    }),
    {
      name: 'aicons-language', // localStorage key
    }
  )
)

export default useLanguageStore
