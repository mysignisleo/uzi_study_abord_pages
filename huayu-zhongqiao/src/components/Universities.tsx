import { motion } from 'framer-motion';
import { siteData } from '../data';
import { Landmark } from 'lucide-react';

export default function Universities() {
  const { titleZh, titleEn, list } = siteData.universities;

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4"
          >
            {titleZh}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-500 font-sans text-xl uppercase tracking-[0.1em]"
          >
            {titleEn}
          </motion.p>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((uni, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="bg-brand-light rounded-2xl p-8 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-slate-100 group"
            >
              <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary-900 mb-1">{uni.nameZh}</h3>
              <h4 className="text-xs font-sans text-primary-500 mb-6 h-8">{uni.nameEn}</h4>
              
              <div>
                <div className="text-xs font-bold text-brand-red mb-2 tracking-wider">优势专业 / MAJORS</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">{uni.majorsZh}</p>
                <p className="text-slate-400 font-sans text-xs leading-relaxed line-clamp-3">{uni.majorsEn}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
