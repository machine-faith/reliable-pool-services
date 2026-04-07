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
    description: 'Emergency issue? Nathan or Kez pick up the phone personally. Quotes returned quickly — no waiting around for weeks.',
  },
  {
    icon: HeartHandshake,
    title: 'Family Owned & Operated',
    description: 'Not a franchise. You deal directly with the owners — professionals who stake their family name on every pool they service.',
  },
  {
    icon: Sparkles,
    title: 'Reliable Results',
    description: 'Every visit leaves your pool healthy, balanced, and crystal clear. That\'s the Reliable Pool Services guarantee.',
  },
  {
    icon: Leaf,
    title: 'Eco-Conscious Excellence',
    description: 'We specialise in Theralux mineral-based sanitisation — caring for your pool, your health, and the environment.',
  },
  {
    icon: MapPin,
    title: 'True Local Knowledge',
    description: 'Nathan knows Sydney\'s water conditions, from the salt air of the coast to the bore water quirks of the Hills District.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-aqua-500">Reliable?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            There are plenty of pool guys. Here's why 450+ Sydney families trust Reliable Pool Services — and stay with us for years.
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
