import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How often should I have my pool serviced?',
    answer: 'For most residential pools in Sydney, we recommend regular servicing as a minimum to maintain compliance with Australian standards. Factors like tree coverage, salt vs chlorine systems, and pool usage can affect frequency. Nathan and Kez will assess your situation and recommend the right schedule during your free quote.',
  },
  {
    question: 'How much does regular pool cleaning cost?',
    answer: 'Our regular maintenance programs start from $99.00 per visit plus chemicals. The exact cost depends on pool size and type. We offer flexible plans with no lock-in contracts. Chemicals are additional and depend on what your pool needs each visit. Request a free quote for a price tailored to your pool.',
  },
  {
    question: 'Do you service saltwater and mineral pools?',
    answer: 'Absolutely. We are experienced with all pool types including saltwater, chlorine, mineral (Theralux specialists), and magnesium systems. We carry specialised testing equipment for each sanitisation method and adjust chemical treatments accordingly to Australian standards.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We cover the Sydney metropolitan area with a strong focus on Castle Hill, North Curl Curl, St Ives, Sans Souci, Dural and surrounding suburbs. If you\'re unsure whether we cover your area, just give Nathan or Kez a call — we service Sydney wide.',
  },
  {
    question: 'Can you help with a green pool emergency?',
    answer: 'Yes — green pool recovery is one of our expert services. We can typically restore a green pool to crystal clear within 48-72 hours, depending on severity. Some pools may need more than one visit until the job is complete. Call Nathan and Kez on 02 8850 5222 for immediate assistance.',
  },
  {
    question: 'We just bought a house with a pool — can you help?',
    answer: 'Absolutely! Our New Pool Owner Handover service is designed exactly for this. Nathan or Kez will come out, inspect all the equipment, check the water chemistry, and walk you through everything step by step — the pump, chlorinator, chemicals, the lot. Takes up to an hour.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-32 bg-navy-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-aqua-500">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know before booking. Can't find your answer? <a href="#contact" className="text-aqua-500 hover:underline">Get in touch</a>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-aqua-500 shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
