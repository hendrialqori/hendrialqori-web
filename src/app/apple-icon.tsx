import { ImageResponse } from "next/og";
import { og, ogFonts } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fonts = await ogFonts();
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: og.accent,
        color: og.ink,
        fontFamily: "Jakarta",
        fontSize: 84,
        letterSpacing: -4,
      }}
    >
      HA
    </div>,
    { ...size, fonts },
  );
}
