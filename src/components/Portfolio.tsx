import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

const projects = [
  {
    name: 'Castle Hill Family Pool',
    suburb: 'Castle Hill',
    service: 'Theralux Mineral Conversion',
    beforeImage: '/images/pool1 before~mv2.avif',
    afterImage: '/images/hero-1.jpg',
  },
  {
    name: 'North Curl Curl Plunge',
    suburb: 'North Curl Curl',
    service: 'Regular Maintenance',
    beforeImage: '/images/pool2 before.avif',
    afterImage: '/images/hero-2.jpg',
  },
  {
    name: 'St Ives Heritage Pool',
    suburb: 'St Ives',
    service: 'Heat Pump Installation',
    beforeImage: '/images/pool3 before.avif',
    afterImage: '/images/service-main.jpg',
  },
  {
    name: 'Sans Souci Waterfront',
    suburb: 'Sans Souci',
    service: 'Equipment Upgrade',
    beforeImage: '/images/pool 4 before.avif',
    afterImage: '/images/equipment-main.jpg',
  },
  {
    name: 'Dural Estate Pool',
    suburb: 'Dural',
    service: 'Green Pool Recovery',
    beforeImage: '/images/green pool treatment before.avif',
    afterImage: '/images/green pool treatment after.avif',
  },
];

function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div 
      className="relative w-full h-full cursor-ew-resize select-none overflow-hidden touch-none"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={(e) => { if (isDragging) setIsDragging(false); }}
      onPointerMove={handlePointerMove}
    >
      {/* After Image (Background) */}
      <img src={afterImage} alt="After state" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" />
      
      {/* Before Image (Clipped overlay) */}
      <div 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none border-r-2 border-white"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before state" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Slider Line handle */}
      <div 
        className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center transform group cursor-ew-resize z-10 touch-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/90 group-hover:bg-white backdrop-blur rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors">
          <MoveHorizontal size={20} className="text-navy-900" />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-sm text-white px-3 py-1 rounded shadow-lg text-xs md:text-sm font-bold pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition > 20 ? 1 : 0 }}>
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-aqua-500/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded shadow-lg text-xs md:text-sm font-bold pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition < 80 ? 1 : 0 }}>
        AFTER
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Real <span className="text-aqua-500">Results</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Every pool tells a story. Use the slider to see the dramatic transformations from our recent green pool recoveries and renovations.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-12 mb-4" />
          <div className="text-aqua-500 font-bold tracking-widest uppercase text-sm">
            Portfolio
          </div>
        </div>

        {/* Note: Changed to 2 columns to give the sliders enough room to be used effectively */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl bg-navy-800 shadow-xl">
                <BeforeAfterSlider 
                  beforeImage={project.beforeImage} 
                  afterImage={project.afterImage} 
                />
              </div>
              <div className="px-2">
                <div className="text-white text-2xl font-display font-bold mb-1">
                  {project.name}
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-aqua-500 text-xs font-bold uppercase tracking-widest">
                    {project.suburb}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="text-slate-400 text-sm">
                    {project.service}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
