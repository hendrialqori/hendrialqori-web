import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { GridLines, og, ogContentType, ogFonts, ogSize } from "@/lib/og";

export const alt = `${site.name}, ${site.title}: I design, build and ship web apps, end to end.`;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const words = site.hero.headline.split(" ");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#FFFFFF",
        fontFamily: "Jakarta",
        color: og.ink,
      }}
    >
      <GridLines width={size.width} height={size.height} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(ellipse 75% 70% at 50% 45%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 60%, #FFFFFF 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", fontFamily: "Mono", fontSize: 24, letterSpacing: 1 }}>
          <span style={{ background: og.accent, padding: "4px 12px" }}>{site.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 84,
            lineHeight: 1.06,
            letterSpacing: -3,
            maxWidth: 1000,
          }}
        >
          {words.map((w, i) => (
            <span key={i} style={{ marginRight: 22 }}>
              {w}
            </span>
          ))}
          {/* One accent block; words are separate items because ImageResponse drops inner spaces. */}
          <div style={{ display: "flex", gap: 22, background: og.accent, padding: "0 10px" }}>
            {site.hero.highlight.split(" ").map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", fontFamily: "Mono", fontSize: 24, color: og.muted }}>
          {`${site.title} · ${site.location}`}
        </div>
      </div>
    </div>,
    { ...size, fonts: await ogFonts() },
  );
}
