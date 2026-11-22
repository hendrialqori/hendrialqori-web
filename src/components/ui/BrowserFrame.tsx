import Image from "next/image";
import { imageSize } from "@/lib/images";

/** White browser window with three square dots and a screenshot cropped from the top. */
export function BrowserFrame({
  src,
  alt,
  sizes,
  aspect,
  size = "sm",
  priority = false,
  shadow = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  /** Tailwind aspect class, e.g. "aspect-video". */
  aspect: string;
  size?: "sm" | "lg";
  priority?: boolean;
  shadow?: boolean;
}) {
  const [width, height] = imageSize(src);
  const dot = size === "lg" ? "size-2.5" : "size-[9px]";
  return (
    <div className={`bg-white ${shadow ? "shadow-[0_-2px_30px_rgba(0,0,0,0.08)]" : ""}`}>
      <div
        className={`flex gap-1.5 border-b border-[#EEEEEE] ${size === "lg" ? "px-3.5 py-3" : "px-[13px] py-[11px]"}`}
        aria-hidden="true"
      >
        <span className={`${dot} bg-[#E5E5E5]`} />
        <span className={`${dot} bg-[#E5E5E5]`} />
        <span className={`${dot} bg-[#E5E5E5]`} />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={`block w-full object-cover object-top ${aspect}`}
      />
    </div>
  );
}
