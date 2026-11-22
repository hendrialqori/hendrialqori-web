import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { og, ogContentType, ogFonts, ogSize, publicImage } from "@/lib/og";

export const alt = "Case study by Hendri Alqori";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug) ?? projects[0];
  const [fonts, cover] = await Promise.all([ogFonts(), publicImage(project.cover)]);

  const panelWidth = 600;
  const shotWidth = panelWidth - 64;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#FFFFFF",
        fontFamily: "Jakarta",
        color: og.ink,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: size.width - panelWidth,
          padding: "64px 56px",
          borderRight: `1px solid ${og.line}`,
        }}
      >
        <div style={{ display: "flex", fontFamily: "Mono", fontSize: 22, letterSpacing: 1 }}>
          <span style={{ background: og.accent, padding: "4px 12px" }}>CASE STUDY</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1, letterSpacing: -3 }}>{project.name}</div>
          <div style={{ fontFamily: "Mono", fontSize: 24, color: og.muted }}>
            {project.category}
          </div>
        </div>
        <div style={{ fontFamily: "Mono", fontSize: 22, color: og.muted }}>{site.name}</div>
      </div>
      <div
        style={{
          display: "flex",
          width: panelWidth,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: project.brandColor,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: shotWidth,
            background: "#FFFFFF",
            boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 6,
              padding: "11px 13px",
              borderBottom: "1px solid #EEEEEE",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 10, height: 10, background: "#E5E5E5" }} />
            ))}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={cover} width={shotWidth} style={{ display: "flex" }} />
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}
