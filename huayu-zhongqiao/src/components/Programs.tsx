import { motion } from 'framer-motion';
import { siteData } from '../data';
import { BookOpen, LineChart, Zap, Network } from 'lucide-react';

export default function Programs() {
  const { titleZh, titleEn, majors, shortTerm } = siteData.programs;

  return (
    <section id="programs" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-6">
        
        {/* Popular Majors */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">{titleZh}</h2>
            <p className="text-primary-500 font-sans text-xl uppercase tracking-widest">{titleEn}</p>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {majors.map((major, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50"
              >
                <div className="bg-primary-900 p-8 text-white relative overflow-hidden">
                  <div className="absolute right-0 top-0 opacity-10 scale-150 -translate-y-1/4 translate-x-1/4">
                    {idx === 0 ? <Network className="w-48 h-48" /> : <LineChart className="w-48 h-48" />}
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-2 relative z-10">{major.titleZh}</h3>
                  <p className="text-primary-300 font-sans tracking-widest relative z-10">{major.titleEn}</p>
                </div>
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-primary-900 mb-4">
                      <BookOpen className="w-5 h-5 text-brand-red" />
                      核心课程 / Core Curriculum
                    </h4>
                    <p className="text-slate-600 mb-2">{major.coursesZh}</p>
                    <p className="text-slate-400 font-sans text-sm">{major.coursesEn}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-primary-900 mb-4">
                      <Briefcase className="w-5 h-5 text-brand-red" />
                      就业方向 / Career Prospects
                    </h4>
                    <p className="text-slate-600 mb-2">{major.careerZh}</p>
                    <p className="text-slate-400 font-sans text-sm">{major.careerEn}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Short-term Programs */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">{shortTerm.titleZh}</h2>
            <p className="text-primary-500 font-sans text-lg uppercase tracking-widest mb-6">{shortTerm.titleEn}</p>
            <p className="text-slate-600 max-w-3xl mx-auto mb-2 text-lg">{shortTerm.descZh}</p>
            <p className="text-slate-500 font-sans text-sm max-w-3xl mx-auto">{shortTerm.descEn}</p>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {shortTerm.themes.map((theme, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-red/10 to-transparent rounded-bl-full" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary-900 text-white rounded-xl flex items-center justify-center shadow-lg">
                    {idx === 0 ? <Zap className="w-6 h-6" /> : <LineChart className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-primary-900">{theme.titleZh}</h3>
                    <p className="text-primary-500 font-sans text-sm">{theme.titleEn}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold text-brand-red mb-2 tracking-wider">课程内容 / CONTENT</div>
                    <p className="text-slate-700 text-sm mb-1">{theme.coursesZh}</p>
                    <p className="text-slate-500 font-sans text-xs">{theme.coursesEn}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-red mb-2 tracking-wider">企业参访 / VISITS</div>
                    <p className="text-slate-700 text-sm mb-1">{theme.visitsZh}</p>
                    <p className="text-slate-500 font-sans text-xs">{theme.visitsEn}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
