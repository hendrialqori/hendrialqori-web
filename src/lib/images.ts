// Intrinsic sizes of the images in public/, so next/image can reserve space (no CLS).
// Update this map when an image is replaced.
const sizes: Record<string, [number, number]> = {
  "/images/avatar.jpg": [320, 320],
  "/images/projects/hutama-maju-abadi/cover.jpg": [1600, 841],
  "/images/projects/hutama-maju-abadi/overview.jpg": [2400, 1415],
  "/images/projects/ratu-florist/cover.jpg": [1600, 783],
  "/images/projects/ratu-florist/overview.jpg": [2400, 1524],
  "/images/projects/fractal-cts/cover.jpg": [1600, 682],
  "/images/projects/fractal-cts/overview.jpg": [2400, 1177],
};

export function imageSize(src: string): [number, number] {
  const size = sizes[src];
  if (!size) throw new Error(`Unknown image size for ${src}. Add it to src/lib/images.ts.`);
  return size;
}
