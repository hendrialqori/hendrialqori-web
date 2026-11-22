// Case study content for hendrialqori portfolio.

export type ProjectScope = "UI Design" | "Frontend" | "Backend" | "Deployment";

export type Project = {
  slug: string;
  number: string; // shown on cards, "01"
  name: string;
  category: string; // uppercase label on cards
  type: string;
  client: string;
  year: string;
  duration?: string; // hide the info cell when empty
  url: string;
  urlLabel: string;
  brandColor: string; // background behind screenshots
  cover: string; // card + case study hero screenshot (crop from the top)
  overviewImage: string; // layered collage used in the Overview section
  cardDescription: string; // homepage card copy
  summary: string; // case study intro + meta description base
  overviewIntro: string;
  context: string; // short line about the client
  problem: string; // "Before this project" box
  goals: string[];
  role: string;
  scope: ProjectScope[];
  solutions: { title: string; text: string }[];
  results?: { metrics: { value: string; label: string }[]; text: string }; // section hidden when undefined
  testimonial?: { quote: string; name: string; position: string }; // section hidden when undefined
};

export const projects: Project[] = [
  {
    slug: "hutama-maju-abadi",
    number: "01",
    name: "Hutama Maju Abadi",
    category: "LANDING PAGE",
    type: "Company profile landing page",
    client: "PT Hutama Maju Abadi",
    year: "2026",
    url: "https://hutamamajuabadi.com",
    urlLabel: "hutamamajuabadi.com",
    brandColor: "#1C2B3A",
    cover: "/images/projects/hutama-maju-abadi/cover.jpg",
    overviewImage: "/images/projects/hutama-maju-abadi/overview.jpg",
    cardDescription:
      "Company profile landing page for PT Hutama Maju Abadi, a procurement and construction company in Bandung, featuring services, vision & mission, management team and a WhatsApp inquiry form.",
    summary:
      "A company profile landing page for PT Hutama Maju Abadi, a Bandung-based company in procurement of goods and services, and construction.",
    overviewIntro:
      "A single-page company profile that takes visitors from who the company is to how to reach them.",
    context:
      "PT Hutama Maju Abadi works across three business lines: procurement of goods, procurement of services and construction.",
    problem:
      "PT Hutama Maju Abadi had no website. New business came almost entirely through personal referrals, which made it hard to reach partners outside their existing network. They needed an online presence to promote their services and look credible to new clients.",
    goals: [
      "Look professional and credible to new business partners",
      "Explain the three business lines clearly: goods procurement, service procurement and construction",
      "Make it easy for potential clients to get in touch",
      "Replace the PDF company profile with a link that’s easy to share",
    ],
    role: "I designed, built and launched the website myself, from the visual design in Figma to a fast, responsive site.",
    scope: ["UI Design", "Frontend", "Deployment"],
    solutions: [
      { title: "Clear business lines", text: "The three services sit side by side, so visitors understand what the company does within seconds." },
      { title: "Trust through people and values", text: "Vision and mission, company values and the management team are shown openly to build credibility with new partners." },
      { title: "Inquiries straight to WhatsApp", text: "The team lives on WhatsApp, so the contact form sends messages there directly and leads get a fast reply." },
      { title: "Fast, elegant and mobile-ready", text: "A clean corporate look that loads fast and works smoothly on phones." },
    ],
  },
  {
    slug: "ratu-florist",
    number: "02",
    name: "Ratu Florist",
    category: "CATALOG WEBSITE",
    type: "Product catalog website",
    client: "Ratu Florist",
    year: "2026",
    url: "https://ratufloriststore.com",
    urlLabel: "ratufloriststore.com",
    brandColor: "#62735C",
    cover: "/images/projects/ratu-florist/cover.jpg",
    overviewImage: "/images/projects/ratu-florist/overview.jpg",
    cardDescription:
      "Online catalog for a florist and parcel shop in Tangerang. Bouquets, money bouquets, hampers, flower boards and parcels can be ordered straight via WhatsApp, Shopee or Tokopedia.",
    summary:
      "An online catalog for Ratu Florist, a florist and parcel shop in Tangerang offering bouquets, hampers and parcels for every special moment.",
    overviewIntro:
      "A soft, elegant catalog that lets customers browse every gift and order in a few taps.",
    context: "Ratu Florist sells flower bouquets, money bouquets, hampers, flower boards and parcels.",
    problem:
      "Ratu Florist had no website. Products were spread across Instagram, WhatsApp and Shopee, so customers had no single place to see everything. The team spent hours answering the same price and availability questions one chat at a time.",
    goals: [
      "Show prices and promos clearly so customers don’t need to ask one by one",
      "Let customers order directly via WhatsApp, Shopee or Tokopedia",
      "Look professional and match the brand’s soft, elegant style",
    ],
    role: "I handled the whole project myself: designing the storefront, building the frontend and backend, and launching it live. Behind the catalog sits a custom CMS where the team manages products, categories and labels, plus an analytics dashboard that tracks visitors and order clicks per channel.",
    scope: ["UI Design", "Frontend", "Backend", "Deployment"],
    solutions: [
      { title: "Browse by category", text: "The catalog is filtered into five categories, so customers find the right gift without scrolling through everything." },
      { title: "Prices and promos up front", text: "Every product shows its price, discount and a badge such as Best Seller, New or Lebaran Promo, so customers do not need to ask one by one." },
      { title: "Order on the channel they prefer", text: "Customers order directly via WhatsApp, Shopee or Tokopedia, keeping the existing sales channels in one flow." },
      { title: "A CMS the team runs on their own", text: "Products, categories, labels and prices are managed from an admin dashboard, so the catalog stays up to date without a developer." },
      { title: "Analytics built around sales", text: "The dashboard tracks visitors, pageviews and order clicks on WhatsApp, Shopee and Tokopedia, plus conversion rate per product, so the owner knows what sells and where buyers come from." },
    ],
  },
  {
    slug: "fractal-cts",
    number: "03",
    name: "Fractal CTS",
    category: "LANDING PAGE",
    type: "Service landing page",
    client: "Fractal CTS",
    year: "2025",
    url: "https://fractalcts.com/",
    urlLabel: "fractalcts.com",
    brandColor: "#2F8FA3",
    cover: "/images/projects/fractal-cts/cover.jpg",
    overviewImage: "/images/projects/fractal-cts/overview.jpg",
    cardDescription:
      "Landing page for a consulting firm that helps ophthalmologists launch and grow their own practice, with services, a 3-step process and a free consultation form.",
    summary:
      "A landing page for Fractal CTS, a consulting firm that helps ophthalmologists build their own practice without the learning curve.",
    overviewIntro:
      "A focused landing page that explains a broad service offering and leads doctors to book a call.",
    context: "Fractal CTS supports eye doctors from start-up planning to running and growing their clinic.",
    problem:
      "Fractal CTS already had a website, but it looked outdated and did little to win new clients. Doctors found them through Google and referrals, so the site needed to make a stronger first impression and turn visitors into consultation calls.",
    goals: [
      "Replace the old website with a modern, professional look",
      "Explain five services in a simple, easy-to-scan way",
      "Turn visitors into free consultation bookings",
    ],
    role: "I handled the whole project myself: redesigning the site, building the frontend and backend, connecting the consultation form, and launching it live.",
    scope: ["UI Design", "Frontend", "Backend", "Deployment"],
    solutions: [
      { title: "Five services, one glance", text: "Practice start-up, infrastructure and technology, growth consulting, business training and equipment supply are laid out as clear, equal cards." },
      { title: "A simple 3-step process", text: "From initial consultation to launch, the process is reduced to three steps so doctors know exactly what to expect." },
      { title: "One clear next step", text: "Every section leads to scheduling a free practice growth call, with a consultation form at the end of the page and a Schedule Appointment button that is always in view." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
