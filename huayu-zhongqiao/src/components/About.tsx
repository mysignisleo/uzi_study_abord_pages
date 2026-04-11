import { motion } from 'framer-motion';
import { siteData } from '../data';
import { Building2, Handshake } from 'lucide-react';

export default function About() {
  const { about, cooperation } = siteData;

  return (
    <section id="about" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-6">
        
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-red/20 to-primary-900/10 rounded-3xl blur-xl z-0" />
            <div className="relative z-10 glass p-10 md:p-12 rounded-3xl border border-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-12 bg-brand-red rounded-full" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900">{about.titleZh}</h2>
                  <p className="text-primary-600 font-sans text-lg tracking-wider mt-1">{about.titleEn}</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 text-justify">
                {about.descZh}
              </p>
              <p className="text-slate-500 font-sans leading-relaxed">
                {about.descEn}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="University Campus" 
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-primary-900/90 to-transparent z-20">
              <Building2 className="text-white w-8 h-8 mb-3 opacity-80" />
              <h3 className="text-white font-serif text-2xl font-bold">连接未来，筑梦中国</h3>
            </div>
          </motion.div>
        </div>

        {/* Cooperation Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-2">
              {cooperation.titleZh}
            </h2>
            <p className="text-primary-600 font-sans text-lg tracking-wider">{cooperation.titleEn}</p>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cooperation.points.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  {idx === 0 ? <Globe className="w-6 h-6" /> : <Handshake className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-1">{point.titleZh}</h3>
                <h4 className="text-sm font-sans text-primary-500 mb-4">{point.titleEn}</h4>
                <p className="text-slate-600 mb-3 text-justify leading-relaxed">{point.descZh}</p>
                <p className="text-slate-500 font-sans text-sm leading-relaxed">{point.descEn}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
