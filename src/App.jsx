import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import ScrollAnimation from "./components/ScrollAnimation";

const About = lazy(() => import("./components/About"));
const Gallery = lazy(() => import("./components/Gallery"));
const Products = lazy(() => import("./components/Products"));
const Services = lazy(() => import("./components/Services"));
const Process = lazy(() => import("./components/Process"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <main className="min-h-screen relative">
      <Navbar />

      <div className="pt-16">
        <section id="home">
          <Hero />
        </section>

        <Suspense fallback={null}>
          <section id="about">
            <ScrollAnimation animation="fade-up">
              <About />
            </ScrollAnimation>
          </section>

          <section id="gallery">
            <ScrollAnimation animation="fade-up" delay={100}>
              <Gallery />
            </ScrollAnimation>
          </section>

          <section id="products">
            <ScrollAnimation animation="fade-up" delay={100}>
              <Products />
            </ScrollAnimation>
          </section>

          <section id="process">
            <ScrollAnimation animation="fade-up" delay={100}>
              <Process />
            </ScrollAnimation>
          </section>

          <section id="services">
            <ScrollAnimation animation="fade-up" delay={100}>
              <Services />
            </ScrollAnimation>
          </section>

          <section id="testimonials">
            <ScrollAnimation animation="fade-up" delay={100}>
              <Testimonials />
            </ScrollAnimation>
          </section>

          <section id="faq">
            <ScrollAnimation animation="fade-up" delay={100}>
              <FAQ />
            </ScrollAnimation>
          </section>
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}

export default App;
