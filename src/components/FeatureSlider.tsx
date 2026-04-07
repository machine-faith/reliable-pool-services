import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export default function FeatureSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Exact files specified by the user
  const beforeImage = "/images/before-green-pool.png";
  const afterImage = "/images/after-clean-pool.png";

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-navy-900 border-b border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-aqua-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Don't Let Your Pool <span className="text-aqua-500">Go Green</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We specialize in bringing the dirtiest, greenest pools back to life. Drag the slider to witness a real transformation from severe algae overgrowth to crystal clear perfection.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-5xl mx-auto aspect-video cursor-ew-resize select-none overflow-hidden touch-none rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={(e) => { if (isDragging) setIsDragging(false); }}
          onPointerMove={handlePointerMove}
        >
          {/* After Image (Background) */}
          <img src={afterImage} alt="After state" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          
          {/* Before Image (Clipped overlay) */}
          <div 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none border-r-4 border-white"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img src={beforeImage} alt="Before state" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Slider Line handle */}
          <div 
            className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center transform group cursor-ew-resize z-10 touch-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-14 h-14 bg-white/95 group-hover:bg-white backdrop-blur rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.6)] transition-all group-hover:scale-110 border-2 border-aqua-500">
              <MoveHorizontal size={28} className="text-navy-900" />
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute top-6 left-6 bg-navy-900/80 backdrop-blur-md text-white px-5 py-3 rounded-xl shadow-2xl text-sm md:text-base font-bold pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition > 20 ? 1 : 0 }}>
            BEFORE: Green & Neglected
          </div>
          <div className="absolute top-6 right-6 bg-aqua-500/90 backdrop-blur-md text-navy-900 px-5 py-3 rounded-xl shadow-2xl text-sm md:text-base font-bold pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition < 80 ? 1 : 0 }}>
            AFTER: Crystal Clear
          </div>
        </motion.div>
      </div>
    </section>
  );
}
