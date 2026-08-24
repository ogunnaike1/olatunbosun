/**
 * All site copy lives here. Voice: brand ("Olatunbosun", "we"), never
 * first-person singular. Address the reader as "you".
 *
 * PLACEHOLDERS — must be replaced before launch:
 *   · contact.* (email, phone, every social handle)
 *   · performance.stats  — no verified figures were supplied
 *   · testimonials       — deliberately empty; never fabricate these
 */

export const brand = {
  name: "Olatunbosun",
  role: "Trader",
};

export const contact = {
  email: "hello@olatunbosun.com",
  phone: "+000 000 0000",
  phoneHref: "tel:+0000000000",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export const primaryCta = { label: "Contact Me", href: "#contact" };

export const hero = {
  status: "Available for new clients",
  note: "Replies within one working day",
  headlineTop: "Professional trading.",
  headlineItalic: "Clear process.",
  headlineEnd: "Trusted service.",
  lead: "Olatunbosun works directly with clients who want considered market analysis, structured mentorship and an honest second opinion — not a platform, and not a promise.",
  primary: { label: "Contact Me", href: "#contact" },
  secondary: { label: "View Services", href: "#services" },
};

/** Static credential strip under the hero. Deliberately not a marquee. */
export const credentials = [
  { label: "Trading since", value: "2016" },
  { label: "Focus", value: "Bitcoin & major FX" },
  { label: "Delivery", value: "Written analysis" },
  { label: "Access", value: "Direct, no queue" },
];

/** Three facts sitting under the hero CTAs. */
export const heroFacts = [
  { label: "First reply", value: "Within one working day" },
  { label: "Terms", value: "Agreed in writing" },
  { label: "Client list", value: "Kept small" },
];

export const about = {
  kicker: "About",
  rail: "Market analysis & mentorship",
  headlineTop: "We trade our own book,",
  headlineItalic: "and work with a small number of clients.",
  lead: "Olatunbosun began trading properly in 2016, after two years of losing money slowly and learning exactly why. Most of the process used today came out of that period — written analysis, sizing rules that are actually followed, and the habit of saying plainly when there is no read.",
  body: [
    "The focus is Bitcoin and the major FX pairs, traded discretionarily and around levels. This is not a signal service and it does not manage anyone else's money. What is on offer is analysis, process and time — explained clearly enough that you are able to disagree with it.",
    "Clients come here because they want a real person to talk to. You deal with the same trader from the first message to the last. The client list is kept small on purpose, because the service stops being worth paying for the moment it turns into a mailing list.",
  ],
  meta: [
    { label: "Approach", value: "Discretionary, level-based" },
    { label: "Focus", value: "Bitcoin and major FX" },
    { label: "Working since", value: "2016" },
  ],
};

export type Service = {
  /** Key into the icon map in services-section.tsx */
  icon: string;
  name: string;
  blurb: string;
  forWho: string;
  receives: string[];
};

export const servicesIntro = {
  kicker: "Services",
  headlineTop: "What you can actually",
  headlineItalic: "hire us for.",
  lead: "Five services, priced individually. Each one is scoped in writing before it starts, so you know what you are getting and what it costs.",
  cta: "Discuss a Service",
};

export const services: Service[] = [
  {
    icon: "chart",
    name: "Market Analysis",
    blurb:
      "A written read on the instruments you trade — the levels being watched, what would invalidate them, and where the risk sits.",
    forWho: "Traders who want a considered second opinion before they commit.",
    receives: [
      "Written analysis of up to three instruments",
      "Marked-up charts with the levels and the reasoning",
      "A follow-up message to answer questions on it",
    ],
  },
  {
    icon: "mentor",
    name: "One-to-One Mentorship",
    blurb:
      "Structured sessions built around your actual trading, not a generic syllabus. Work starts with what you are doing now and fixes it in order of what is costing you most.",
    forWho:
      "Newer traders, and experienced ones stuck in a pattern they can see but cannot break.",
    receives: [
      "Scheduled one-to-one sessions",
      "A written plan you keep, updated as you go",
      "Direct access between sessions for questions",
    ],
  },
  {
    icon: "review",
    name: "Trade Reviews",
    blurb:
      "You send your recent trades — entries, exits, the reasoning at the time. What comes back is an honest written review of what held up and what did not.",
    forWho:
      "Active traders who suspect the problem is in their execution rather than their ideas.",
    receives: [
      "Written review of an agreed number of trades",
      "Specific, prioritised changes to make",
      "A short call to walk through the review",
    ],
  },
  {
    icon: "risk",
    name: "Risk & Position Sizing Review",
    blurb:
      "A look at how much you are actually risking, how correlated your positions are, and whether your sizing matches the account you are trading.",
    forWho: "Anyone holding several positions who has never checked what they add up to.",
    receives: [
      "Written review of current exposure and sizing",
      "A sizing framework matched to your account",
      "Clear rules you can apply on your own",
    ],
  },
  {
    icon: "briefing",
    name: "Weekly Market Briefing",
    blurb:
      "A written briefing each week covering what is being watched and why — including the weeks where the honest answer is that the picture is unclear.",
    forWho: "Clients who want to stay informed without a standing engagement.",
    receives: [
      "One written briefing per week",
      "Levels and context for the coming week",
      "Reply access for follow-up questions",
    ],
  },
];

export const experience = {
  kicker: "Experience",
  headline:
    "A record of the work, not a sales figure. Historical only — nothing here indicates future results.",
  /**
   * PLACEHOLDER FIGURES. No verified records were supplied for these. Replace
   * with real numbers that can be evidenced, or delete the section entirely —
   * the on-page note below stays until they are verified.
   */
  stats: [
    { value: 9, decimals: 0, suffix: "+", label: "Years trading" },
    { value: 140, decimals: 0, suffix: "+", label: "Clients worked with" },
    { value: 600, decimals: 0, suffix: "+", label: "Sessions delivered" },
    { value: 24, decimals: 0, suffix: "h", label: "Typical reply time" },
  ],
  disclaimerNote:
    "Figures shown are placeholders pending verified records. Any performance information published here is historical and does not indicate future results.",
};

export const howItWorks = {
  kicker: "How it works",
  headlineTop: "Four steps,",
  headlineItalic: "no account required.",
  steps: [
    {
      title: "Get in touch",
      body: "Send a message through the form on this site, WhatsApp, Telegram or email — whichever you already use. It arrives directly, not in a queue.",
    },
    {
      title: "Discuss your needs",
      body: "Tell us what you are looking for and you will get an honest answer on whether it is something we can help with, and what it would involve.",
    },
    {
      title: "Confirm the service",
      body: "Scope, terms, timeline and payment method are agreed in writing before anything begins. No open-ended arrangements.",
    },
    {
      title: "The work begins",
      body: "The agreed service is carried out and you are kept informed throughout. If something changes, or a call turns out to be wrong, you hear it here first.",
    },
  ],
};

export const trust = {
  kicker: "Why work with us",
  headlineTop: "Reasons to feel",
  headlineItalic: "comfortable getting in touch.",
  lead: "No badges, no certifications that were not earned, and no numbers that cannot be evidenced. These are the things we can stand behind.",
  points: [
    {
      title: "You deal with the trader directly",
      body: "Every message, every session and every piece of analysis comes from the same person you first spoke to. There is no support queue and no account manager in between.",
    },
    {
      title: "Terms are agreed before anything starts",
      body: "Scope, timeline, price and payment method go in writing first. You know exactly what you are buying before you pay for it.",
    },
    {
      title: "You are told when the read is not there",
      body: "Some weeks the market offers nothing clear. You will be told that, rather than handed a manufactured view to justify the invoice.",
    },
    {
      title: "Written first, spoken second",
      body: "Analysis and reviews arrive in writing so you can return to them, check them against what actually happened, and hold us to what was said.",
    },
    {
      title: "Reachable on the channels you already use",
      body: "WhatsApp, Telegram, Instagram or email. Use whichever is easiest — they all reach the same person.",
    },
    {
      title: "Realistic expectations, stated up front",
      body: "There is no certainty on sale here, no guaranteed return and no system that cannot lose. Trading carries real risk and you will be told so plainly.",
    },
  ],
};

export type Testimonial = {
  name: string;
  quote: string;
  service?: string;
};

/**
 * DELIBERATELY EMPTY. The testimonials section renders nothing until real,
 * client-approved reviews are added here. Do not invent entries.
 */
export const testimonials: Testimonial[] = [];

export const faqIntro = {
  kicker: "Frequently asked",
  headlineTop: "The questions",
  headlineItalic: "people actually ask.",
  lead: "If what you need is not answered here, send the question over. A straight question gets a straight answer.",
};

export const faqs = [
  {
    q: "What services do you offer?",
    a: "Five: written market analysis, one-to-one mentorship, trade reviews, risk and position sizing reviews, and a weekly written market briefing. Each is scoped and priced individually — there is no subscription tier or package you have to buy into.",
  },
  {
    q: "How does the process work?",
    a: "You get in touch, the requirement is discussed properly, the scope and price are confirmed in writing, you approve it, and the work begins. Four steps, and you can stop at any of the first three at no cost.",
  },
  {
    q: "How do I contact you?",
    a: "Through the form on this page, or directly on WhatsApp, Telegram, Instagram or email. They all reach the same person. The form is usually fastest because it sets out what you need before the conversation starts.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfer and the common digital payment methods. The method and the amount are agreed in writing before the work starts, and you receive an invoice. Client funds are never held for trading, and no client account is ever traded on your behalf.",
  },
  {
    q: "How long does the process take?",
    a: "Analysis and reviews are typically returned within two to three working days of the brief being agreed. Mentorship runs to a schedule set with you. If something will take longer, you are told before you commit, not after.",
  },
  {
    q: "What information do I need to provide?",
    a: "For analysis: the instruments you trade and your timeframe. For a review: your recent trades and the thinking behind them at the time. For mentorship: an honest account of where you are. Nothing sensitive — account credentials are never needed and will never be requested.",
  },
  {
    q: "What are the risks involved?",
    a: "Trading carries a genuine risk of losing money, including all of it. Nothing provided here removes that risk or guarantees a result. Analysis is opinion and can be wrong. Every decision taken on your account remains yours, and you should only trade with money you can afford to lose.",
  },
  {
    q: "How do you communicate with clients?",
    a: "Primarily in writing, so there is a record you can return to. Calls where a conversation is genuinely faster. Messages are answered personally, usually within a working day, and you are told in advance if that will be slower.",
  },
  {
    q: "How can I verify your service?",
    a: "Ask direct questions before paying anything — about the approach, how a specific situation would be handled, or what was called wrong recently. A short conversation tells you more than a wall of testimonials. If those questions cannot be answered plainly, do not hire us.",
  },
  {
    q: "What happens after I make contact?",
    a: "You get a personal reply, usually within a working day, with questions about what you need. There is no automated sequence, no sales call booked into a funnel, and no obligation to proceed.",
  },
];

export const finalCta = {
  headlineTop: "Ready to discuss",
  headlineItalic: "your trading needs?",
  body: "Get in touch directly and let's work out which service is right for you — or whether you need one at all.",
  cta: { label: "Contact Us", href: "#contact" },
};

export const contactIntro = {
  kicker: "Contact",
  headlineTop: "Contact us.",
  headlineItalic: "Let's talk.",
  lead: "Have a question or interested in working together? Send a message and let's discuss what you need.",
};

/** PLACEHOLDER HANDLES — replace every href before launch. */
export const channels = [
  {
    icon: "whatsapp-logo",
    name: "WhatsApp",
    handle: "Message directly",
    href: "https://wa.me/0000000000",
  },
  {
    icon: "telegram-logo",
    name: "Telegram",
    handle: "@placeholder",
    href: "https://t.me/placeholder",
  },
  {
    icon: "instagram-logo",
    name: "Instagram",
    handle: "@placeholder",
    href: "https://instagram.com/placeholder",
  },
  {
    icon: "envelope-simple",
    name: "Email",
    handle: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: "phone",
    name: "Phone",
    handle: contact.phone,
    href: contact.phoneHref,
  },
] as const;

export const contactMethods = ["Email", "WhatsApp", "Telegram", "Instagram", "Phone call"];

export const serviceOptions = [
  ...services.map((s) => s.name),
  "Not sure yet — need advice",
];

export const footerColumns = [
  {
    heading: "Site",
    links: navLinks.map((l) => ({ label: l.label, href: l.href })),
  },
  {
    heading: "Services",
    links: services.map((s) => ({ label: s.name, href: "#services" })),
  },
];

export const footerBlurb =
  "Market analysis, mentorship and trade reviews, delivered directly to a small number of clients.";

export const riskDisclaimer =
  "Trading carries a substantial risk of loss, including the loss of your entire capital. Nothing on this site is investment advice, a recommendation, or an offer to buy or sell any asset, and no outcome is guaranteed. Any performance information shown is historical and does not indicate future results. Services provided are analysis, education and review only — client funds are never held or traded on a client's behalf. All trading decisions remain your own. Trade only with capital you can afford to lose.";

/* ── Hero panel ────────────────────────────────────────────────────────── */

export const SLIDE_INTERVAL_MS = 6000;

export const slides = [
  { id: "analysis", name: "Market analysis" },
  { id: "record", name: "Historical record" },
  { id: "notes", name: "This week's notes" },
  { id: "working", name: "Working together" },
];

/** Illustrative of the format, not a published call. */
export const analysisPanel = {
  instrument: "BTC / USD",
  timeframe: "4H",
  summary: "Range holding. Watching the reclaim.",
  levels: [
    { label: "Invalidation", value: "66,900" },
    { label: "Key level", value: "68,400" },
    { label: "Upside target", value: "71,200" },
  ],
};

export const recordPanel = {
  label: "Historical — not indicative of future results",
  caption: "Illustrative equity curve. Verified records supplied on request.",
  rows: [
    { label: "Period", value: "Rolling 12 months" },
    { label: "Approach", value: "Discretionary" },
    { label: "Basis", value: "Own capital" },
  ],
};

export const notesPanel = [
  {
    day: "Mon",
    title: "Range still intact above support",
    note: "No reason to force a position",
  },
  { day: "Tue", title: "Volume thinning into the highs", note: "Watching for a failed push" },
  { day: "Wed", title: "Reclaim attempt, size kept small", note: "Level held on retest" },
  { day: "Thu", title: "No clear read — sitting out", note: "Written up as such" },
];

export const workingPanel = [
  { label: "First reply", value: "Within one working day" },
  { label: "Delivery", value: "In writing, always" },
  { label: "Scope", value: "Agreed before you pay" },
  { label: "Client list", value: "Kept deliberately small" },
];

export const workingPanelNote =
  "No accounts to open and no platform to sign up for. You send a message, the work is agreed, and it starts.";
