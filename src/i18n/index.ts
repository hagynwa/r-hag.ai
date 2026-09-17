export type Lang = 'en' | 'he';
export type L<T = string> = Record<Lang, T>;

export const LANGS: Lang[] = ['en', 'he'];
export const SITE = 'https://r-hag.ai';

export const dirOf = (lang: Lang): 'ltr' | 'rtl' => (lang === 'he' ? 'rtl' : 'ltr');
export const pathOf = (lang: Lang): string => (lang === 'he' ? '/he/' : '/');
export const otherLang = (lang: Lang): Lang => (lang === 'he' ? 'en' : 'he');
