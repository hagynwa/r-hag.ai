import type { L } from '../i18n';

export type ProjectStatus = 'live' | 'inuse' | 'prototype' | 'wip';
export type ArtName = 'docanon' | 'reuitbot' | 'anydoc';

export interface Project {
  id: string;
  name: string;
  nameHe?: string;
  status: ProjectStatus;
  size: 'lg' | 'sm';
  tagline: L;
  story: L;
  tags: L<string[]>;
  links: { live?: string; code?: string };
  /** Real screenshot of the live product (large cards). */
  cover?: { src: string; alt: L };
  /** Inline illustration (small cards). */
  art?: ArtName;
}

/** Public repositories, with links. Ordered by weight, not by date. */
export const featured: Project[] = [
  {
    id: 'tmz',
    name: 'Torah MiTzion 30 · Photo Archive',
    nameHe: 'תורה מציון 30 · ארכיון התמונות',
    status: 'live',
    size: 'lg',
    tagline: {
      en: 'A thirty-year photo archive, collected by a WhatsApp agent.',
      he: 'ארכיון תמונות של שלושים שנה, שנאסף על ידי סוכן וואטסאפ.',
    },
    story: {
      en: 'Torah MiTzion has sent shlichim to communities worldwide since 1996. For the 30th anniversary I built the archive: a schematic map centred on Jerusalem, a yearbook page for every community and year, six languages from day one, and a WhatsApp agent that accepts photos from anyone, screens them with Gemini, asks for the missing details in the sender’s language and publishes them with no human in the loop.',
      he: 'תורה מציון שולחת שליחים לקהילות ברחבי העולם מאז 1996. לרגל שנת השלושים בניתי את הארכיון: מפה סכמטית שמרכזה בירושלים, דף שנתון לכל קהילה ושנה, שש שפות מהיום הראשון, וסוכן וואטסאפ שמקבל תמונות מכל אחד, מסנן אותן עם Gemini, שואל על הפרטים החסרים בשפה של השולח ומפרסם בלי אדם בלולאה.',
    },
    tags: {
      en: ['Supabase', 'Gemini', 'WhatsApp agent', '6 languages'],
      he: ['Supabase', 'Gemini', 'סוכן וואטסאפ', '6 שפות'],
    },
    links: {
      live: 'https://30.torahmitzion.org/',
    },
    cover: {
      src: '/work/tmz.jpg',
      alt: {
        en: 'The Torah MiTzion 30 archive: a dark map centred on Jerusalem with arcs to communities worldwide, and the latest photographs',
        he: 'ארכיון תורה מציון 30: מפה כהה שמרכזה בירושלים עם קשתות לקהילות בעולם, והתמונות האחרונות',
      },
    },
  },
  {
    id: 'taxease',
    name: 'TaxEase',
    status: 'wip',
    size: 'lg',
    tagline: {
      en: 'Israeli tax refunds in five minutes, not five meetings.',
      he: 'החזר מס בחמש דקות, בלי רואה חשבון.',
    },
    story: {
      en: 'Upload your Form 106, answer a few plain-language questions, and download an official Form 135, filled in and ready to submit. Gemini reads the payslips, the calculator applies the exact credit points and brackets of each tax year since 2019, and the numbers are written straight onto the tax authority’s own PDF.',
      he: 'מעלים טופס 106, עונים על כמה שאלות בגובה העיניים, ומורידים טופס 135 רשמי, מלא ומוכן להגשה. Gemini קורא את התלושים, המחשבון מיישם את נקודות הזיכוי והמדרגות המדויקות של כל שנת מס מאז 2019, והמספרים נכתבים ישירות על ה-PDF של רשות המסים.',
    },
    tags: {
      en: ['Next.js', 'Gemini OCR', 'pdf-lib', 'Supabase'],
      he: ['Next.js', 'Gemini OCR', 'pdf-lib', 'Supabase'],
    },
    links: {},
    cover: {
      src: '/work/taxease.jpg',
      alt: {
        en: 'TaxEase landing page: “Check how much money you are owed back”, with a three-step explanation',
        he: 'דף הבית של TaxEase: ״בדקו כמה כסף מגיע לכם בחזרה״, עם הסבר בשלושה שלבים',
      },
    },
  },
  {
    id: 'docanon',
    name: 'DocAnon',
    status: 'inuse',
    size: 'sm',
    art: 'docanon',
    tagline: {
      en: 'Anonymize Hebrew and English documents. For real.',
      he: 'אנונימיזציה אמיתית למסמכים בעברית ובאנגלית.',
    },
    story: {
      en: 'Upload a PDF or Word file and get it back with every name, ID and phone number actually removed from the file, not just covered with a black box. Gemini finds the personal data, PyMuPDF applies true redactions, and it costs about half a cent per document.',
      he: 'מעלים PDF או Word ומקבלים אותו בחזרה כשכל שם, תעודת זהות ומספר טלפון הוסרו מהקובץ באמת, לא רק כוסו בריבוע שחור. Gemini מאתר את הפרטים האישיים, PyMuPDF מבצע השחרה אמיתית, והעלות היא כחצי סנט למסמך.',
    },
    tags: {
      en: ['FastAPI', 'Gemini', 'PyMuPDF', 'React'],
      he: ['FastAPI', 'Gemini', 'PyMuPDF', 'React'],
    },
    links: {},
  },
  {
    id: 'reuitbot',
    name: 'ReuitBot',
    status: 'inuse',
    size: 'sm',
    art: 'reuitbot',
    tagline: {
      en: 'A sassy Hebrew fitness bot that nags you to drink water.',
      he: 'בוט כושר עברי חצוף שמנדנד לכם לשתות מים.',
    },
    story: {
      en: 'Log water, calories and protein in free Hebrew text (“שתיתי 500”) and get a cynical, slightly insulting reply, reminders every half hour, and daily trends against your own history. Built because tracking apps are boring and nobody opens them twice.',
      he: 'רושמים מים, קלוריות וחלבון בטקסט חופשי (״שתיתי 500״) ומקבלים תגובה צינית וקצת מעליבה, תזכורות כל חצי שעה ומגמות יומיות מול ההיסטוריה שלכם. נבנה כי אפליקציות מעקב משעממות ואף אחד לא פותח אותן פעמיים.',
    },
    tags: {
      en: ['Node.js', 'Telegram', 'Supabase', 'NLP'],
      he: ['Node.js', 'טלגרם', 'Supabase', 'NLP'],
    },
    links: {},
  },
  {
    id: 'anydoc',
    name: 'Anydoc UI',
    status: 'inuse',
    size: 'sm',
    art: 'anydoc',
    tagline: {
      en: 'Drop any document, get clean Markdown. Hebrew included.',
      he: 'זורקים מסמך, מקבלים Markdown נקי. כולל עברית.',
    },
    story: {
      en: 'A tiny self-hosted converter for feeding documents to LLMs: Word, Excel, PowerPoint and PDF in, Markdown out, with right-to-left text that survives the trip. Firecrawl’s anydoc does the heavy lifting; a small Python path handles Hebrew PDFs properly.',
      he: 'ממיר קטן להרצה עצמית שמכין מסמכים למודלי שפה: מכניסים קובץ Word, Excel, PowerPoint או PDF, מקבלים Markdown, וטקסט מימין לשמאל שורד את הדרך. anydoc של Firecrawl עושה את העבודה הכבדה, ונתיב Python קטן מטפל נכון ב-PDF בעברית.',
    },
    tags: {
      en: ['Node.js', 'Firecrawl anydoc', 'Docker'],
      he: ['Node.js', 'Firecrawl anydoc', 'Docker'],
    },
    links: {},
  },
];

export interface MiniProject {
  name: string;
  nameHe?: string;
  line: L;
  link?: string;
  active?: boolean;
}

/** Private repositories and prototypes: named, described, mostly not linked. */
export const more: MiniProject[] = [
  {
    name: 'Pele Yeled',
    nameHe: 'פלא ילד',
    line: {
      en: 'Adaptive Hebrew practice for the second-grade gifted exams. Built for my own kid.',
      he: 'תרגול אדפטיבי בעברית למבחני המחוננים של כיתה ב׳. נבנה בשביל הילד שלי.',
    },
  },
  {
    name: 'OpenCell',
    line: {
      en: 'Android app that transcribes your calls and summarizes them with AI.',
      he: 'אפליקציית אנדרואיד שמתמללת שיחות ומסכמת אותן עם AI.',
    },
  },
  {
    name: 'KanbanClaw',
    line: {
      en: 'Collaborative Kanban boards with real Hebrew and RTL support. Next.js + Supabase.',
      he: 'לוחות קנבן שיתופיים עם תמיכה אמיתית בעברית ו-RTL. Next.js + Supabase.',
    },
  },
  {
    name: 'WhatsApp Mirror',
    line: {
      en: 'Read-only forum view of WhatsApp groups, fed by n8n webhooks into Supabase.',
      he: 'תצוגת פורום לקריאה בלבד של קבוצות וואטסאפ, מוזנת מ-n8n ל-Supabase.',
    },
  },
  {
    name: 'Tamzit',
    nameHe: 'תמצית',
    line: {
      en: 'Hourly AI digest of Israeli news on Telegram. Less noise, more signal.',
      he: 'תקציר AI של החדשות בישראל, כל שעה בטלגרם. פחות רעש, יותר תוכן.',
    },
  },
  {
    name: 'Remindit',
    line: {
      en: 'WhatsApp calendar assistant: connect Google Calendar once, then manage events by chatting.',
      he: 'עוזר יומן בוואטסאפ: מחברים Google Calendar פעם אחת ומנהלים אירועים בצ׳אט.',
    },
  },
  {
    name: 'Shraga',
    nameHe: 'שרגא',
    line: {
      en: 'Aggregates the benefits and discounts hiding in health funds, unions, credit cards and employers.',
      he: 'מאגד את ההטבות שמתחבאות בקופות החולים, בוועדים, בכרטיסי האשראי ואצל המעסיקים.',
    },
  },
  {
    name: 'Tofes 4',
    nameHe: 'טופס 4',
    line: {
      en: 'AI assistant for the Form 4 building-permit maze. First for me, then for the whole street.',
      he: 'עוזר AI למבוך של טופס 4. קודם בשבילי, אחר כך לכל הרחוב.',
    },
  },
  {
    name: 'Hebrew Birthdays',
    line: {
      en: 'Hebrew-calendar birthdays, synced into your regular calendar. Grandma asked.',
      he: 'ימי הולדת עבריים מסונכרנים ליומן הרגיל. סבתא ביקשה.',
    },
  },
  {
    name: 'HomeTriage Voice',
    line: {
      en: 'Voice-agent prototype for medical triage from home.',
      he: 'אב-טיפוס של סוכן קולי לטריאז׳ רפואי מהבית.',
    },
  },
  {
    name: 'Medication agent demo',
    nameHe: 'דמו סוכן תרופות',
    line: {
      en: 'Concept demo of a conversational medication assistant, embedded open on the page.',
      he: 'אב-טיפוס של עוזר תרופות בשיחה, משובץ פתוח בתוך הדף.',
    },
    link: 'https://pharma.r-hag.ai',
  },
];

/** n8n workflows on a private instance: described, not linked. */
export const automations: MiniProject[] = [
  {
    name: 'Weather & Kids Outfit Agent',
    nameHe: 'סוכן מזג אוויר ובגדים לילדים',
    active: true,
    line: {
      en: '6:30 every school morning: Gemini reads the forecast and tells the family what the kids should wear. Fridays add the Shabbat times.',
      he: '6:30 בכל בוקר לימודים: Gemini קורא את התחזית ומודיע למשפחה מה הילדים לובשים. בשישי גם זמני שבת.',
    },
  },
  {
    name: 'WhatsApp group bot',
    nameHe: 'בוט לקבוצות וואטסאפ',
    active: true,
    line: {
      en: 'A witty Gemini agent in group chats, with Redis memory and web search. Decides for itself when to stay quiet.',
      he: 'סוכן Gemini שנון בקבוצות, עם זיכרון ב-Redis וחיפוש ברשת. מחליט בעצמו מתי לשתוק.',
    },
  },
  {
    name: 'Tamzit news pipeline',
    nameHe: 'הצנרת של תמצית',
    active: true,
    line: {
      en: 'Telegram flashes embedded and de-duplicated in Supabase, screened for ads, clustered into stories, edited into a calm digest.',
      he: 'מבזקים מטלגרם עוברים embedding וסינון כפילויות ב-Supabase, סינון פרסומות, קיבוץ לסיפורים ועריכה לתקציר רגוע.',
    },
  },
  {
    name: 'Parasha podcast generator',
    nameHe: 'מחולל פודקאסט לפרשת השבוע',
    line: {
      en: 'Picks the week’s parasha, writes a script, narrates it, adds a cover image and posts the episode to WhatsApp.',
      he: 'בוחר את פרשת השבוע, כותב תסריט, מקריא, מוסיף תמונת כריכה ומפרסם את הפרק בוואטסאפ.',
    },
  },
  {
    name: 'News RAG chatbot',
    nameHe: 'צ׳אטבוט חדשות (RAG)',
    line: {
      en: 'Answers grounded only in the ingested stories: Cohere embeddings and reranking over Supabase, Gemini on top.',
      he: 'תשובות שמבוססות רק על הידיעות שנקלטו: Cohere מעל Supabase, ו-Gemini מעליהם.',
    },
  },
  {
    name: 'Housekeeping',
    nameHe: 'תחזוקה',
    line: {
      en: 'Scheduled workflow exports to GitHub, error alerts by mail and push, and a webhook that restarts the worker.',
      he: 'ייצוא מתוזמן של workflows ל-GitHub, התראות שגיאה במייל ובפוש, ו-webhook שמאתחל את ה-worker.',
    },
  },
];
