import type { L } from '../i18n';

export type ProjectStatus = 'live' | 'code' | 'prototype';

export interface Project {
  id: string;
  name: string;
  nameHe?: string;
  year: string;
  status: ProjectStatus;
  tagline: L;
  story: L;
  tags: L<string[]>;
  links: { live?: string; code?: string };
}

/** Public repositories, with links. Ordered by weight, not by date. */
export const featured: Project[] = [
  {
    id: 'tmz',
    name: 'Torah MiTzion 30 · Photo Archive',
    nameHe: 'תורה מציון 30 · ארכיון התמונות',
    year: '2026',
    status: 'live',
    tagline: {
      en: 'A thirty-year photo archive, collected by a WhatsApp agent.',
      he: 'ארכיון תמונות של שלושים שנה, שנאסף על ידי סוכן וואטסאפ.',
    },
    story: {
      en: 'Torah MiTzion has sent shlichim to communities worldwide since 1996. For the 30th anniversary I built the archive: a schematic map centred on Jerusalem, a yearbook page for every community and year, six languages from day one, and a WhatsApp agent that accepts photos from anyone, screens them with Gemini, asks for the missing details in the sender’s language and publishes them with no human in the loop.',
      he: 'תורה מציון שולחת שליחים לקהילות ברחבי העולם מאז 1996. לרגל שנת השלושים בניתי את הארכיון: מפה סכמטית שמרכזה בירושלים, דף שנתון לכל קהילה ושנה, שש שפות מהיום הראשון, וסוכן וואטסאפ שמקבל תמונות מכל אחד, מסנן אותן עם Gemini, שואל על הפרטים החסרים בשפה של השולח ומפרסם בלי אדם בלולאה.',
    },
    tags: {
      en: ['Supabase', 'Gemini', 'WhatsApp agent', '6 languages', 'GitHub Pages'],
      he: ['Supabase', 'Gemini', 'סוכן וואטסאפ', '6 שפות', 'GitHub Pages'],
    },
    links: {
      live: 'https://torah-mitzion.github.io/archive/',
      code: 'https://github.com/Torah-Mitzion/archive',
    },
  },
  {
    id: 'taxease',
    name: 'TaxEase',
    year: '2026',
    status: 'live',
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
    links: {
      live: 'https://tax.r-hag.ai',
      code: 'https://github.com/hagynwa/tax-ease-israel',
    },
  },
  {
    id: 'docanon',
    name: 'DocAnon',
    year: '2026',
    status: 'code',
    tagline: {
      en: 'Anonymize Hebrew and English documents. For real.',
      he: 'אנונימיזציה אמיתית למסמכים בעברית ובאנגלית.',
    },
    story: {
      en: 'Upload a PDF or Word file and get it back with every name, ID number and phone number actually removed from the file, not just covered with a black box. Gemini finds the personal data, PyMuPDF applies true redactions, batches run in the background, and it costs about half a cent per document.',
      he: 'מעלים PDF או Word ומקבלים אותו בחזרה כשכל שם, תעודת זהות ומספר טלפון הוסרו מהקובץ באמת, לא רק כוסו בריבוע שחור. Gemini מאתר את הפרטים האישיים, PyMuPDF מבצע השחרה אמיתית, אצוות רצות ברקע, והעלות היא כחצי סנט למסמך.',
    },
    tags: {
      en: ['FastAPI', 'Gemini', 'PyMuPDF', 'React', 'Supabase'],
      he: ['FastAPI', 'Gemini', 'PyMuPDF', 'React', 'Supabase'],
    },
    links: { code: 'https://github.com/hagynwa/anonimized_documents' },
  },
  {
    id: 'reuitbot',
    name: 'ReuitBot',
    year: '2026',
    status: 'code',
    tagline: {
      en: 'A sassy Hebrew fitness bot that nags you to drink water.',
      he: 'בוט כושר עברי חצוף שמנדנד לכם לשתות מים.',
    },
    story: {
      en: 'Log water, calories and protein in free Hebrew text (“שתיתי 500”) and get a cynical, slightly insulting reply, reminders every half hour, daily summaries and trends against your own history. Built because tracking apps are boring and nobody opens them twice.',
      he: 'רושמים מים, קלוריות וחלבון בטקסט חופשי (״שתיתי 500״) ומקבלים תגובה צינית וקצת מעליבה, תזכורות כל חצי שעה, סיכומים יומיים ומגמות מול ההיסטוריה שלכם. נבנה כי אפליקציות מעקב משעממות ואף אחד לא פותח אותן פעמיים.',
    },
    tags: {
      en: ['Node.js', 'Telegram', 'Supabase', 'NLP'],
      he: ['Node.js', 'טלגרם', 'Supabase', 'NLP'],
    },
    links: { code: 'https://github.com/hagynwa/reuitbot' },
  },
  {
    id: 'pharma',
    name: 'Medication Agent',
    nameHe: 'סוכן תרופות',
    year: '2026',
    status: 'prototype',
    tagline: {
      en: 'What a health fund’s medication assistant could feel like.',
      he: 'איך יכול להרגיש עוזר התרופות של קופת חולים.',
    },
    story: {
      en: 'A conversational agent that answers questions about medications, prescriptions and dosages, embedded open on the page instead of hiding behind a chat bubble, in Hebrew, Arabic, Russian and English. A concept demo I built to show, not tell, what an agent-first service page looks like.',
      he: 'סוכן שיחה שעונה על שאלות על תרופות, מרשמים ומינונים, משובץ פתוח בתוך הדף במקום להסתתר מאחורי בועת צ׳אט, בעברית, ערבית, רוסית ואנגלית. אב-טיפוס שבניתי כדי להראות, לא להסביר, איך נראה דף שירות שסוכן במרכזו.',
    },
    tags: {
      en: ['Conversational AI', 'RTL', 'HealthTech'],
      he: ['סוכן שיחה', 'RTL', 'הלת׳טק'],
    },
    links: {
      live: 'https://pharma.r-hag.ai',
      code: 'https://github.com/hagynwa/MOH_pharma',
    },
  },
  {
    id: 'anydoc',
    name: 'Anydoc UI',
    year: '2026',
    status: 'code',
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
    links: { code: 'https://github.com/hagynwa/anydoc-ui' },
  },
];

export interface MiniProject {
  name: string;
  nameHe?: string;
  line: L;
}

/** Private repositories and prototypes: named, described, not linked. */
export const more: MiniProject[] = [
  {
    name: 'Pele Yeled',
    nameHe: 'פלא ילד',
    line: {
      en: 'Adaptive Hebrew practice app for the second-grade gifted-identification exams. Built for my own kid after the existing apps disappointed.',
      he: 'אפליקציית תרגול אדפטיבית למבחני איתור מחוננים בכיתה ב׳. נבנתה בשביל הילד שלי, אחרי שהאפליקציות הקיימות אכזבו.',
    },
  },
  {
    name: 'OpenCell',
    line: {
      en: 'Android app that transcribes your phone calls and summarizes them with AI.',
      he: 'אפליקציית אנדרואיד שמתמללת שיחות טלפון ומסכמת אותן עם AI.',
    },
  },
  {
    name: 'KanbanClaw',
    line: {
      en: 'Collaborative Kanban boards with full Hebrew and RTL support, on Next.js and Supabase.',
      he: 'לוחות קנבן שיתופיים עם תמיכה מלאה בעברית ו-RTL, על Next.js ו-Supabase.',
    },
  },
  {
    name: 'WhatsApp Mirror',
    line: {
      en: 'A read-only forum view of WhatsApp group messages, so a community’s knowledge stops scrolling away.',
      he: 'תצוגת פורום לקריאה בלבד של הודעות מקבוצות וואטסאפ, כדי שהידע של הקהילה יפסיק להיעלם למעלה.',
    },
  },
  {
    name: 'Tamzit',
    nameHe: 'תמצית',
    line: {
      en: 'Hourly AI digest of Israeli news channels, on Telegram. Less noise, more signal.',
      he: 'תקציר AI של ערוצי החדשות הישראליים, כל שעה בטלגרם. פחות רעש, יותר תוכן.',
    },
  },
  {
    name: 'Remindit',
    line: {
      en: 'WhatsApp bot that spots tasks and deadlines in your chats and turns them into calendar events.',
      he: 'בוט וואטסאפ שמזהה משימות ודדליינים בצ׳אטים והופך אותם לאירועים ביומן.',
    },
  },
  {
    name: 'Shraga',
    nameHe: 'שרגא',
    line: {
      en: 'Aggregates the Israeli benefits and discounts hiding across health funds, unions, credit cards and employers.',
      he: 'מאגד את ההטבות וההנחות שמתחבאות בקופות החולים, בוועדי העובדים, בכרטיסי האשראי ואצל המעסיקים.',
    },
  },
  {
    name: 'Tofes 4',
    nameHe: 'טופס 4',
    line: {
      en: 'AI assistant for Israel’s Form 4 building-permit maze. First for myself, then for the whole neighborhood.',
      he: 'עוזר AI למבוך של טופס 4. קודם בשבילי, אחר כך לכל השכונה.',
    },
  },
  {
    name: 'Hebrew Birthdays',
    line: {
      en: 'Syncs Hebrew-calendar birthdays into your regular calendar. Grandma asked.',
      he: 'מסנכרן ימי הולדת עבריים ליומן הרגיל. סבתא ביקשה.',
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
    name: 'n8n automations',
    line: {
      en: 'The plumbing behind much of the above: WhatsApp routing, community broadcasts, promo bots, backups and redeploys.',
      he: 'הצנרת מאחורי רוב הדברים למעלה: ניתוב וואטסאפ, שידורים לקהילה, בוטים שיווקיים, גיבויים ופריסות מחדש.',
    },
  },
];
