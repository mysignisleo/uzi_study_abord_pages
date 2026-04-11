import { Globe, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-primary-800">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg shadow-brand-red/50">
                华
              </div>
              <div>
                <h2 className="font-serif font-bold text-3xl">华语中桥</h2>
                <h3 className="font-sans text-primary-400 tracking-widest text-sm uppercase mt-1">Huayu Zhongqiao</h3>
              </div>
            </div>
            
            <p className="text-primary-300 font-serif text-xl mb-2">连接未来，筑梦中国</p>
            <p className="text-primary-400 font-sans tracking-wide mb-8 text-sm">Connecting the Future, Building Dreams in China</p>

          </div>

          {/* Contact Details */}
          <div className="grid sm:grid-cols-2 gap-8 lg:justify-end">
            <div className="bg-primary-900/50 p-6 rounded-2xl border border-primary-800 backdrop-blur-sm hover:border-brand-red/50 transition-colors">
              <Globe className="w-8 h-8 text-brand-red mb-4" />
              <h4 className="font-bold text-lg mb-1">官方网站</h4>
              <p className="text-primary-400 font-sans text-sm mb-3">Official Website</p>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">www.huayu-zhongqiao.com</a>
            </div>
            
            <div className="bg-primary-900/50 p-6 rounded-2xl border border-primary-800 backdrop-blur-sm hover:border-brand-red/50 transition-colors">
              <Mail className="w-8 h-8 text-brand-red mb-4" />
              <h4 className="font-bold text-lg mb-1">电子邮箱</h4>
              <p className="text-primary-400 font-sans text-sm mb-3">Email</p>
              <a href="mailto:info@huayu-zhongqiao.com" className="text-primary-200 hover:text-white transition-colors">info@huayu-zhongqiao.com</a>
            </div>

            <div className="sm:col-span-2 bg-primary-900/50 p-6 rounded-2xl border border-primary-800 backdrop-blur-sm hover:border-brand-red/50 transition-colors">
              <MapPin className="w-8 h-8 text-brand-red mb-4" />
              <h4 className="font-bold text-lg mb-1">地址</h4>
              <p className="text-primary-400 font-sans text-sm mb-3">Address</p>
              <p className="text-primary-200 leading-relaxed">
                中国北京<br/>
                <span className="font-sans text-sm">Beijing, China</span>
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-primary-500 font-sans text-sm">
            &copy; {new Date().getFullYear()} 华语中桥 Huayu Zhongqiao. All rights reserved.
          </p>
          <p className="text-primary-400 font-sans text-sm tracking-widest uppercase">
            期待您的加入，探索无限可能。
          </p>
        </div>
      </div>
    </footer>
  );
}
