/**
 * All site copy lives here.
 *
 * VOICE — first person singular. This is one trader speaking, not a firm:
 * "I trade", never "we offer". Plain, unhurried, and never promissory. No
 * sentence on this site may imply a return, a guarantee or a track record
 * that has not been evidenced.
 *
 * This is a brand, not a personal page — there is no portrait anywhere on
 * the site and none should be added.
 *
 * PLACEHOLDERS — must be replaced before launch:
 *   · contactPage.emailNote — confirm the address is live and delete the note
 * There are deliberately no performance figures, no client counts and no
 * testimonials anywhere in this file. Do not invent them.
 */

export const brand = {
  /** Wordmark line 1. */
  name: "Olatunbosunbtc",
  /** Wordmark line 2, sitting under the name at wide tracking. */
  role: "Exchange",
  /** Full form, for prose, legal lines and metadata. */
  full: "Olatunbosunbtc Exchange",
  /** The letter inside the rotated square of the mark. */
  monogram: "O",
  since: "2021",
};

export const seo = {
  title: `${brand.full} — Independent Bitcoin & Digital Asset Trader`,
  description: `${brand.full} is an independent trader active in Bitcoin and digital asset markets since ${brand.since}, offering trading services and direct client support. Get in touch by email, phone or WhatsApp.`,
  ogDescription: `Independent trader in Bitcoin and digital asset markets since ${brand.since}. Trading services and direct client support.`,
};

export const contact = {
  email: "hello@olatunbosunbtc.com",
  /** Display form. */
  phone: "+234 705 749 7045",
  phoneHref: "tel:+2347057497045",
  /** E.164, for structured data. */
  phoneE164: "+2347057497045",
  /** Digits only, no plus — the form wa.me links take. */
  whatsapp: "2347057497045",
};

export const contactHref = {
  phone: contact.phoneHref,
  whatsapp: `https://wa.me/${contact.whatsapp}`,
  email: `mailto:${contact.email}`,
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

export const primaryCta = { label: "Get in Touch", href: "/contact" };

/* ── Hero ──────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Independent Trader · Bitcoin · Digital Assets",
  headlineTop: "Patient in the market.",
  headlineItalic: "Present for the client.",
  lead: `I have traded Bitcoin and digital assets since ${brand.since} — through the quiet stretches as much as the loud ones. Alongside my own trading I take on client work, and I keep the communication direct: you speak to me, not a queue.`,
  primary: primaryCta,
  secondary: { label: "Explore Services", href: "#services" },
};

/**
 * The hero chart card. The series is illustrative of the *shape* of a
 * market — it is not live data and not a published call, and the card says
 * so on its face. Do not relabel it as anything else without wiring a real
 * data source behind it.
 */
export const heroPanel = {
  instrument: "BTC / USD",
  disclaimer: ["Illustrative", "Not live data"],
  facts: [
    { label: "Focus", value: "Bitcoin" },
    { label: "Active since", value: brand.since },
    { label: "Approach", value: "Risk first" },
  ],
  glass: {
    kicker: "Market insight",
    line: "Structure over noise.",
  },
};

/** How long each carousel slide holds before advancing. */
export const SLIDE_INTERVAL_MS = 6500;

/**
 * The hero carousel. Four faces of the same card — the chart, the method,
 * the week, and what working together looks like.
 *
 * Every one of these is a statement about PROCESS. None of them may become
 * a number, a return, a call or a claim: the card sits above the fold and
 * is the most-read thing on the site.
 */
export const heroSlides = [
  {
    id: "structure",
    /** Tab label. `kicker` and `title` are the card's own two header lines. */
    name: "Market structure",
    kicker: "Market structure",
    title: heroPanel.instrument,
    kind: "chart" as const,
  },
  {
    id: "method",
    name: "The method",
    kicker: "How I trade",
    title: "Four rules",
    kind: "list" as const,
    lead: "Four rules, applied the same way every session.",
    rows: [
      { label: "Discipline", value: "The plan decides" },
      { label: "Risk", value: "Downside costed first" },
      { label: "Patience", value: "Sitting out is a position" },
      { label: "Consistency", value: "Same method, every session" },
    ],
  },
  {
    id: "week",
    name: "A week's work",
    kicker: "A week's work",
    title: "Waiting well",
    kind: "notes" as const,
    lead: "Illustrative of the shape of a week — not a record of trades.",
    notes: [
      { day: "Mon", title: "Range intact above support", note: "Nothing to force" },
      { day: "Tue", title: "Volume thinning into the highs", note: "Watching for a failed push" },
      { day: "Wed", title: "Reclaim attempt, size kept small", note: "Level held on retest" },
      { day: "Thu", title: "No clear read — sitting out", note: "Said so plainly" },
    ],
  },
  {
    id: "working",
    name: "Working together",
    kicker: "Working together",
    title: "Direct, one to one",
    kind: "list" as const,
    lead: "No account to open, no platform to sign up for.",
    rows: [
      { label: "First reply", value: "Usually within a day" },
      { label: "Terms", value: "In writing, before anything starts" },
      { label: "Payment", value: "Never through this site" },
      { label: "Contact", value: "Direct, one to one" },
    ],
  },
];

export const focusStrip = {
  kicker: "Focused on",
  items: ["Bitcoin", "Digital assets", "Market analysis", "Client service"],
  note: `Est. ${brand.since}`,
};

/* ── About ─────────────────────────────────────────────────────────────── */

export const about = {
  kicker: "About",
  headline: "More than the market.",
  body: [
    `I started trading Bitcoin in ${brand.since} and have been in the market every year since. The early lessons were expensive and useful in equal measure: position size matters more than conviction, and the fastest way to lose an account is to need a trade to work.`,
    "What I do now is unglamorous by design. I follow a small number of setups, I size them the same way every time, and I sit out the sessions that don't offer anything. Most of the work is waiting well.",
    "Clients get the same plainness. I tell you what I can do, what I can't, and what the risk looks like before anything starts — and you always deal with me directly.",
  ],
  meta: [
    { label: "Since", value: brand.since },
    { label: "Primary market", value: "Bitcoin" },
    { label: "Contact", value: "Direct" },
  ],
};

/* ── Services ──────────────────────────────────────────────────────────── */

export type Service = {
  /** Key into the icon map in services-section.tsx */
  icon: "trend" | "bars" | "target";
  name: string;
  blurb: string;
};

export const servicesIntro = {
  kicker: "Services",
  headline: "What I actually do.",
  lead: "A short list, kept honest. If something you need isn't here, ask — I'd rather refer you on than overreach.",
};

/**
 * Three, on purpose. A fourth (mentoring, managed accounts, signals) can be
 * added when there is a real one to describe — do not pad this list.
 */
export const services: Service[] = [
  {
    icon: "trend",
    name: "Bitcoin & digital asset trading",
    blurb:
      "Active participation in Bitcoin and a small number of selected digital assets, traded to a defined plan with position sizing set in advance. No promises of return — only a clear method and clear risk.",
  },
  {
    icon: "bars",
    name: "Market analysis",
    blurb:
      "The reading behind the trading — levels, structure and context, explained in plain terms so you understand why a decision was made.",
  },
  {
    icon: "target",
    name: "Client support",
    blurb:
      "Reachable on phone, WhatsApp or email. Questions answered by me, in normal language, for as long as we work together.",
  },
];

/* ── Philosophy ────────────────────────────────────────────────────────── */

export const philosophy = {
  kicker: "Philosophy",
  headline: "Four rules I don't break.",
  rules: [
    {
      label: "Discipline",
      title: "The plan decides, not the mood",
      body: "Entry, size and exit are written before the position exists.",
    },
    {
      label: "Risk",
      title: "Downside gets the first look",
      body: "What it costs to be wrong is decided before what it might earn.",
    },
    {
      label: "Patience",
      title: "Not every move is an invitation",
      body: "Sitting out is a position. Most weeks it's the right one.",
    },
    {
      label: "Consistency",
      title: "Same method, every session",
      body: "Boring repetition compounds. Improvisation doesn't.",
    },
  ],
};

/* ── Experience ────────────────────────────────────────────────────────── */

/**
 * NO PERFORMANCE CLAIMS. These rows describe where the time goes, nothing
 * more. If verified figures are ever supplied they belong here with their
 * basis stated — never as bare numbers.
 */
export const experience = {
  kicker: "Experience",
  headline: "Experience & market focus.",
  lead: "No performance claims on this page. What follows is simply where I spend my time and how long I've been doing it.",
  link: { label: "Ask about specifics", href: "/contact" },
  rows: [
    { label: "Active since", value: brand.since },
    { label: "Primary market", value: "Bitcoin / USD" },
    { label: "Also traded", value: "Selected digital assets" },
    { label: "Specialisation", value: "Risk-defined swing entries" },
    { label: "Client contact", value: "Direct, one to one" },
  ],
};

export const marketSection = {
  kicker: "The market I watch most",
  headline: "Bitcoin, over cycles.",
  note: "Illustrative chart. Decorative only — not live data, not a recommendation.",
  ticks: [brand.since, "2022", "2023", "2024", "2025", "Today"],
};

/* ── How it works ──────────────────────────────────────────────────────── */

export const process = {
  kicker: "How it works",
  headline: "Four steps, no mystery.",
  steps: [
    {
      title: "Reach out",
      body: "Call, WhatsApp or email. Tell me roughly what you're looking for.",
    },
    {
      title: "Talk it through",
      body: "We go over the service, the risk, what's realistic and what it costs. No pressure to continue.",
    },
    {
      title: "Agree and begin",
      body: "Terms confirmed in writing first — including payment details, which are only ever arranged directly with me.",
    },
    {
      title: "Stay in contact",
      body: "Updates and answers throughout. You'll always know where things stand.",
    },
  ],
  cta: {
    title: "Ready to get started?",
    body: "There's nothing to pay on this website. Speak to me first, we confirm the service in writing, and payment details are arranged privately after that — never through a form or a wallet address posted publicly.",
    action: { label: "Start a conversation", href: "/contact" },
  },
};

/* ── FAQ ───────────────────────────────────────────────────────────────── */

export const faqIntro = {
  kicker: "Frequently asked",
  headline: "The questions people actually ask.",
  lead: "If what you need isn't answered here, send the question over. A straight question gets a straight answer.",
};

export const faqs = [
  {
    q: "What exactly do you offer?",
    a: "Three things: trading in Bitcoin and a small number of selected digital assets, the market analysis behind it, and direct support while we work together. There is no subscription, no tier list and no package you have to buy into.",
  },
  {
    q: "Do you guarantee a return?",
    a: "No, and treat anyone who does as a warning sign. Trading carries a genuine risk of losing money, including all of it. What I can offer is a defined method, risk stated in advance, and an honest account of what happened.",
  },
  {
    q: "How do I get in touch?",
    a: "Phone, WhatsApp or email — all three reach me directly, and the numbers on this site are the only ones that are mine. There is no support queue and no one answering on my behalf.",
  },
  {
    q: "How do payments work?",
    a: "Nothing is charged through this website. Terms and payment details are agreed with me directly and confirmed in writing before anything begins. No wallet address is ever posted publicly, and any that appears in my name elsewhere is not mine.",
  },
  {
    q: "How quickly do you reply?",
    a: "Usually within a day. If I'm going to be slower than that, you'll be told rather than left waiting.",
  },
  {
    q: "What information do you need from me?",
    a: "Enough to understand what you're asking for, and no more. Account credentials are never needed and will never be requested — if anyone asks you for them in my name, that is not me.",
  },
  {
    q: "Can I ask questions before committing?",
    a: "Please do. Ask about the method, the risk, the cost, or how a specific situation would be handled. If a short conversation doesn't leave you comfortable, that is a good reason not to proceed, and I'd rather you didn't.",
  },
  {
    q: "How can I verify it's really you?",
    a: "Confirm anything unexpected by phone on the number listed on this site before you act on it. Impersonation is common in this market — a message, an address or an account carrying my name means nothing until you have checked it against the details here.",
  },
];

/* ── Closing ───────────────────────────────────────────────────────────── */

export const finalCta = {
  headlineTop: "Ready to talk it",
  headlineItalic: "through?",
  body: "Get in touch directly. We'll work out whether what you need is something I can help with — and I'll say so plainly if it isn't.",
  action: { label: "Get in Touch", href: "/contact" },
};

export const riskDisclaimer = {
  heading: "Risk disclaimer",
  body: "Trading carries a substantial risk of loss, including the loss of your entire capital. Nothing on this site is investment advice, a recommendation, or an offer to buy or sell any asset, and no outcome is guaranteed. Any charts shown here are illustrative and decorative — they are not live data and not a published call. Every trading decision on your own account remains yours. Trade only with capital you can afford to lose.",
};

export const footer = {
  blurb: `Independent trading in Bitcoin and digital assets since ${brand.since}. Stay connected. Stay informed.`,
  links: [
    { label: "Home", href: "/#top" },
    { label: "Services", href: "/#services" },
    { label: "FAQ", href: "/#faq" },
    { label: "Risk disclaimer", href: "/#disclaimer" },
  ],
  legal: `Trading involves risk of loss. Nothing on this site is financial advice.`,
};

/* ── Contact page ──────────────────────────────────────────────────────── */

export const contactPage = {
  title: `Contact — ${brand.full} | Independent Bitcoin Trader`,
  description: `Contact ${brand.full} directly by phone, WhatsApp, email or written enquiry. Independent Bitcoin and digital asset trader, active since ${brand.since}.`,
  ogDescription:
    "Speak directly with an independent Bitcoin and digital asset trader. Phone, WhatsApp, email or written enquiry.",
  kicker: "Contact",
  headline: "Let's talk.",
  lead: "Have a question or want to discuss a service? Reach out directly. I answer my own messages, usually within a day.",
  /** PLACEHOLDER — confirm the address is live, then delete this note. */
  emailNote:
    "The email address above is a placeholder — send me the real one and I'll swap it in. No payment is ever taken through this site.",
  channels: [
    {
      icon: "phone" as const,
      label: "Phone",
      value: contact.phone,
      href: contactHref.phone,
    },
    {
      icon: "whatsapp" as const,
      label: "WhatsApp",
      value: "Message me on WhatsApp",
      href: contactHref.whatsapp,
    },
    {
      icon: "mail" as const,
      label: "Email",
      value: contact.email,
      href: contactHref.email,
    },
  ],
  form: {
    heading: "Send an enquiry",
    lead: "A few details are enough. I'll reply on whichever channel you prefer.",
    replyOptions: ["WhatsApp", "Phone call", "Email"],
    submit: "Send enquiry",
    privacy:
      "Your details are used only to reply to this enquiry. Trading carries risk of loss; nothing here is financial advice.",
  },
  assurances: [
    {
      title: "No payments here",
      body: "Nothing is charged through this website. Anything to do with payment is agreed with me directly, in writing, first.",
    },
    {
      title: "Verify it's me",
      body: "Only the number and address on this page are mine. If a message or wallet address arrives in my name elsewhere, confirm it by phone before acting.",
    },
    {
      title: "Ask anything",
      body: "Risk, method, cost, timelines. If a service isn't right for you, I'll say so — that's a better outcome for both of us.",
    },
  ],
};
