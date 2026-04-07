import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Award, Users } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    { label: 'Industry Experience', value: '30 Yrs', icon: Award },
    { label: 'Sydney Service Areas', value: '50+', icon: Users },
    { label: 'ABN 52 142 211 229', value: '100%', icon: Shield },
  ];

  return (
    <section className="py-20 bg-navy-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          {signals.map((signal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-aqua-500/10 rounded-xl flex items-center justify-center">
                  <signal.icon size={24} className="text-aqua-500" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {signal.value}
              </div>
              <div className="text-aqua-500 uppercase tracking-widest text-xs font-bold">
                {signal.label}
              </div>
            </motion.div>
          ))}

          {/* Google Review Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-aqua-500 text-aqua-500" />
              ))}
            </div>
            <div className="text-2xl font-bold text-white mb-2">4.9 / 5.0</div>
            <div className="flex items-center justify-center gap-2 mt-1">
              {/* Google G icon — clean inline SVG */}
              <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              {/* Coloured Google wordmark */}
              <span className="text-sm font-semibold tracking-tight">
                <span style={{color:'#4285F4'}}>G</span>
                <span style={{color:'#EA4335'}}>o</span>
                <span style={{color:'#FBBC05'}}>o</span>
                <span style={{color:'#4285F4'}}>g</span>
                <span style={{color:'#34A853'}}>l</span>
                <span style={{color:'#EA4335'}}>e</span>
              </span>
              <span className="text-slate-400 text-sm">Reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Credential Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {[
            'SPASA Member',
            'Theralux Partner',
            'ABN Registered',
            'Public Liability Insured',
            'Australian Standards Compliant',
            'Castle Hill Based',
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-500">
              <Shield size={14} className="text-aqua-500/60" />
              <span className="text-xs uppercase tracking-widest font-bold">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
