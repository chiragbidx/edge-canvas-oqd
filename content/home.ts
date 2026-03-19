// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "CRM Launch",
    badgeOuter: "LeadNest CRM is here",
    titleBefore: "",
    titleHighlight: "Organize Your Leads and Close More Deals",
    titleAfter: "",
    subtitle:
      "LeadNest helps small teams manage contacts, track opportunities, and grow sales with a unified, easy-to-use CRM dashboard.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "See How It Works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadNest CRM dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why LeadNest",
    heading: "CRM built for small teams",
    description:
      "LeadNest empowers you to organize your leads, manage your contacts, and stay on top of deals – all from one modern dashboard designed for growing businesses.",
    items: [
      {
        icon: "Blocks",
        title: "Boost Sales Productivity",
        description: "Spend less time on busywork and more time building customer relationships.",
      },
      {
        icon: "LineChart",
        title: "Everything in One Place",
        description: "Track leads, contacts, and sales pipelines together for a streamlined workflow.",
      },
      {
        icon: "Wallet",
        title: "Affordable and Simple",
        description: "Easy to set up. No costly onboarding. Just one clean CRM you’ll actually use.",
      },
      {
        icon: "Sparkle",
        title: "Clear, Modern Design",
        description: "Focus on selling, not setup. Enjoy a dashboard your team will love to use every day.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Core CRM Features",
    subtitle:
      "LeadNest gives small teams the essentials for organizing leads, contacts, and deals. Skip the clutter and stay focused on growth.",
    items: [
      { icon: "TabletSmartphone", title: "Effortless Lead Management", description: "Capture, organize, and prioritize new leads in seconds." },
      { icon: "BadgeCheck", title: "Unified Contact Database", description: "Keep all your customer information in one accessible place." },
      { icon: "Goal", title: "Simple Sales Pipelines", description: "Visualize deals and track progress from prospect to close." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "How It Helps",
    heading: "Simple, Modern, Effective",
    subtitle:
      "Everything is streamlined so you can spend more time closing deals and less on setup.",
    items: [
      { title: "Easy Onboarding", description: "Import leads and contacts in a few clicks.", pro: false },
      { title: "Clear Sales Pipeline", description: "Get a quick overview of deal progress so nothing slips through.", pro: false },
      { title: "Collaboration", description: "Multiple team members can work together without friction.", pro: false },
      { title: "Data Security", description: "Your customer data stays safe with LeadNest.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Why teams love LeadNest",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Agency Owner", comment: "LeadNest made our entire sales process visible in one place. The team actually enjoys using it!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Growth Manager", comment: "We started seeing deal progress from the first week – onboarding was instant.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "Founder, BoldCRM", comment: "It has just what my team needs and nothing extra. We finally feel organized.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Sales Lead", comment: "Adding leads and updating deal stages is super quick; reporting is so clear!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Ops Manager", comment: "Everything works out of the box, so adoption was fast and painless.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Sofia Green", role: "Freelancer", comment: "For my small clients, LeadNest is the only CRM I recommend now.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the LeadNest team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Owner"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      // ... Retain/future real or filler team as needed
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Get started free",
    subtitle: "Simple, transparent pricing designed for small teams.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Best for small teams getting started.",
        buttonText: "Start for free",
        benefits: ["Unlimited leads & contacts", "Basic pipeline", "Email support"],
      },
      {
        title: "Pro",
        popular: false,
        price: 29,
        description: "For teams who want more customization and tracking.",
        buttonText: "Go Pro",
        benefits: ["Advanced pipeline", "Custom fields", "Priority support", "Integrations"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Contact LeadNest",
    description:
      "Questions about LeadNest or want a personal demo? Reach out and connect with our team.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "HQ", value: "Remote-first • Global" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Product Demo", "Partnership", "Feedback", "Support"],
    formSubmitLabel: "Send Message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "LeadNest CRM FAQs",
    items: [
      { question: "Is LeadNest free to use?", answer: "Yes, you can start with the Free plan and add your team." },
      { question: "Who should use LeadNest?", answer: "LeadNest is built for small businesses and teams who want modern CRM without the learning curve." },
      { question: "Can I manage deals and sales stages?", answer: "Yes, you get a visual pipeline to track every deal from start to close." },
      { question: "Is my data secure?", answer: "Yes. LeadNest stores all data securely and follows industry best practices." },
      { question: "How can I contact support?", answer: "Contact us at chirag@bidx.ai anytime for help or feedback." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "LeadNest",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "Discord", href: "https://discord.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "© LeadNest 2024. Simple CRM for small teams.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "LeadNest",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "LeadNest preview" },
    features: [
      { title: "Effortless Lead Management", description: "Capture and manage your leads in one view." },
      { title: "Unified Contact Database", description: "All your customers – always organized and accessible." },
      { title: "Simple Sales Pipelines", description: "Visualize, update, and track deals from a beautiful workflow." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started Free",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}