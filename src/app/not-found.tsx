import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header variant="case" />
      <main>
        <section
          aria-labelledby="nf-title"
          className="hero-grid flex flex-col items-center gap-8 border-b border-line px-pad py-[clamp(72px,9vw,128px)] text-center"
        >
          <SectionLabel number="404">Not found</SectionLabel>
          <h1
            id="nf-title"
            className="text-[clamp(40px,6vw,80px)] leading-[1.04] font-bold tracking-[-0.035em]"
          >
            Page not found
          </h1>
          <p className="max-w-[560px] text-[19px] leading-[1.6] text-ink-3">
            The page you are looking for does not exist or has moved.
          </p>
          <Button href="/" trailingIcon="arrowRight">
            Back to home
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
