import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
      </div>
      <Footer />
    </main>
  );
}

export default App;
