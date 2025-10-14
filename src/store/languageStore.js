import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import siteInfo from '@content/siteInfo.js';

const useLanguageStore = create(
  persist(
    (set) => ({
      language: siteInfo.languages[0],
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);

export default useLanguageStore;
