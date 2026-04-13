import { motion } from 'framer-motion';
import { siteData } from '../data';

export default function Process() {
  const { titleZh, titleEn, steps } = siteData.process;

  return (
    <section id="process" className="py-32 bg-brand-light relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
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
            className="text-primary-500 font-sans text-xl uppercase tracking-widest"
          >
            {titleEn}
          </motion.p>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-8 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red/50 via-primary-300 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-white rounded-full border-4 border-brand-red shadow-xl shadow-brand-red/20 -translate-x-1/2 flex items-center justify-center z-10 font-sans font-bold text-brand-red text-xl">
                  {step.num}
                </div>

                {/* Content Box */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="text-sm font-bold font-sans text-brand-red mb-2 uppercase tracking-widest">
                      Step {step.num}
                    </div>
                    <h3 className="text-2xl font-bold font-serif text-primary-900 mb-1 group-hover:text-brand-red transition-colors">
                      {step.titleZh}
                    </h3>
                    <h4 className="text-sm font-sans text-primary-500 mb-4 tracking-wider">
                      {step.titleEn}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {step.descZh}
                    </p>
                  </div>
                </div>
                
                {/* Empty Space for Grid Alignment on Desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Support Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-brand-red to-red-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-brand-red/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <h3 className="text-white font-serif text-2xl md:text-3xl font-bold mb-3 relative z-10">全程无忧服务 / Worry-Free Journey</h3>
          <p className="text-white/90 text-lg relative z-10">
            我们的专业团队将为您提供一对一的全程支持，助您顺利开启在中国的学习之旅。<br/>
            <span className="text-sm font-sans mt-2 block opacity-80">Our professional team will provide you with one-on-one full support to help you smoothly start your study journey in China.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
