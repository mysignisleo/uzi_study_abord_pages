import { motion } from 'framer-motion';
import { siteData } from '../data';
import { FileText, CreditCard, Home, Languages, HeartHandshake, BriefcaseBusiness } from 'lucide-react';

export default function Services() {
  const { titleZh, titleEn, descZh, descEn, items } = siteData.services;

  const iconMap = [
    <FileText className="w-8 h-8 text-brand-red" />,
    <CreditCard className="w-8 h-8 text-brand-gold" />,
    <Home className="w-8 h-8 text-blue-500" />,
    <Languages className="w-8 h-8 text-emerald-500" />,
    <HeartHandshake className="w-8 h-8 text-purple-500" />,
    <BriefcaseBusiness className="w-8 h-8 text-orange-500" />
  ];

  return (
    <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            {titleZh}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-300 font-sans text-xl uppercase tracking-widest mb-6"
          >
            {titleEn}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-200 max-w-2xl mx-auto"
          >
            {descZh}<br/>
            <span className="text-sm text-primary-400 font-sans">{descEn}</span>
          </motion.p>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-primary-800/50 backdrop-blur-sm rounded-3xl p-8 border border-primary-700/50 hover:bg-primary-800 transition-colors group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {iconMap[idx]}
              </div>
              <h3 className="text-2xl font-bold font-serif mb-1 group-hover:text-brand-gold transition-colors">{item.titleZh}</h3>
              <h4 className="text-sm font-sans text-primary-400 mb-4 uppercase tracking-wider">{item.titleEn}</h4>
              <p className="text-primary-200/80 leading-relaxed text-justify">
                {item.descZh}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
