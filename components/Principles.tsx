import React from 'react';
import { PRINCIPLES } from '../constants';
import { Scroll, Gavel, School, GraduationCap, Factory, UserCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const REFORMS_LIST = [
  { title: "Harf Devrimi", date: "1928", icon: Scroll, desc: "Yeni Türk alfabesinin kabulü." },
  { title: "Hukuk Devrimi", date: "1926", icon: Gavel, desc: "İsviçre Medeni Kanunu." },
  { title: "Eğitim Birliği", date: "1924", icon: School, desc: "Tevhid-i Tedrisat Kanunu." },
  { title: "Kılık Kıyafet", date: "1925", icon: UserCheck, desc: "Modern kıyafet devrimi." },
  { title: "Kadın Hakları", date: "1934", icon: GraduationCap, desc: "Seçme ve seçilme hakkı." },
  { title: "Sanayi Hamlesi", date: "1923", icon: Factory, desc: "Milli ekonomi modeli." },
];

const Principles: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] text-white">
      <div className="container mx-auto px-6">
        
        {/* REFORMS GRID */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-amber-500 tracking-[0.2em] uppercase text-xs font-bold">Çağdaşlaşma</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Büyük Devrimler</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFORMS_LIST.map((reform, idx) => {
               const Icon = reform.icon;
               return (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5 }}
                  className="group p-8 bg-zinc-900/30 border border-white/5 hover:border-amber-500/30 hover:bg-zinc-900/80 rounded-xl transition-all duration-300"
                >
                  <div className="mb-6 inline-flex p-3 rounded-lg bg-amber-500/10 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{reform.title}</h3>
                    
                    {/* --- FIX BURADA: text-zinc-500 -> text-zinc-300 ve border eklendi --- */}
                    <span className="text-xs text-zinc-300 font-mono bg-zinc-800 border border-white/10 px-2 py-1 rounded shadow-sm">
                      {reform.date}
                    </span>

                  </div>
                  {/* --- FIX BURADA: text-zinc-400 daha güvenli --- */}
                  <p className="text-zinc-400 text-sm leading-relaxed">{reform.desc}</p>
                </motion.div>
               )
            })}
          </div>
        </div>

        {/* 6 ARROWS (ALTIOK) */}
        <div className="relative py-12 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 font-black tracking-tight">ALTI OK</h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm">Cumhuriyetin temel niteliklerini oluşturan ana ilkeler.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 hover:border-red-600/50 transition-all duration-500 p-6 md:p-8 hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)]">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="text-red-500 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-zinc-200 group-hover:text-red-500 mb-3 uppercase tracking-wide transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed">
                  {p.desc}
                </p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Principles;