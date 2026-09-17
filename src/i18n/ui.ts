import type { Lang } from './index';

export interface ChatMessage {
  from: 'in' | 'out';
  who?: string;
  text: string;
  tag?: string;
  href?: string;
}

const en = {
  meta: {
    title: 'Hagai Rettig · Hag.Ai — AI Product Leader, LLM & ML Infrastructure',
    description:
      'Hagai Rettig leads AI & Big Data development at Maccabi Healthcare Services and, as Hag.Ai, turns requests from family, neighbors and organizations into agents, data pipelines and tools that ship.',
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
    logoAlt: 'Hag.Ai — AI Solutions',
  },
  hero: {
    eyebrow: 'Hagai Rettig · Kfar Saba, Israel',
    title1: 'Someone asks.',
    title2: 'I build it.',
    lead:
      'I lead AI & Big Data development at Maccabi Healthcare Services, Israel’s second-largest health fund. After hours, as Hag.Ai, I turn requests from family, neighbors and organizations into agents, data pipelines and small tools that actually ship.',
    ctaWhatsapp: 'Message me on WhatsApp',
    ctaWork: 'See the work',
    ctaCv: 'CV (PDF)',
    chatName: 'Hag.Ai',
    chatStatus: 'online',
    chatAria: 'A short conversation showing how projects start',
    yourTurn: 'Your turn.',
    yourTurnCta: 'Send a message',
    chat: [
      { from: 'in', who: 'Grandma', text: 'Can you make sure I never miss a Hebrew birthday?' },
      { from: 'out', text: 'Done. They sync straight into your calendar.', tag: 'Hebrew Birthdays' },
      { from: 'in', who: 'The neighbor', text: 'How does anyone get through Form 4?' },
      { from: 'out', text: 'Built an assistant. The whole street uses it now.', tag: 'Tofes 4' },
      { from: 'in', who: 'Torah MiTzion', text: 'We have 30 years of photos scattered around the world.' },
      { from: 'out', text: 'A WhatsApp agent now collects, screens and publishes them.', tag: 'Torah MiTzion 30', href: 'https://30.torahmitzion.org/' },
      { from: 'in', who: 'My kid', text: 'The gifted-kids test is next month.' },
      { from: 'out', text: 'Adaptive practice, in Hebrew, on your phone.', tag: 'Pele Yeled' },
      { from: 'in', who: 'Me, 6:30 am', text: 'Coats or no coats today?' },
      { from: 'out', text: 'The weather agent already messaged you.', tag: 'Kids Outfit Agent' },
    ] as ChatMessage[],
  },
  facts: [
    { value: '2023 →', label: 'Leading AI & Big Data development at Maccabi Healthcare Services' },
    { value: '2019 →', label: 'MBA lecturer, Ono Academic College' },
    { value: 'M.Sc.', label: 'Industrial Engineering, Technion' },
    { value: '20+', label: 'Tools and products shipped after hours' },
  ],
  work: {
    label: 'Selected work',
    title: 'Things I built, that people use.',
    subtitle:
      'Every project started with a real request: an organization’s, my neighbors’, or my own family’s. The code is public wherever it can be.',
    visit: 'Visit',
    code: 'Code',
    status: { live: 'Live', code: 'Open source', prototype: 'Prototype', wip: 'In progress' },
    moreTitle: 'Also built',
    moreNote: 'Private repositories and prototypes, mostly without links. Ask me about any of them.',
    autoTitle: 'Automations that run while I sleep',
    autoNote: 'About thirty n8n workflows on a Railway box do the plumbing behind the projects above.',
    running: 'running',
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
  contact: {
    label: 'Contact',
    title: 'Let’s build something.',
    subtitle:
      'A request, a project, or an AI strategy question. WhatsApp is the fastest way to reach me; email works too.',
    whatsapp: 'Message on WhatsApp',
    email: 'Email me',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Kfar Saba, Israel',
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
    title: 'חגי רטיג · Hag.Ai — מוביל מוצרי AI, תשתיות LLM ו-ML',
    description:
      'חגי רטיג מנהל פיתוח AI ו-Big Data במכבי שירותי בריאות, ובתור Hag.Ai הופך בקשות של המשפחה, השכנים וארגונים לסוכנים, צינורות דאטה וכלים שיוצאים לאוויר.',
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
    logoAlt: 'Hag.Ai — AI Solutions',
  },
  hero: {
    eyebrow: 'חגי רטיג · כפר סבא',
    title1: 'מישהו מבקש.',
    title2: 'אני בונה.',
    lead:
      'אני מנהל פיתוח AI ו-Big Data במכבי שירותי בריאות. אחרי שעות העבודה, בתור Hag.Ai, אני הופך בקשות של המשפחה, השכנים וארגונים לסוכנים, צינורות דאטה וכלים קטנים שבאמת יוצאים לאוויר.',
    ctaWhatsapp: 'שלחו לי וואטסאפ',
    ctaWork: 'לעבודות',
    ctaCv: 'קורות חיים (PDF)',
    chatName: 'Hag.Ai',
    chatStatus: 'מחובר',
    chatAria: 'שיחה קצרה שמראה איך פרויקטים מתחילים',
    yourTurn: 'תורכם.',
    yourTurnCta: 'שלחו הודעה',
    chat: [
      { from: 'in', who: 'סבתא', text: 'אפשר לדאוג שלא אפספס יום הולדת עברי?' },
      { from: 'out', text: 'סגור. הם מסתנכרנים ישר ליומן שלך.', tag: 'Hebrew Birthdays' },
      { from: 'in', who: 'השכן', text: 'איך בכלל עוברים את טופס 4?' },
      { from: 'out', text: 'בניתי עוזר. כל הרחוב משתמש בו.', tag: 'טופס 4' },
      { from: 'in', who: 'תורה מציון', text: 'יש לנו 30 שנה של תמונות מפוזרות בעולם.' },
      { from: 'out', text: 'סוכן וואטסאפ אוסף, מסנן ומפרסם אותן.', tag: 'תורה מציון 30', href: 'https://30.torahmitzion.org/' },
      { from: 'in', who: 'הילד', text: 'מבחן המחוננים בחודש הבא.' },
      { from: 'out', text: 'תרגול אדפטיבי, בעברית, בטלפון.', tag: 'פלא ילד' },
      { from: 'in', who: 'אני, 6:30 בבוקר', text: 'מעילים או בלי היום?' },
      { from: 'out', text: 'סוכן מזג האוויר כבר שלח לך הודעה.', tag: 'סוכן הבגדים' },
    ] as ChatMessage[],
  },
  facts: [
    { value: '← 2023', label: 'מוביל את פיתוח ה-AI וה-Big Data במכבי שירותי בריאות' },
    { value: '← 2019', label: 'מרצה בתוכנית ה-MBA, הקריה האקדמית אונו' },
    { value: 'M.Sc.', label: 'הנדסת תעשייה וניהול, הטכניון' },
    { value: '20+', label: 'כלים ומוצרים שיצאו לאוויר אחרי שעות העבודה' },
  ],
  work: {
    label: 'עבודות נבחרות',
    title: 'דברים שבניתי, ואנשים משתמשים בהם.',
    subtitle:
      'כל פרויקט התחיל מבקשה אמיתית: של ארגון, של השכנים, או של המשפחה שלי. הקוד פתוח בכל מקום שאפשר.',
    visit: 'לאתר',
    code: 'קוד',
    status: { live: 'באוויר', code: 'קוד פתוח', prototype: 'אב-טיפוס', wip: 'בעבודה' },
    moreTitle: 'עוד דברים שבניתי',
    moreNote: 'ריפוזיטוריז פרטיים ואבות-טיפוס, רובם בלי קישורים. שאלו אותי על כל אחד מהם.',
    autoTitle: 'אוטומציות שרצות כשאני ישן',
    autoNote: 'כשלושים workflows של n8n על שרת ב-Railway עושים את הצנרת מאחורי הפרויקטים למעלה.',
    running: 'רץ',
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
  contact: {
    label: 'צור קשר',
    title: 'בואו נבנה משהו.',
    subtitle: 'בקשה, פרויקט, או שאלה על אסטרטגיית AI. וואטסאפ זו הדרך הכי מהירה להגיע אליי; גם אימייל עובד.',
    whatsapp: 'הודעה בוואטסאפ',
    email: 'שלחו לי אימייל',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'כפר סבא, ישראל',
  },
  footer: {
    tagline: 'סיגנל, לא רעש.',
    built: 'נבנה עם Astro. הקוד פתוח ב-GitHub.',
    source: 'קוד המקור',
  },
};

export const ui: Record<Lang, UiStrings> = { en, he };
