import type { Project } from "@/content/projects";
import { site } from "@/content/site";

const base = site.url.replace(/\/$/, "");

export const absoluteUrl = (path = "/") => `${base}${path === "/" ? "" : path}` || base;

const personId = `${base}/#person`;

/** Trim to at most `max` characters on a word boundary, for meta descriptions. */
export function clampDescription(text: string, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: base,
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.name,
    jobTitle: site.title,
    url: base,
    image: absoluteUrl(site.avatar),
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pontianak",
      addressCountry: "ID",
    },
    sameAs: [site.linkedin, site.github],
    knowsAbout: ["Web development", "Next.js", "React", "Vue.js", "TypeScript", "Node.js"],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name}, Web Development`,
    url: base,
    image: absoluteUrl(site.avatar),
    email: site.email,
    areaServed: "ID",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pontianak",
      addressCountry: "ID",
    },
    serviceType: site.services.items.map((s) => s.title),
    provider: { "@id": personId, "@type": "Person", name: site.name },
  };
}

export function creativeWorkJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.cover),
    dateCreated: project.year,
    creator: { "@id": personId, "@type": "Person", name: site.name },
    about: { "@type": "Organization", name: project.client, url: project.url },
  };
}

export function breadcrumbJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Work", item: absoluteUrl("/#work") },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: absoluteUrl(`/projects/${project.slug}`),
      },
    ],
  };
}
