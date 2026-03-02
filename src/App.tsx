import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import { ArrowDown } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 overflow-hidden">
        <HeroScene />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-neon-cyan" />
              <span className="text-neon-cyan font-mono text-xs uppercase tracking-[0.3em]">
                Next-Gen Infrastructure Protection
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              Engineering <br />
              <span className="text-neon-cyan">Structural</span> <br />
              Immortality.
            </h1>
            
            <p className="text-lg md:text-xl text-metallic-silver max-w-xl mb-10 leading-relaxed">
              Pioneering Nano-Technology and Anti-Carbonation solutions to protect India’s mega-structures from time and elements.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-neon-cyan text-dark-bg font-bold rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95">
                Explore Solutions
              </button>
              <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Our Science
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-metallic-silver flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </section>

      <Expertise />

      {/* Science/Technical Section */}
      <section id="science" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass relative">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                alt="Laboratory Testing"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="scan-line" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 glass rounded-2xl text-center">
                  <span className="text-4xl font-display font-bold text-neon-cyan">99.9%</span>
                  <p className="text-xs font-mono text-metallic-silver uppercase mt-2">CO2 Barrier Efficiency</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <span className="text-neon-cyan font-mono text-sm uppercase tracking-widest mb-4 block">The Science</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Defying the <span className="text-metallic-silver">Laws of Decay</span></h2>
            <div className="space-y-6 text-metallic-silver text-lg">
              <p>
                Our R&D facility in Mumbai focuses on molecular-level interventions. By utilizing nano-particles, we create hydrophobic and anti-carbonation shields that are breathable yet impenetrable to harmful ions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2.5 shrink-0" />
                  <span><strong className="text-white">Molecular Bonding:</strong> Our sealants bond chemically with the substrate, ensuring they never peel or flake.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2.5 shrink-0" />
                  <span><strong className="text-white">UV Resistance:</strong> Engineered to withstand the intense tropical sun of the Indian subcontinent.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2.5 shrink-0" />
                  <span><strong className="text-white">Eco-Friendly:</strong> Zero to low VOC formulations that prioritize the health of both the structure and the environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tighter">
              EIKONOCLAST <span className="text-neon-cyan">2.0</span>
            </span>
          </div>
          <p className="text-metallic-silver text-sm">
            © 2026 Eikonoclast India LLP. All rights reserved.
          </p>
          <div className="flex gap-6 text-metallic-silver text-sm uppercase font-mono tracking-widest">
            <a href="#" className="hover:text-neon-cyan transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
