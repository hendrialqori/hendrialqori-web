import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { CaseCta } from "@/components/case-study/CaseCta";
import { CaseHeader } from "@/components/case-study/CaseHeader";
import { CaseHero } from "@/components/case-study/CaseHero";
import { Context } from "@/components/case-study/Context";
import { Goals } from "@/components/case-study/Goals";
import { Overview } from "@/components/case-study/Overview";
import { Results } from "@/components/case-study/Results";
import { Role } from "@/components/case-study/Role";
import { Solutions } from "@/components/case-study/Solutions";
import { Testimonial } from "@/components/case-study/Testimonial";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, clampDescription, creativeWorkJsonLd } from "@/lib/seo";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} Case Study`;
  const description = clampDescription(project.summary);
  const url = `/projects/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: site.locale,
      siteName: site.name,
      url,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Section numbers stay continuous: optional sections only take a number when rendered.
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <>
      <JsonLd data={[creativeWorkJsonLd(project), breadcrumbJsonLd(project)]} />
      <Header variant="case" />
      <main>
        <CaseHeader project={project} />
        <CaseHero project={project} />
        <Overview project={project} number={next()} />
        <Context project={project} number={next()} />
        <Goals project={project} number={next()} />
        <Role project={project} number={next()} />
        <Solutions project={project} number={next()} />
        {project.results && <Results results={project.results} number={next()} />}
        {project.testimonial && <Testimonial testimonial={project.testimonial} />}
        <CaseCta />
      </main>
      <Footer />
    </>
  );
}
