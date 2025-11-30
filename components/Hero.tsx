import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {

  // Kaydırma Fonksiyonu
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950/80 z-10" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ataturk1930s.jpg/800px-Ataturk1930s.jpg" 
          alt="Mustafa Kemal Atatürk Portresi" 
          className="w-full h-full object-cover grayscale opacity-50 object-top"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 tracking-[0.2em] uppercase text-xs md:text-sm font-bold backdrop-blur-sm">
            Türkiye Cumhuriyeti'nin Kurucusu
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white mb-8 tracking-tighter leading-[0.9]"
        >
          Mustafa Kemal <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">
            ATATÜRK
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-2xl text-zinc-300 font-serif italic mb-10 leading-relaxed drop-shadow-lg">
            "Benim naçiz vücudum elbet bir gün toprak olacaktır; fakat Türkiye Cumhuriyeti ilelebet payidar kalacaktır."
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Butonlara onClick ekledik */}
            <button 
              onClick={scrollToTimeline}
              className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold uppercase tracking-wider rounded overflow-hidden transition-all cursor-pointer"
            >
              <span className="relative z-10">Hayat Yolculuğu</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <a href="#map" className="group px-8 py-4 border border-white/20 hover:border-amber-500/50 hover:bg-white/5 text-white font-bold uppercase tracking-wider rounded transition-all backdrop-blur-sm cursor-pointer">
               Milli Mücadele
            </a>
          </div>
        </motion.div>
      </div>

      {/* DÜZELTİLEN KISIM: onClick EKLENDİ VE CURSOR-POINTER YAPILDI */}
      <motion.button 
        onClick={scrollToTimeline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer z-50 p-2"
        aria-label="Aşağı Kaydır"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
};

export default Hero;