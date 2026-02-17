import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Metrics from './sections/Metrics';
import About from './sections/About';
import FlutterExpertise from './sections/FlutterExpertise';
import EngineeringStandards from './sections/EngineeringStandards';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <FlutterExpertise />
        <EngineeringStandards />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Pratap Hada. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
