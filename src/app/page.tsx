import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Features />
        <Showcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
