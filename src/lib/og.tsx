import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export const og = {
  ink: "#0A0A0A",
  muted: "#525252",
  line: "#E8E8E8",
  grid: "#E9E9E9",
  accent: "#B9FF66",
};

const fontDir = join(process.cwd(), "src/assets/fonts");

// File reads are wrapped in "use cache" so the image routes prerender at build time
// (with Cache Components, uncached I/O would make them render per request).
async function readBase64(path: string) {
  "use cache";
  return (await readFile(path)).toString("base64");
}

const toArrayBuffer = (b64: string) => {
  const buf = Buffer.from(b64, "base64");
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
};

/** Fonts for next/og (woff, since ImageResponse does not read woff2). */
export async function ogFonts() {
  const [jakarta, mono] = await Promise.all([
    readBase64(join(fontDir, "plus-jakarta-sans-latin-700-normal.woff")),
    readBase64(join(fontDir, "jetbrains-mono-latin-500-normal.woff")),
  ]);
  return [
    {
      name: "Jakarta",
      data: toArrayBuffer(jakarta),
      weight: 700 as const,
      style: "normal" as const,
    },
    { name: "Mono", data: toArrayBuffer(mono), weight: 500 as const, style: "normal" as const },
  ];
}

/** Reads an image from public/ and returns it as a data URI. */
export async function publicImage(path: string) {
  const data = await readBase64(join(process.cwd(), "public", path));
  const type = path.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${type};base64,${data}`;
}

/** 56px square grid drawn with absolutely positioned 1px lines. */
export function GridLines({
  width,
  height,
  cell = 56,
}: {
  width: number;
  height: number;
  cell?: number;
}) {
  const cols = Math.ceil(width / cell);
  const rows = Math.ceil(height / cell);
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width, height, display: "flex" }}>
      {Array.from({ length: cols }, (_, i) => (
        <div
          key={`c${i}`}
          style={{
            position: "absolute",
            top: 0,
            left: i * cell,
            width: 1,
            height,
            backgroundColor: og.grid,
          }}
        />
      ))}
      {Array.from({ length: rows }, (_, i) => (
        <div
          key={`r${i}`}
          style={{
            position: "absolute",
            left: 0,
            top: i * cell,
            width,
            height: 1,
            backgroundColor: og.grid,
          }}
        />
      ))}
    </div>
  );
}
