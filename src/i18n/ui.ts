import type { Lang } from './index';

const en = {
  meta: {
    title: 'Hagai Rettig — AI & Big Data Development Lead · r-hag.ai',
    description:
      'Hagai Rettig leads AI & Big Data development at Maccabi Healthcare Services and builds agents, data pipelines and small, sharp tools that people actually use.',
  },
  nav: {
    work: 'Work',
    principles: 'Principles',
    experience: 'Experience',
    contact: 'Contact',
    switchLang: 'עברית',
    switchLangAria: 'Switch to Hebrew',
    theme: 'Toggle dark mode',
    menu: 'Open menu',
  },
  hero: {
    eyebrow: 'Hagai Rettig · Kfar Saba, Israel',
    title: 'AI that turns bureaucracy into clarity.',
    lead:
      'I lead AI & Big Data development at Maccabi Healthcare Services, Israel’s second-largest health fund, and I build agents, data pipelines and small, sharp tools that people actually use: for organizations, for my community and for my own family.',
    motto: 'Less, but better.',
    ctaWork: 'Selected work',
    ctaContact: 'Get in touch',
    ctaCv: 'CV (PDF)',
    photoAlt: 'Hagai Rettig',
    role: 'AI & Big Data Development Lead',
    org: 'Maccabi Healthcare Services',
  },
  facts: [
    { value: '2023 →', label: 'Leading AI & Big Data development at Maccabi Healthcare Services' },
    { value: '5', label: 'IT awards, including “Most Innovative Organization in Israel”' },
    { value: '2019 →', label: 'MBA lecturer, Ono Academic College' },
    { value: '20+', label: 'Tools and products shipped on the side' },
  ],
  work: {
    label: 'Selected work',
    title: 'Things I built, that people use.',
    subtitle:
      'Every project started with a real problem: an organization’s, my neighbors’, or my own family’s. The code is public wherever it can be.',
    visit: 'Visit',
    code: 'Code',
    status: { live: 'Live', code: 'Open source', prototype: 'Prototype' },
    moreTitle: 'Also built',
    moreNote:
      'Private repositories and prototypes, so no links. Ask me about any of them.',
    autoTitle: 'Automations that run while I sleep',
    autoNote:
      'About thirty n8n workflows on a Railway box do the plumbing behind the projects above. The ones worth a mention:',
  },
  principles: {
    label: 'How I work',
    title: 'Three rules I keep coming back to.',
    items: [
      {
        title: 'Product-person fit before product-market fit.',
        body: 'Build for someone specific: yourself, your kid, your neighbor. Real problems breed real products, and a user you can call beats a persona.',
      },
      {
        title: 'Don’t be an AI tourist.',
        body: 'Pick two or three tools, go deep, ship real value. Depth beats breadth, every time.',
      },
      {
        title: 'Less, but better.',
        body: 'Simplicity is the goal, not a compromise. Fewer features, cleaner data, and let the AI carry the interface.',
      },
    ],
  },
  experience: {
    label: 'Career',
    title: 'From operations research to shipping AI at scale.',
    present: 'present',
    education: 'Education',
    military: 'Military service',
  },
  teaching: {
    label: 'Teaching & community',
    title: 'I also talk about this stuff.',
    open: 'Open the deck',
  },
  contact: {
    label: 'Contact',
    title: 'Let’s build something.',
    subtitle:
      'AI strategy, a project to collaborate on, or a problem that deserves a small, sharp tool. Email is best; WhatsApp is fastest.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    phone: 'Phone',
    location: 'Kfar Saba, Israel',
    write: 'Write',
    message: 'Message',
    connect: 'Connect',
    follow: 'Follow',
  },
  footer: {
    tagline: 'Built with signal, not noise.',
    built: 'Built with Astro. The source is on GitHub.',
    source: 'Source',
  },
};

export type UiStrings = typeof en;

const he: UiStrings = {
  meta: {
    title: 'חגי רטיג — מנהל פיתוח AI ו-Big Data · r-hag.ai',
    description:
      'חגי רטיג מנהל פיתוח AI ו-Big Data במכבי שירותי בריאות, ובונה סוכנים, צינורות דאטה וכלים קטנים וחדים שאנשים באמת משתמשים בהם.',
  },
  nav: {
    work: 'עבודות',
    principles: 'עקרונות',
    experience: 'ניסיון',
    contact: 'צור קשר',
    switchLang: 'English',
    switchLangAria: 'Switch to English',
    theme: 'מצב כהה / בהיר',
    menu: 'פתיחת תפריט',
  },
  hero: {
    eyebrow: 'חגי רטיג · כפר סבא',
    title: 'AI שהופך ביורוקרטיה לבהירות.',
    lead:
      'אני מנהל פיתוח AI ו-Big Data במכבי שירותי בריאות, ובונה סוכנים, צינורות דאטה וכלים קטנים וחדים שאנשים באמת משתמשים בהם: לארגונים, לקהילה שלי ולמשפחה שלי.',
    motto: 'פחות, אבל טוב יותר.',
    ctaWork: 'לעבודות נבחרות',
    ctaContact: 'דברו איתי',
    ctaCv: 'קורות חיים (PDF)',
    photoAlt: 'חגי רטיג',
    role: 'מנהל פיתוח AI ו-Big Data',
    org: 'מכבי שירותי בריאות',
  },
  facts: [
    { value: '← 2023', label: 'מוביל את פיתוח ה-AI וה-Big Data במכבי שירותי בריאות' },
    { value: '5', label: 'פרסי IT, כולל ״הארגון החדשני ביותר בישראל״' },
    { value: '← 2019', label: 'מרצה בתוכנית ה-MBA, הקריה האקדמית אונו' },
    { value: '20+', label: 'כלים ומוצרים ששוחררו מחוץ לשעות העבודה' },
  ],
  work: {
    label: 'עבודות נבחרות',
    title: 'דברים שבניתי, ואנשים משתמשים בהם.',
    subtitle:
      'כל פרויקט התחיל מבעיה אמיתית: של ארגון, של השכנים, או של המשפחה שלי. הקוד פתוח בכל מקום שאפשר.',
    visit: 'לאתר',
    code: 'קוד',
    status: { live: 'באוויר', code: 'קוד פתוח', prototype: 'אב-טיפוס' },
    moreTitle: 'עוד דברים שבניתי',
    moreNote: 'ריפוזיטוריז פרטיים ואבות-טיפוס, ולכן בלי קישורים. שאלו אותי על כל אחד מהם.',
    autoTitle: 'אוטומציות שרצות כשאני ישן',
    autoNote: 'כשלושים workflows של n8n על שרת ב-Railway עושים את הצנרת מאחורי הפרויקטים למעלה. אלה ששווה להזכיר:',
  },
  principles: {
    label: 'איך אני עובד',
    title: 'שלושה כללים שאני חוזר אליהם.',
    items: [
      {
        title: 'התאמה לאדם לפני התאמה לשוק.',
        body: 'בונים למישהו ספציפי: לעצמכם, לילד, לשכן. מבעיות אמיתיות נולדים מוצרים אמיתיים, ומשתמש שאפשר להתקשר אליו עדיף על פרסונה.',
      },
      {
        title: 'אל תהיו תיירי AI.',
        body: 'בוחרים שניים-שלושה כלים, הולכים לעומק, ומוציאים ערך אמיתי. עומק מנצח רוחב, בכל פעם.',
      },
      {
        title: 'פחות, אבל טוב יותר.',
        body: 'פשטות היא המטרה, לא פשרה. פחות פיצ׳רים, דאטה נקי יותר, ושה-AI יישא את הממשק.',
      },
    ],
  },
  experience: {
    label: 'קריירה',
    title: 'מחקר ביצועים ועד הוצאה לאוויר של AI בסקייל.',
    present: 'היום',
    education: 'השכלה',
    military: 'שירות צבאי',
  },
  teaching: {
    label: 'הוראה וקהילה',
    title: 'אני גם מדבר על זה.',
    open: 'למצגת',
  },
  contact: {
    label: 'צור קשר',
    title: 'בואו נבנה משהו.',
    subtitle:
      'אסטרטגיית AI, פרויקט לשיתוף פעולה, או בעיה שמגיע לה כלי קטן וחד. אימייל הכי טוב, וואטסאפ הכי מהיר.',
    email: 'אימייל',
    whatsapp: 'וואטסאפ',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    phone: 'טלפון',
    location: 'כפר סבא, ישראל',
    write: 'כתבו לי',
    message: 'שלחו הודעה',
    connect: 'התחברו',
    follow: 'עקבו',
  },
  footer: {
    tagline: 'סיגנל, לא רעש.',
    built: 'נבנה עם Astro. הקוד פתוח ב-GitHub.',
    source: 'קוד המקור',
  },
};

export const ui: Record<Lang, UiStrings> = { en, he };
