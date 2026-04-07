import React from 'react';
import { motion } from 'motion/react';
import { Droplets, AlertTriangle, CalendarDays, GraduationCap, CheckCircle2, Info } from 'lucide-react';

const services = [
  {
    title: 'Regular Servicing',
    subtitle: 'THE RELIABLE STANDARD',
    description: 'Our signature maintenance program. Includes water chemistry testing, balancing, filter cleaning, and full equipment health checks.',
    icon: Droplets,
    includes: [
      'Water chemistry testing & balancing',
      'Filter backwash & rinse',
      'Empty pump & skimmer baskets',
      'Check chlorination & sanitation systems',
      'Maintain & grease O-rings',
    ],
    from: 'From $99.00 + chemicals',
  },
  {
    title: 'Equipment Repair',
    subtitle: 'EXPERT INSTALLATION',
    description: 'Fast, professional repair and installation of all major pool equipment brands with genuine manufacturer warranties.',
    icon: AlertTriangle,
    includes: [
      'Pump repairs & replacements',
      'Filter sand & cartridge changes',
      'Chlorinator & cleaner servicing',
      'Gas & electric heater installs',
      'Automation & lighting repairs',
    ],
    from: 'Quote Based',
  },
  {
    title: 'Green Pool Recovery',
    subtitle: 'TOTAL RESTORATION',
    description: 'Transform your unusable pool back into a sparkling oasis. Deep cleaning and chemical shock treatment experts.',
    icon: CalendarDays,
    includes: [
      'Heavy chemical shock treatments',
      'Flocculation & specialized vacuuming',
      'Intensive filter cleaning',
      'Algae removal & prevention',
    ],
    from: 'Quote Based',
  },
  {
    title: 'Theralux Systems',
    subtitle: 'MINERAL SPECIALISTS',
    description: 'As Theralux partners, we specialize in the installation and maintenance of premium mineral pool systems.',
    icon: GraduationCap,
    includes: [
      'Theralux mineral system install',
      'Specialized mineral water balancing',
      'Equipment calibration for Theralux',
      'Healthier, softer water experience',
    ],
    from: 'Quote Based',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-navy-800 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-aqua-500/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-aqua-500">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional pool care, balancing, and equipment checks up to Australian Standards. Pump and salt chlorinator supply and install available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-3xl hover:border-aqua-500/50 transition-all group flex flex-col h-full"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-aqua-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-aqua-500 transition-colors">
                  <service.icon size={32} className="text-aqua-500 group-hover:text-navy-900 transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-aqua-500 text-sm font-bold uppercase tracking-widest mb-3">{service.subtitle}</p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={18} className="text-aqua-500 shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5 mt-auto">
                <span className="text-slate-500 text-xs uppercase tracking-widest">Base Rate </span>
                <span className="text-white font-bold text-lg">{service.from}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Policies Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-900 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <Info className="text-aqua-500" size={28} />
            <h4 className="text-xl font-bold text-white">Pricing & Chemical Policies</h4>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-aqua-500 mt-1">•</span>
              Regular2 and Regular4 are ongoing services, not one-offs. Cost varies based on weather and pool usage.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua-500 mt-1">•</span>
              We add ALGAECIDE every 3 months for protection. Free-standing prices include GST.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua-500 mt-1">•</span>
              Pools with Quartzon surface get Cal Stop every 6 months.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua-500 mt-1">•</span>
              Please give at least a week's notice for cancellations. Extra 15 mins is charged at $20.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
