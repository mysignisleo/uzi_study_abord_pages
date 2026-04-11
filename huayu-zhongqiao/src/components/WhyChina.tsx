import { motion } from 'framer-motion';
import { siteData } from '../data';
import { GraduationCap, Cpu, Briefcase, Globe2 } from 'lucide-react';

export default function WhyChina() {
  const { titleZh, titleEn, reasons } = siteData.whyChina;

  const iconMap: Record<string, any> = {
    'education': <GraduationCap className="w-8 h-8 text-brand-red" strokeWidth={1.5} />,
    'tech': <Cpu className="w-8 h-8 text-blue-500" strokeWidth={1.5} />,
    'employment': <Briefcase className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />,
    'culture': <Globe2 className="w-8 h-8 text-purple-500" strokeWidth={1.5} />
  };

  return (
    <section id="why-china" className="py-32 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wider"
          >
            {titleZh}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-300 font-sans text-xl uppercase tracking-[0.2em]"
          >
            {titleEn}
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-brand-red mx-auto mt-8 origin-left"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-3xl bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 hover:bg-primary-800/80 transition-colors p-8 md:p-10"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                {iconMap[reason.id]}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-lg shadow-black/20">
                  {iconMap[reason.id]}
                </div>
                
                <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-brand-red transition-colors">{reason.titleZh}</h3>
                <h4 className="text-sm font-sans text-primary-400 mb-6 uppercase tracking-wider">{reason.titleEn}</h4>
                
                <p className="text-primary-200/90 leading-relaxed mb-4 text-justify">
                  {reason.descZh}
                </p>
                <p className="text-primary-400 font-sans text-sm leading-relaxed mt-auto">
                  {reason.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
