import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-start justify-center pt-36">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-premium.png"
          alt="Luxury residential pool in Sydney - Reliable Pool Services"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/30 to-navy-900" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter leading-tight">
            30 Years Expertise.<br />
            <span className="text-aqua-500">Reliable Care.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4 font-light tracking-wide max-w-2xl mx-auto">
            Professional mobile pool maintenance, equipment repairs, and water chemistry balancing across Sydney.
          </p>
          <p className="text-sm md:text-base text-white/90 mb-10 max-w-xl mx-auto bg-navy-900/50 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
            Regular pool care from $99 · Green pool recovery · Servicing Greater Sydney
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-navy-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-aqua-500 transition-all font-display uppercase tracking-widest"
            >
              Get a Free Quote
            </motion.a>
            <a
              href="tel:0288505222"
              className="flex items-center gap-2 text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              <Phone size={18} />
              Call Nathan & Kez: 02 8850 5222
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator — pinned to bottom edge */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" 
        />
      </div>
    </section>
  );
}
