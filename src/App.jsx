import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import ScrollProgress from './components/ScrollProgress';
import MusicPlayer from './components/MusicPlayer';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Layout>
      <div className="noise-bg"></div>

      <ScrollProgress />
      <MusicPlayer />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Volunteer />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
