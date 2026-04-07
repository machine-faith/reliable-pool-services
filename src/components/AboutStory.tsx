import React from 'react';
import { motion } from 'motion/react';

export default function AboutStory() {
  return (
    <section className="py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/images/service-premium.png"
                alt="Reliable Pool Services technician performing professional pool maintenance"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl">
              <div className="text-3xl font-display font-bold text-white">4.9 Stars</div>
              <div className="text-aqua-500 text-sm font-bold uppercase tracking-widest">32+ Google Reviews</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-aqua-500 text-sm font-bold uppercase tracking-widest mb-4">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              30 Years of <span className="text-aqua-500">Excellence</span>
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Reliable Pool Services has been a pillar of the Sydney pool community for over 30 years. 
                Nathan and Kez lead a team of dedicated professionals who believe that transparency 
                and technical expertise are the keys to a perfect pool.
              </p>
              <p>
                As proud members of SPASA Australia and certified Theralux partners, we bring industry-leading 
                standards directly to your backyard. Whether it's complex equipment repairs or 
                meticulous regular maintenance, our goal is to catch minor issues before they become 
                costly problems.
              </p>
              <p>
                From Castle Hill to Curl Curl, our mobile technicians Josh and Angus are known 
                for their prompt service and exceptional knowledge. We don't just clean pools — 
                we ensure your investment is protected and your family stays safe.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8">
              {[
                { value: '30Yrs', label: 'Industry Experience' },
                { value: '4.9', label: 'Google Rating' },
                { value: 'SPASA', label: 'Certified Member' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-aqua-500 uppercase tracking-widest font-bold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
