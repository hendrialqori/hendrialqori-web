import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { StackStrip } from "@/components/home/StackStrip";
import { Work } from "@/components/home/Work";
import { JsonLd } from "@/components/ui/JsonLd";
import { professionalServiceJsonLd } from "@/lib/seo";

export const ensureStatic = "navigation";

export default function HomePage() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd()} />
      <Header variant="home" />
      <main>
        <Hero />
        <StackStrip />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
