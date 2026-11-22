// Site-wide content. Copy to `src/content/site.ts`.
// Values marked TODO must be confirmed by Hendri before launch.

export const site = {
  name: "Hendri Alqori",
  title: "Fullstack Web Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hendrialqori.vercel.app", // TODO: final domain
  locale: "en_US",
  location: "Pontianak, Indonesia",
  email: "dev.hendrialqori@gmail.com",
  whatsapp: "https://wa.me/6289677546550", // from CV, confirm
  linkedin: "https://www.linkedin.com/in/hendrialqori",
  github: "https://github.com/hendrialqori", // TODO: confirm username
  cvUrl: "/cv/Hendri_Alqori_CV.pdf", // TODO: add the PDF to public/cv/
  avatar: "/images/avatar.jpg",

  seo: {
    defaultTitle: "Hendri Alqori | Fullstack Web Developer",
    titleTemplate: "%s | Hendri Alqori",
    description:
      "Hendri Alqori is a fullstack web developer from Indonesia who designs, builds and ships landing pages, dashboards and web apps for businesses, end to end.",
    keywords: [
      "fullstack web developer",
      "freelance web developer Indonesia",
      "jasa pembuatan website",
      "Next.js developer",
      "landing page developer",
      "dashboard web app",
      "Hendri Alqori",
    ],
  },

  hero: {
    badge: "Available for freelance projects",
    headline: "I design, build and ship web apps,",
    highlight: "end to end.",
    description:
      "I turn your ideas into fast, reliable web apps, backed by 4 years of building for enterprise and government clients.",
  },

  stack: ["TypeScript", "React", "Next.js", "Vue", "Node.js", "Express", "NestJS", "Laravel", "PostgreSQL"],

  services: {
    intro: "One developer for the whole product: design handoff, frontend, backend and deployment.",
    items: [
      { icon: "layout", title: "Landing pages & company sites", text: "Fast, clear pages that explain what you offer and turn visitors into leads." },
      { icon: "dashboard", title: "Dashboards & web apps", text: "Admin panels, CMS and internal tools that make daily operations simpler." },
    ],
  },

  about: {
    heading: "Engineering with the user in mind",
    paragraphs: [
      "I'm a software engineer focused on the web platform. I care about products that are easy to use and code that's easy to maintain, so your app keeps working long after launch.",
      // TODO: second paragraph about what you enjoy building / clients you work best with. Remove if not provided.
    ],
  },

  experience: [
    { role: "Fullstack Developer & IT Support", company: "CV Putra Borneo Satu", period: "10/2026 to Present" },
    { role: "Frontend Engineer", company: "PLN ICON+", period: "10/2025 to 06/2026" },
    { role: "Frontend Engineer", company: "Fractal CTS", period: "01/2025 to 04/2025" },
    { role: "Junior Frontend Developer", company: "Shinta VR", period: "08/2023 to 11/2024" },
    { role: "Frontend Engineer Intern", company: "Merkle Innovation", period: "03/2023 to 07/2023" },
  ],

  contact: {
    heading: "Have a project in mind?",
    highlight: "Let's build it together.",
  },

  footer: "© 2026 Hendri Alqori · Built with Next.js",
};
