import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Grid Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-amber-500 tracking-[0.2em] uppercase text-xs font-bold border-b border-amber-500/30 pb-1">Kronoloji</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mt-4">Bir Ömür, Bin Destan</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Animated */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-amber-500/0 via-amber-600 to-amber-500/0 md:-ml-0.5"
          />

          <div className="space-y-16 md:space-y-32 pb-20">
            {TIMELINE_DATA.map((event, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                
                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-[#050505] border-2 border-amber-500 rounded-full transform -translate-x-[calc(50%-1px)] md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(245,158,11,0.6)]">
                   <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[42%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group relative">
                    
                    {/* LIGHTHOUSE FIX: aria-hidden eklendi, opacity artırıldı ama decorative olduğu belirtildi */}
                    <span 
                      aria-hidden="true" 
                      className={`
                        absolute -top-10 text-8xl font-display font-black text-white/[0.03] select-none z-0 pointer-events-none transition-colors group-hover:text-amber-500/[0.05]
                        ${index % 2 === 0 ? 'right-0' : 'left-0'}
                      `}
                    >
                      {event.year}
                    </span>
                    
                    <div className="relative z-10 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/60 hover:border-amber-500/20 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold rounded mb-4 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                        {event.year}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h3>
                      {/* CONTRAST FIX: text-gray-400 -> text-zinc-300 */}
                      <p className="text-zinc-300 leading-relaxed text-sm md:text-base font-light">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Spacer */}
                <div className="hidden md:block md:w-[42%]"></div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="text-center relative z-10"
          >
             <div className="text-7xl text-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">∞</div>
             <p className="text-zinc-400 text-xs mt-4 tracking-[0.3em] uppercase font-bold">İlelebet Payidar</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;