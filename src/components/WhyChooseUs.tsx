import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Clock, ShieldCheck, HeartHandshake, Sparkles, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full public liability insurance, ABN registered, and compliant with all Australian standards. Your property is always protected.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Emergency callout? Tim picks up the phone. Quotes returned quickly — no waiting around for days.',
  },
  {
    icon: HeartHandshake,
    title: 'Owner Operated',
    description: 'Not a franchise. You deal directly with Tim — someone who stakes his name on every job he does.',
  },
  {
    icon: Sparkles,
    title: 'Sparkling Results',
    description: 'Every visit leaves your pool healthy, balanced, and crystal clear. That\'s the Epic Pool Care standard.',
  },
  {
    icon: Leaf,
    title: 'Eco-Conscious Methods',
    description: 'We use algaecide only when needed and add Cal Stop for Quartzon surfaces — caring for your pool and the environment.',
  },
  {
    icon: MapPin,
    title: 'Local Sydney Knowledge',
    description: 'Tim knows Greater Sydney\'s water conditions, pool types, and local quirks inside out — experience you can trust.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-aqua-500">Epic?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            There are plenty of pool guys. Here's why Sydney pool owners trust Epic Pool Care — and keep coming back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-2xl bg-white/[0.06] border border-white/15 hover:border-aqua-500/50 hover:bg-white/[0.09] transition-all group"
            >
              <div className="w-12 h-12 bg-aqua-500/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-aqua-500 transition-colors">
                <reason.icon size={24} className="text-aqua-500 group-hover:text-navy-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
