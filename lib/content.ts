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
 *   · none outstanding — the WhatsApp number in `contact` is live copy
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

/**
 * The canonical origin. Registered at Spaceship; it must match the wordmark
 * exactly, because the site's impersonation advice tells people to check
 * anything unexpected against "the number published on this site".
 */
export const SITE_URL = "https://olatunbosunbtc.com";

export const seo = {
  title: `${brand.full} — Independent Bitcoin & Digital Asset Trader`,
  description: `${brand.full} is an independent trader active in Bitcoin and digital asset markets since ${brand.since}, trading to a defined plan with direct client contact throughout. Reach me on WhatsApp.`,
  ogDescription: `Independent trader in Bitcoin and digital asset markets since ${brand.since}. Trading to a defined plan, with direct client contact.`,
};

/**
 * WHATSAPP IS THE ONLY CHANNEL. There is no phone link, no email address
 * and no contact form endpoint anywhere on this site — one number, one
 * place to check it, which is also what makes impersonation easy to spot.
 *
 * If another channel is ever added it has to be added everywhere at once
 * (nav, footer, contact page, the "verify it's me" copy), or the
 * verification advice stops being true.
 */
export const contact = {
  /** Display form of the WhatsApp number. */
  number: "+234 705 749 7045",
  /** Digits only, no plus — the form wa.me links take. */
  whatsapp: "2347057497045",
  /** E.164, for structured data. */
  e164: "+2347057497045",
};

/**
 * Every WhatsApp link opens with this already typed, so the visitor never
 * faces an empty box. Keep it short, neutral and in the visitor's voice —
 * they can delete it in one gesture if they'd rather write their own.
 */
export const whatsappMessage =
  "Hello — I found you through your website and I'd like to ask about your Bitcoin trading service.";

export const contactHref = {
  whatsapp: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
};

/** The floating button, bottom-left on every page. */
export const whatsappButton = {
  label: "Message on WhatsApp",
  /** Shown beside the mark on wider screens. */
  short: "WhatsApp",
};

export const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
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
      "Direct contact throughout, on WhatsApp",
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
  /** The home section is the summary; the page carries the detail. */
  link: { label: "What happens at each step", href: "/how-it-works" },
  steps: [
    {
      title: "Reach out",
      body: "Send a WhatsApp message. Tell me roughly what you're looking for.",
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

/**
 * The How It Works page. The four steps at length, then the two things a
 * cautious person needs before they send anyone money: how payment is
 * handled, and what they will never be asked for.
 *
 * The security section is not decoration. Impersonation is the common harm
 * in this market, and these four lines are the ones that protect a reader
 * from someone pretending to be him. Do not trim them.
 */
export const howItWorksPage = {
  title: `How It Works — ${brand.full} | Getting Started`,
  description: `From first message to ongoing contact: what happens at each step, how terms and payment are agreed, and what you will never be asked for.`,
  ogDescription:
    "What happens at each step, how terms and payment are agreed, and what you will never be asked for.",
  kicker: "How it works",
  headlineTop: "From first message",
  headlineItalic: "to first trade.",
  lead: "Four steps, and you can stop at any of the first three at no cost. Nothing starts until the scope and the risk are in writing and you have said yes to both.",
  steps: {
    kicker: "Step by step",
    /** Paired by index with `process.steps`. */
    detail: [
      {
        expect: "A reply from me, usually within a day",
        body: "WhatsApp, on the number listed here — it is the only channel I use. A sentence or two about what you're looking for is enough to start; you don't need to arrive with a plan.",
      },
      {
        expect: "An honest read on whether this is a fit",
        body: "We go through the method, the risk, what is realistic and what it costs. This is the point where I say so if what you need isn't something I can help with — and there is no cost and no pressure to continue.",
      },
      {
        expect: "Scope, terms and risk, in writing",
        body: "Nothing is charged through this website. The scope is written down, a figure is agreed against it, and payment details are arranged directly with me after that — never through a form, and never through a wallet address posted publicly.",
      },
      {
        expect: "The same person, start to finish",
        body: "Updates as things move, answers when you ask, and a straight account when something goes against us. You will always know where things stand.",
      },
    ],
  },
  safety: {
    kicker: "Before you send anyone anything",
    headline: "What you'll never be asked for.",
    lead: "Impersonation is the common danger in this market, and it usually arrives politely. These four hold whoever is asking — including anyone using my name.",
    items: [
      {
        title: "Your account credentials",
        body: "Not a password, not a seed phrase, not a recovery code, not 2FA. Never, for any reason. Anyone asking is not me.",
      },
      {
        title: "A payment through this website",
        body: "There is no checkout here and no wallet address published anywhere on this site. Payment is arranged directly, after terms are agreed in writing.",
      },
      {
        title: "A decision inside the hour",
        body: "Nothing here expires. Urgency is a pressure tactic, not a market condition — if you're being rushed, that alone is your answer.",
      },
      {
        title: "Silence about it",
        body: "Nothing about this arrangement needs to be kept secret. Check anything unexpected against the WhatsApp number on this site before you act on it.",
      },
    ],
  },
  cta: {
    title: "Start with a question.",
    body: "You can stop after any of the first three steps at no cost. The first one is just a message.",
    action: primaryCta,
  },
};

/* ── FAQ ───────────────────────────────────────────────────────────────── */

export const faqIntro = {
  kicker: "Frequently asked",
  headline: "The questions people actually ask.",
  lead: "If what you need isn't answered here, send the question over. A straight question gets a straight answer.",
  /** The home section shows the same list; the page is its permanent home. */
  link: { label: "All the questions", href: "/faq" },
};

export const faqPage = {
  title: `FAQ — ${brand.full} | Questions About Trading & Working Together`,
  description:
    "Straight answers on what is offered, guarantees, payment, reply times, what information is needed, and how to verify you are dealing with the real account.",
  ogDescription:
    "Straight answers on the offer, guarantees, payment, reply times and verifying who you are dealing with.",
  kicker: "FAQ",
  headlineTop: "Straight questions,",
  headlineItalic: "straight answers.",
  lead: "The ones that come up most, answered the way they would be answered in a message. If yours isn't here, send it — a question I can't answer plainly is worth knowing about.",
  closing: {
    title: "Still asking?",
    body: "Send the question over. There's no obligation attached to it, and you'll get a real answer rather than a brochure.",
    action: primaryCta,
  },
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
    a: "WhatsApp, on the number published on this site. It is the only channel I use — there is no support email, no second account and no one answering on my behalf. That is deliberate: one number is one thing for you to check.",
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
    a: "Check it against the WhatsApp number published on this site before you act on it. That number is the only one that is mine. Impersonation is common in this market — a message, an address or an account carrying my name means nothing until you have checked it here.",
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
    { label: "FAQ", href: "/faq" },
    { label: "Risk disclaimer", href: "/#disclaimer" },
  ],
  legal: `Trading involves risk of loss. Nothing on this site is financial advice.`,
};

/* ── Contact page ──────────────────────────────────────────────────────── */

export const contactPage = {
  title: `Contact — ${brand.full} | WhatsApp`,
  description: `Message ${brand.full} on WhatsApp. One number, answered personally — independent Bitcoin and digital asset trader, active since ${brand.since}.`,
  ogDescription:
    "Message an independent Bitcoin and digital asset trader on WhatsApp. One number, answered personally.",
  kicker: "Contact",
  headline: "Let's talk.",
  lead: "Have a question or want to discuss the service? WhatsApp is the way to reach me — it's the only channel I use, and I answer my own messages, usually within a day.",
  /** The single channel, stated as such. */
  channel: {
    label: "WhatsApp",
    value: "Message me on WhatsApp",
    number: contact.number,
    href: contactHref.whatsapp,
  },
  onlyNote:
    "This number is the only way to reach me. There is no support email and no other account — anything arriving from elsewhere in my name is not me.",
  form: {
    heading: "Rather write it out first?",
    lead: "Fill this in and it opens WhatsApp with your message already written. Nothing is sent from this page.",
    submit: "Open WhatsApp",
    privacy:
      "Nothing is submitted to this website — the button opens WhatsApp with your text ready to send. Trading carries risk of loss; nothing here is financial advice.",
  },
  assurances: [
    {
      title: "No payments here",
      body: "Nothing is charged through this website. Anything to do with payment is agreed with me directly, in writing, first.",
    },
    {
      title: "Verify it's me",
      body: "Only the WhatsApp number on this page is mine. If a message or wallet address arrives in my name from anywhere else, check it here before acting.",
    },
    {
      title: "Ask anything",
      body: "Risk, method, cost, timelines. If a service isn't right for you, I'll say so — that's a better outcome for both of us.",
    },
  ],
};
