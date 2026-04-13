import { motion } from 'framer-motion';

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const navLinks = [
    { name: '关于我们 / About', href: '#about' },
    { name: '为什么选择中国 / Why China', href: '#why-china' },
    { name: '项目介绍 / Programs', href: '#programs' },
    { name: '申请流程 / Process', href: '#process' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-serif font-bold text-xl">
            华
          </div>
          <div className={`font-serif font-bold text-xl ${scrolled ? 'text-primary-900' : 'text-white'}`}>
            华语中桥
            <span className={`block text-xs font-sans ${scrolled ? 'text-primary-600' : 'text-white/80'}`}>Huayu Zhongqiao</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 rounded-full bg-brand-red text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/30">
            联系我们 / Contact Us
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
