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
      live: 'https://30.torahmitzion.org/',
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
      en: 'A read-only forum view of WhatsApp groups: n8n receives every message by webhook, stores it in Supabase and routes voice notes to their own flow, so a community’s knowledge stops scrolling away.',
      he: 'תצוגת פורום לקריאה בלבד של קבוצות וואטסאפ: n8n מקבל כל הודעה ב-webhook, שומר ב-Supabase ומנתב הודעות קוליות לזרימה משלהן, כדי שהידע של הקהילה יפסיק להיעלם למעלה.',
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
      en: 'WhatsApp calendar assistant: connect Google Calendar once, then add, move and cancel events by chatting. A Gemini agent on n8n with per-user OAuth.',
      he: 'עוזר יומן בוואטסאפ: מחברים Google Calendar פעם אחת, ואז מוסיפים, מזיזים ומבטלים אירועים בצ׳אט. סוכן Gemini על n8n עם OAuth לכל משתמש.',
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
];

/** n8n workflows on a private instance: described, not linked. */
export const automations: MiniProject[] = [
  {
    name: 'Weather & Kids Outfit Agent',
    nameHe: 'סוכן מזג אוויר ובגדים לילדים',
    line: {
      en: 'Every school morning at 6:30 a Gemini agent reads the local forecast and tells the family, over WhatsApp, what the kids should wear. On Fridays it adds the Shabbat forecast and candle-lighting times.',
      he: 'בכל בוקר של יום לימודים ב-6:30 סוכן Gemini קורא את התחזית המקומית ומודיע למשפחה בוואטסאפ מה הילדים צריכים ללבוש. בימי שישי הוא מוסיף תחזית לשבת וזמני הדלקת נרות.',
    },
  },
  {
    name: 'WhatsApp group bot',
    nameHe: 'בוט לקבוצות וואטסאפ',
    line: {
      en: 'A witty Gemini agent that lives in group chats, with conversation memory in Redis and live web search. It decides for itself whether a message deserves a reply, and stays quiet when it doesn’t.',
      he: 'סוכן Gemini שנון שחי בקבוצות, עם זיכרון שיחה ב-Redis וחיפוש חי באינטרנט. הוא מחליט בעצמו אם להודעה מגיעה תגובה, ושותק כשלא.',
    },
  },
  {
    name: 'Tamzit news pipeline',
    nameHe: 'הצנרת של תמצית',
    line: {
      en: 'Telegram news flashes are embedded and de-duplicated against a Supabase vector store, screened for ads, clustered into stories every half hour, and edited by a Gemini “editor-in-chief” into a calm digest three times a day, with a lighter Friday and Saturday-night schedule.',
      he: 'מבזקים מטלגרם עוברים embedding וסינון כפילויות מול Supabase, סינון פרסומות, קיבוץ לסיפורים כל חצי שעה, ועריכה של ״עורך ראשי״ מבוסס Gemini לתקציר רגוע שלוש פעמים ביום, עם לוח מקוצר לשישי ולמוצאי שבת.',
    },
  },
  {
    name: 'Parasha podcast generator',
    nameHe: 'מחולל פודקאסט לפרשת השבוע',
    line: {
      en: 'Reads the Hebrew calendar, researches the week’s parasha or holiday, writes a script, narrates it with text-to-speech, stitches the audio, paints a cover image and posts the episode to a WhatsApp channel.',
      he: 'קורא את הלוח העברי, חוקר את הפרשה או החג של השבוע, כותב תסריט, מקריא אותו ב-text-to-speech, מחבר את האודיו, מצייר תמונת כריכה ומפרסם את הפרק בערוץ וואטסאפ.',
    },
  },
  {
    name: 'News RAG chatbot',
    nameHe: 'צ׳אטבוט חדשות (RAG)',
    line: {
      en: 'Ask about the news and get answers grounded only in the ingested stories: Cohere embeddings and reranking over Supabase, Gemini for the answer.',
      he: 'שואלים על החדשות ומקבלים תשובות שמבוססות רק על הידיעות שנקלטו: Cohere ל-embeddings ולדירוג מחדש מעל Supabase, Gemini לתשובה.',
    },
  },
  {
    name: 'Housekeeping',
    nameHe: 'תחזוקה',
    line: {
      en: 'A scheduled export of every workflow to a GitHub repo, error alerts by mail and push, and a webhook that restarts the worker when it misbehaves.',
      he: 'ייצוא מתוזמן של כל ה-workflows לריפו ב-GitHub, התראות שגיאה במייל ובפוש, ו-webhook שמאתחל את ה-worker כשהוא משתולל.',
    },
  },
];
