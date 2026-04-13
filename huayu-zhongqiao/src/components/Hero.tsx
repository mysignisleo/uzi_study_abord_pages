import { motion } from 'framer-motion';
import { siteData } from '../data';
import { ArrowRight, Globe } from 'lucide-react';

export default function Hero() {
  const { titleZh, titleEn, subtitleZh, subtitleEn } = siteData.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-900 pt-20">
      {/* Background Graphic */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-800 via-primary-900 to-[#050a15] opacity-80" />
        
        {/* Abstract shapes representing Azerbaijan and China flags/networks */}
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-24 h-24 mb-8 rounded-full bg-gradient-to-tr from-brand-red to-red-500 flex items-center justify-center shadow-2xl shadow-brand-red/40 border-4 border-white/10 relative"
        >
          <Globe className="w-12 h-12 text-white" strokeWidth={1.5} />
          {/* Decorative star for China flag / Crescent for Azerbaijan */}
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-gold shadow-lg shadow-brand-gold/50 flex items-center justify-center">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-lg leading-tight"
        >
          {titleZh.split('：').map((part, i, arr) => (
            <span key={i}>
              {part}{i < arr.length - 1 && <span className="text-brand-red mx-1">：</span>}
              {i === 0 && <br className="hidden md:block" />}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-300 font-sans font-light tracking-wide max-w-3xl mb-8"
        >
          {titleEn}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-8"
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-2"
        >
          <h2 className="text-2xl md:text-3xl text-white font-serif tracking-widest">{subtitleZh}</h2>
          <p className="text-slate-400 font-sans text-sm md:text-base max-w-2xl text-center">{subtitleEn}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex gap-4"
        >
          <a href="#programs" className="group flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-red-700 transition-all hover:scale-105 shadow-xl shadow-brand-red/30">
            探索项目 / Explore Programs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-brand-light fill-current">
          <path d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
