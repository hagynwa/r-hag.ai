import type { L } from '../i18n';

export interface Role {
  from: string;
  to: string | null; // null = present
  role: L;
  org: L;
  /** One flowing sentence per role, written from the CV. */
  summary: L;
  current?: boolean;
}

export const roles: Role[] = [
  {
    from: '2023',
    to: null,
    current: true,
    role: { en: 'Managing AI & Big Data Software Development', he: 'מנהל פיתוח תוכנה AI ו-Big Data' },
    org: { en: 'Maccabi Healthcare Services', he: 'מכבי שירותי בריאות' },
    summary: {
      en: 'Co-leading Maccabi’s AI vision and roadmap with the CIO, and running the data scientists and engineers who ship Generative AI apps, clinical AI and the Kafka-to-Kubernetes pipelines beneath them.',
      he: 'מוביל יחד עם ה-CIO את החזון ומפת הדרכים של ה-AI במכבי, ומנהל את מדעני ומהנדסי הדאטה שמוציאים לאוויר אפליקציות Generative AI, AI קליני וצינורות הדאטה שמתחתיהם.',
    },
  },
  {
    from: '2019',
    to: null,
    role: { en: 'Lecturer, MBA program', he: 'מרצה בתוכנית ה-MBA' },
    org: { en: 'Ono Academic College', he: 'הקריה האקדמית אונו' },
    summary: {
      en: 'Teaching AI and technology strategy to managers who will have to decide, not code.',
      he: 'מלמד אסטרטגיית AI וטכנולוגיה למנהלים שיצטרכו להחליט, לא לקודד.',
    },
  },
  {
    from: '2019',
    to: '2023',
    role: { en: 'Director, Consulting & Data', he: 'מנהל ייעוץ ודאטה' },
    org: { en: 'Moore Management Consulting', he: 'Moore Management Consulting' },
    summary: {
      en: 'Advised C-level teams at corporates and startups on growth, technology and marketing strategy, and built the data tools that turned the advice into new services.',
      he: 'ייעצתי להנהלות בכירות בתאגידים ובסטארטאפים על צמיחה, טכנולוגיה ושיווק, ובניתי את כלי הדאטה שהפכו את הייעוץ לשירותים חדשים.',
    },
  },
  {
    from: '2016',
    to: '2019',
    role: { en: 'Senior Project Manager', he: 'מנהל פרויקטים בכיר' },
    org: { en: 'Applied Materials', he: 'Applied Materials' },
    summary: {
      en: 'Ran cross-functional projects alongside R&D in the semiconductor industry, launching new services and tighter processes.',
      he: 'ניהלתי פרויקטים חוצי-ארגון לצד ה-R&D בתעשיית השבבים, והשקתי שירותים חדשים ותהליכים הדוקים יותר.',
    },
  },
];

export interface Degree {
  title: L;
  school: L;
  note: L;
}

export const education: Degree[] = [
  {
    title: { en: 'M.Sc. Industrial Engineering', he: 'M.Sc. הנדסת תעשייה וניהול' },
    school: { en: 'Technion, Israel Institute of Technology', he: 'הטכניון, מכון טכנולוגי לישראל' },
    note: { en: 'Thesis: a supply-chain optimization algorithm', he: 'תזה: אלגוריתם אופטימיזציה לשרשרת אספקה' },
  },
  {
    title: { en: 'B.Sc. Industrial Engineering & Management', he: 'B.Sc. הנדסת תעשייה וניהול' },
    school: { en: 'Ariel University', he: 'אוניברסיטת אריאל' },
    note: { en: 'Highest honors, Operations Research', he: 'בהצטיינות יתרה, חקר ביצועים' },
  },
];

export const military: { title: L; org: L } = {
  title: { en: 'Infantry combat soldier and commander', he: 'לוחם ומפקד חי״ר' },
  org: { en: 'Givati Brigade, IDF, 2006–2009', he: 'חטיבת גבעתי, צה״ל, 2006–2009' },
};

export const contact = {
  email: 'hagai.rettig@gmail.com',
  whatsapp: { display: '058-687-9347', url: 'https://wa.me/972586879347' },
  linkedin: { display: 'linkedin.com/in/hagai-rettig', url: 'https://linkedin.com/in/hagai-rettig' },
  github: { display: 'github.com/hagynwa', url: 'https://github.com/hagynwa' },
  siteSource: 'https://github.com/hagynwa/r-hag.ai',
};

/** Stack keywords for the ticker; not translated on purpose. */
export const stack = [
  'Gemini',
  'Supabase',
  'n8n',
  'Kafka',
  'Kubernetes',
  'Cloudera',
  'Spark',
  'Next.js',
  'FastAPI',
  'Python',
  'WhatsApp API',
  'Telegram',
  'Redis',
  'pdf-lib',
  'PyMuPDF',
  'Railway',
  'Astro',
];
