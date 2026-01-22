import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Products from "./components/Products";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import ScrollAnimation from "./components/ScrollAnimation";

function App() {
  return (
    <main className="min-h-screen relative">
      <Navbar />

      <div className="pt-16">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <ScrollAnimation animation="fade-up">
            <About />
          </ScrollAnimation>
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <ScrollAnimation animation="fade-up" delay={100}>
            <Gallery />
          </ScrollAnimation>
        </section>

        {/* Products Section */}
        <section id="products">
          <ScrollAnimation animation="fade-up" delay={100}>
            <Products />
          </ScrollAnimation>
        </section>

        {/* Process Section */}
        <section id="process">
          <ScrollAnimation animation="fade-up" delay={100}>
            <Process />
          </ScrollAnimation>
        </section>

        {/* Services Section */}
        <section id="services">
          <ScrollAnimation animation="fade-up" delay={100}>
            <Services />
          </ScrollAnimation>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <ScrollAnimation animation="fade-up" delay={100}>
            <Testimonials />
          </ScrollAnimation>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <ScrollAnimation animation="fade-up" delay={100}>
            <FAQ />
          </ScrollAnimation>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}

export default App;
