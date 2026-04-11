import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { titleZh, titleEn, questions } = siteData.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4"
          >
            {titleZh}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-500 font-sans text-xl uppercase tracking-widest"
          >
            {titleEn}
          </motion.p>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-brand-light rounded-2xl overflow-hidden border border-slate-100"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <div className="pr-8">
                  <h3 className="text-lg font-bold font-serif text-primary-900 mb-1">{q.qZh}</h3>
                  <h4 className="text-sm font-sans text-primary-500 tracking-wide">{q.qEn}</h4>
                </div>
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-primary-50 text-brand-red transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-brand-red text-white' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 md:p-8 pt-0 border-t border-slate-100">
                      <div className="w-8 h-1 bg-brand-gold mb-4 rounded-full mt-6" />
                      <p className="text-slate-600 leading-relaxed mb-3 text-justify">{q.aZh}</p>
                      <p className="text-slate-500 font-sans text-sm leading-relaxed">{q.aEn}</p>
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
