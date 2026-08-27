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
  description: `${brand.full} is an independent trader active in Bitcoin and digital asset markets since ${brand.since}, trading to a defined plan with direct client contact throughout. Reach me by email, phone or WhatsApp.`,
  ogDescription: `Independent trader in Bitcoin and digital asset markets since ${brand.since}. Trading to a defined plan, with direct client contact.`,
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
  { label: "Home", href: "/#top" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

export const primaryCta = { label: "Let's Trade", href: "/contact" };

/* ── Hero ──────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Independent Trader · Bitcoin · Digital Assets",
  headlineTop: "Patient in the market.",
  headlineItalic: "Present for the client.",
  lead: `I have traded Bitcoin and digital assets since ${brand.since} — through the quiet stretches as much as the loud ones. Alongside my own trading I take on client work, and I keep the communication direct: you speak to me, not a queue.`,
  primary: primaryCta,
  secondary: { label: "See the Service", href: "/services" },
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
  /** The home section is the summary; the page carries the rest. */
  link: { label: "More about the practice", href: "/about" },
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

/**
 * The About page. Deliberately short — three blocks and a way to get in
 * touch. The home page keeps its own About section as the summary; this is
 * where the same story is told at slightly greater length, and it should
 * not grow into a biography.
 */
export const aboutPage = {
  title: `About — ${brand.full} | Independent Bitcoin Trader`,
  description: `How ${brand.full} trades: a defined method, risk set in advance, and direct contact. Independent in Bitcoin and digital asset markets since ${brand.since}.`,
  ogDescription: `A defined method, risk set in advance, and direct contact. Independent in Bitcoin and digital assets since ${brand.since}.`,
  kicker: "About",
  headlineTop: "One trader,",
  headlineItalic: "one method.",
  lead: `No desk, no team, no platform. Since ${brand.since} it has been the same person reading the same small number of setups — and the same person you speak to when you get in touch.`,
  story: {
    kicker: "The short version",
    headline: "How it actually goes.",
    body: [
      `I started trading Bitcoin in ${brand.since} and have been in the market every year since — through the quiet stretches as much as the loud ones. The early lessons were expensive and useful in equal measure: position size matters more than conviction, and the fastest way to lose an account is to need a trade to work.`,
      "What I do now is unglamorous by design. I follow a small number of setups, I size them the same way every time, and I sit out the sessions that don't offer anything. Most of the work is waiting well, and most weeks the honest answer is that there is nothing worth doing.",
      "Clients get the same plainness. I tell you what I can do, what I can't, and what the risk looks like before anything starts — and you always deal with me directly, for as long as we work together.",
    ],
  },
  /**
   * The negative space, stated plainly. This section is the reason the page
   * exists: it is far more useful to a cautious reader than another
   * paragraph of biography. Do not soften these.
   */
  notThis: {
    kicker: "Just as important",
    headline: "What this isn't.",
    items: [
      {
        title: "Not a signal service",
        body: "No alerts to follow, no group to join, no copy-trading.",
      },
      {
        title: "Not managed money",
        body: "Client funds are never held and no account is ever traded on your behalf.",
      },
      {
        title: "Not a guarantee",
        body: "Trading can lose money, including all of it. Anyone promising otherwise is selling something else.",
      },
      {
        title: "Not a queue",
        body: "No support desk, no account manager, no automated sequence. You get me.",
      },
    ],
  },
  cta: {
    title: "Questions before anything else?",
    body: "Ask them. Method, risk, cost, or how a specific situation would be handled — a short conversation tells you more than any page will.",
    action: primaryCta,
  },
};

/* ── Services ──────────────────────────────────────────────────────────── */

export type Service = {
  /** Key into the icon map in components/service-icons.tsx */
  icon: "trend" | "bars" | "target";
  name: string;
  blurb: string;
  /** Who it suits — and, by implication, who it doesn't. */
  forWho: string;
  /** What is actually handed over. Never an outcome. */
  includes: string[];
};

export const servicesIntro = {
  kicker: "Service",
  headline: "What I actually do.",
  lead: "One thing. The analysis and the contact that come with it are part of the work, not extras sold alongside it — and if what you need is something else, ask. I'd rather refer you on than overreach.",
  /** The home section is the summary; the page carries the detail. */
  link: { label: "See what it includes", href: "/services" },
};

/**
 * ONE service. That is the whole offer, and it is deliberate — the analysis
 * and the direct contact are part of this work, not separate products.
 *
 * Do not add a second entry to make the page look fuller. If a genuinely
 * separate service ever exists (mentoring, managed accounts, signals), it
 * arrives with its own scope, its own risk language and its own page copy —
 * never as padding.
 */
export const services: Service[] = [
  {
    icon: "trend",
    name: "Bitcoin & digital asset trading",
    blurb:
      "Active participation in Bitcoin and a small number of selected digital assets, traded to a defined plan with position sizing set in advance. No promises of return — only a clear method and clear risk.",
    forWho:
      "People who want a trader with a stated method rather than a platform with a dashboard.",
    includes: [
      "A defined plan: entry, size and exit set before the position exists",
      "Position sizing agreed in advance, not adjusted mid-trade",
      "The reading behind it — levels, structure and context, in plain language",
      "An honest account of what went wrong when something does",
      "Direct contact throughout, by phone, WhatsApp or email",
    ],
  },
];

/**
 * The service page. The offer, then the two things people actually want to
 * know next — how it is priced and how it starts. There are no prices on
 * this site and none should be added: everything is scoped and quoted in
 * writing, per person.
 */
export const servicesPage = {
  title: `Service — ${brand.full} | Bitcoin & Digital Asset Trading`,
  description: `What ${brand.full} offers: Bitcoin and digital asset trading to a defined plan, with the analysis behind it and direct contact throughout. Scoped and agreed in writing before anything starts.`,
  ogDescription:
    "Bitcoin and digital asset trading to a defined plan, with the analysis behind it and direct contact throughout.",
  kicker: "Service",
  headlineTop: "One thing,",
  headlineItalic: "done properly.",
  lead: "No tiers, no bundles, no subscription — and no menu of extras. One service, described plainly enough that you can tell whether you need it, and told plainly if you don't.",
  detail: {
    forWho: "Who it's for",
    includes: "What it includes",
  },
  pricing: {
    kicker: "Cost",
    headline: "How pricing works.",
    body: [
      "There are no prices on this page, and that is deliberate. What a piece of work costs depends on its scope, and quoting a number before we have agreed the scope would be guesswork dressed up as a price list.",
      "So: we talk, the scope is written down, and a figure is agreed against it in writing before anything begins. Nothing is charged through this website, and payment details are only ever arranged directly with me.",
    ],
    points: [
      { label: "Quoted", value: "Per piece of work" },
      { label: "Agreed", value: "In writing, first" },
      { label: "Charged", value: "Never through this site" },
    ],
  },
  cta: {
    title: "Not sure it's what you need?",
    body: "Describe the situation and I'll tell you plainly whether this is a fit — including when it isn't, which is an answer worth having too.",
    action: primaryCta,
  },
};

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
  /** The home section is the summary; the page carries the years. */
  link: { label: "The years, one by one", href: "/experience" },
  rows: [
    { label: "Active since", value: brand.since },
    { label: "Primary market", value: "Bitcoin / USD" },
    { label: "Also traded", value: "Selected digital assets" },
    { label: "Specialisation", value: "Risk-defined swing entries" },
    { label: "Client contact", value: "Direct, one to one" },
  ],
};

/**
 * The experience page.
 *
 * THE RULE FOR THIS PAGE: it describes what the MARKET did and what I did
 * in response. It never states an outcome, a return, a win rate or an
 * account balance, because none of that has been evidenced here. The
 * market conditions named below are public record; the lessons are mine.
 *
 * If verified records ever exist they belong in a conversation first, and
 * on this page only with their basis and period stated in full.
 */
export const experiencePage = {
  title: `Experience — ${brand.full} | Bitcoin Trader Since ${brand.since}`,
  description: `Where the time has gone since ${brand.since}: the market conditions each year, and what they changed about how I trade. No performance claims.`,
  ogDescription: `The years since ${brand.since}, and what each one changed about the method. No performance claims.`,
  kicker: "Experience",
  headlineTop: "Years in,",
  headlineItalic: "not returns out.",
  lead: `Most trading pages lead with a number. This one can't — nothing here has been audited, and an unaudited figure is marketing. What I can set out is where the time has gone since ${brand.since}, and what each stretch of market changed about how I work.`,
  timeline: {
    kicker: "The years",
    headline: "What each one taught.",
    note: "Market conditions described here are public record. What I took from them is mine, and neither is a claim about results.",
    years: [
      {
        year: "2021",
        title: "The loud year",
        body: "I came in while everything was moving and mistook a rising market for a working method. The lesson arrived quickly and expensively: position size matters more than conviction.",
      },
      {
        year: "2022",
        title: "The year that taught most",
        body: "A long, grinding drawdown across the whole asset class. It removed any remaining appetite for trades I could not define in advance — and it is where sizing rules stopped being theory.",
      },
      {
        year: "2023",
        title: "The quiet stretch",
        body: "Ranges, thin volume, and very little worth doing. Learning to sit out without getting restless was harder than learning to enter, and more useful.",
      },
      {
        year: "2024",
        title: "Attention returns",
        body: "Noise came back, and with it the temptation to trade someone else's thesis. The answer was the one that has held since: the same small number of setups, sized the same way.",
      },
      {
        year: `2025 — today`,
        title: "Same method",
        body: "Nothing new to report, which is the point. The work now is repetition, record-keeping, and being straight with the people I work with.",
      },
    ],
  },
  /**
   * The honest half. This section is the reason the page can be trusted —
   * do not soften it, and do not add an "audited" claim that is not true.
   */
  evidence: {
    kicker: "Straight answer",
    headline: "What I can and can't show you.",
    can: {
      heading: "What I can",
      items: [
        "Talk you through the method in detail, before you commit to anything",
        "Explain how a specific situation would be handled, and what would invalidate it",
        "Tell you what I got wrong recently, and what it cost in risk terms",
        "Put the scope, the terms and the risk in writing before anything starts",
      ],
    },
    cannot: {
      heading: "What I can't",
      items: [
        "Show an audited track record — there isn't one published, and I won't imply otherwise",
        "Quote a return, a win rate or a monthly figure",
        "Promise that a method that has worked will keep working",
        "Guarantee any outcome at all, on any timeframe",
      ],
    },
  },
  cta: {
    title: "Ask the hard questions first.",
    body: "The useful test isn't a page of figures — it's whether the answers hold up when you push on them. Push on them.",
    action: primaryCta,
  },
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
    a: "One thing: trading in Bitcoin and a small number of selected digital assets, to a defined plan. The analysis behind it and the direct contact while we work together are part of that, not separate products — so there is no subscription, no tier list and no package you have to buy into.",
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
  action: { label: "Let's Trade", href: "/contact" },
};

export const riskDisclaimer = {
  heading: "Risk disclaimer",
  body: "Trading carries a substantial risk of loss, including the loss of your entire capital. Nothing on this site is investment advice, a recommendation, or an offer to buy or sell any asset, and no outcome is guaranteed. Any charts shown here are illustrative and decorative — they are not live data and not a published call. Every trading decision on your own account remains yours. Trade only with capital you can afford to lose.",
};

export const footer = {
  blurb: `Independent trading in Bitcoin and digital assets since ${brand.since}. Stay connected. Stay informed.`,
  links: [
    { label: "Home", href: "/#top" },
    { label: "Services", href: "/services" },
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
