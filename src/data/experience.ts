import type { L } from '../i18n';

export interface Role {
  from: string;
  to: string | null; // null = present
  role: L;
  org: L;
  bullets: L<string[]>;
  current?: boolean;
}

export const roles: Role[] = [
  {
    from: '2023',
    to: null,
    current: true,
    role: { en: 'Managing AI & Big Data Software Development', he: 'מנהל פיתוח תוכנה AI ו-Big Data' },
    org: { en: 'Maccabi Healthcare Services', he: 'מכבי שירותי בריאות' },
    bullets: {
      en: [
        'End-to-end agentic AI and low-code automation across HealthTech, customer service and back office',
        'Generative AI rollout across the organization',
        'Scalable data pipelines on Kafka, Cloudera and Kubernetes',
        '5 IT awards, including “Most Innovative Organization in Israel”',
      ],
      he: [
        'פתרונות Agentic AI ואוטומציית low-code מקצה לקצה: הלת׳טק, שירות לקוחות ו-Back Office',
        'הטמעת Generative AI ברחבי הארגון',
        'צינורות דאטה סקיילביליים על Kafka, Cloudera ו-Kubernetes',
        '5 פרסי IT, כולל ״הארגון החדשני ביותר בישראל״',
      ],
    },
  },
  {
    from: '2019',
    to: null,
    role: { en: 'MBA Lecturer', he: 'מרצה בתוכנית ה-MBA' },
    org: { en: 'Ono Academic College', he: 'הקריה האקדמית אונו' },
    bullets: {
      en: ['AI and technology strategy for managers who need to decide, not code'],
      he: ['אסטרטגיית AI וטכנולוגיה למנהלים שצריכים להחליט, לא לקודד'],
    },
  },
  {
    from: '2019',
    to: '2023',
    role: { en: 'Director, Consulting & Data', he: 'מנהל ייעוץ ודאטה' },
    org: { en: 'Moore Management Consulting', he: 'Moore Management Consulting' },
    bullets: {
      en: [
        'Advised C-level teams on business, technology and marketing strategy',
        'Built data-driven tools and processes that changed how service was delivered',
      ],
      he: [
        'ייעוץ להנהלות בכירות באסטרטגיה עסקית, טכנולוגית ושיווקית',
        'פיתוח כלים ותהליכים מבוססי דאטה ששינו את אופן מתן השירות',
      ],
    },
  },
  {
    from: '2016',
    to: '2019',
    role: { en: 'Senior Project Manager', he: 'מנהל פרויקטים בכיר' },
    org: { en: 'Applied Materials', he: 'Applied Materials' },
    bullets: {
      en: ['Cross-functional projects in the semiconductor industry, in partnership with R&D'],
      he: ['פרויקטים חוצי-ארגון בתעשיית השבבים, בשיתוף עם R&D'],
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
  org: { en: 'Givati Brigade, IDF', he: 'חטיבת גבעתי, צה״ל' },
};

export interface TeachingItem {
  title: L;
  body: L;
  link?: string;
}

export const teaching: TeachingItem[] = [
  {
    title: { en: 'MBA lecturer, Ono Academic College', he: 'מרצה MBA, הקריה האקדמית אונו' },
    body: {
      en: 'Since 2019: AI and technology strategy for managers who need to decide, not code.',
      he: 'מאז 2019: אסטרטגיית AI וטכנולוגיה למנהלים שצריכים להחליט, לא לקודד.',
    },
  },
  {
    title: { en: 'AI First Israel community', he: 'קהילת AI First Israel' },
    body: {
      en: 'Leading a community of practitioners who build with AI instead of talking about it.',
      he: 'מוביל קהילה של אנשים שבונים עם AI במקום לדבר עליו.',
    },
  },
  {
    title: { en: '“Talking AI”, a deck for tech leadership', he: '״מדברים AI״, מצגת להנהלת טכנולוגיות' },
    body: {
      en: 'An open, single-file, right-to-left presentation on what LLMs are, how they work and how to adopt them properly. Built for the leadership of Maccabi’s technology division.',
      he: 'מצגת פתוחה בקובץ אחד, מימין לשמאל, על מה זה LLM, איך זה עובד ואיך מטמיעים נכון. נבנתה להנהלת חטיבת הטכנולוגיות של מכבי.',
    },
    link: 'https://github.com/hagynwa/maccabi-ai-deck',
  },
];

export const contact = {
  email: 'hagai.rettig@gmail.com',
  whatsapp: { display: '058-687-9347', url: 'https://wa.me/972586879347' },
  phone: { display: '+972-52-311-4977', url: 'tel:+972523114977' },
  linkedin: { display: 'linkedin.com/in/hagai-rettig', url: 'https://linkedin.com/in/hagai-rettig' },
  github: { display: 'github.com/hagynwa', url: 'https://github.com/hagynwa' },
  siteSource: 'https://github.com/hagynwa/r-hag.ai',
};
