import React, { useState, useMemo } from 'react';
import { MAP_POINTS } from '../constants';
import { MapPoint } from '../types';
import { X, MapPin, Sword, Users, Target, Calendar, RotateCcw, Quote, BookOpen } from 'lucide-react';
import TurkeyMapSVG from './TurkeyMapSVG';
import { motion, AnimatePresence } from 'framer-motion';

const EVENT_THEMES: Record<string, { 
  primary: string; 
  secondary: string; 
  gradient: string; 
  shadow: string;
  badge: string;
  dotColor: string;
}> = {
  battle: { 
    primary: 'text-rose-400', 
    secondary: 'text-rose-200',
    gradient: 'from-rose-900/90 via-red-900/60 to-zinc-900',
    shadow: 'shadow-rose-900/20',
    badge: 'bg-rose-500/20 border-rose-500/30 text-rose-300',
    dotColor: '#fb7185'
  },
  congress: { 
    primary: 'text-sky-400', 
    secondary: 'text-sky-200',
    gradient: 'from-sky-900/90 via-blue-900/60 to-zinc-900',
    shadow: 'shadow-sky-900/20',
    badge: 'bg-sky-500/20 border-sky-500/30 text-sky-300',
    dotColor: '#38bdf8'
  },
  arrival: { 
    primary: 'text-emerald-400', 
    secondary: 'text-emerald-200',
    gradient: 'from-emerald-900/90 via-green-900/60 to-zinc-900',
    shadow: 'shadow-emerald-900/20',
    badge: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300',
    dotColor: '#34d399'
  },
  republic: { 
    primary: 'text-violet-400', 
    secondary: 'text-violet-200',
    gradient: 'from-violet-900/90 via-purple-900/60 to-zinc-900',
    shadow: 'shadow-violet-900/20',
    badge: 'bg-violet-500/20 border-violet-500/30 text-violet-300',
    dotColor: '#a78bfa'
  },  
  default: { 
    primary: 'text-amber-400', 
    secondary: 'text-amber-200',
    gradient: 'from-amber-900/90 via-orange-900/60 to-zinc-900',
    shadow: 'shadow-amber-900/20',
    badge: 'bg-amber-500/20 border-amber-500/30 text-amber-300',
    dotColor: '#fbbf24'
  },
};

const pointVariants = {
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.6, transition: { duration: 0.2, ease: "easeIn" } },
};

const WarMap: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const visiblePoints = useMemo(() => {
    if (activeFilter === 'all') return MAP_POINTS;
    return MAP_POINTS.filter(point => point.type === activeFilter);
  }, [activeFilter]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'battle': return <Sword className="w-3 h-3" />;
      case 'congress': return <Users className="w-3 h-3" />;
      case 'arrival': return <Target className="w-3 h-3" />;
      case 'republic': return <BookOpen className="w-3 h-3" />;
      default: return <MapPin className="w-3 h-3" />;
    }
  };

  const getTheme = (type: string) => EVENT_THEMES[type] || EVENT_THEMES.default;

  return (
    <section id="map" className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col p-4 md:p-6 lg:p-8">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-[#050505] to-[#050505]"></div>
        <div className="h-full w-full opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#666 1px, transparent 1px), linear-gradient(90deg, #666 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto relative z-10 flex-1 flex flex-col">
        
        <div className="text-center mb-6 md:mb-8 space-y-2 shrink-0">
           <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight drop-shadow-lg">
            MİLLİ MÜCADELE
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light">
            Harita üzerindeki noktaları filtreleyerek olayları kronolojik ve türüne göre inceleyebilirsiniz.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-6 md:mb-8 shrink-0">
          {[
            { label: 'Muharebeler', color: 'bg-rose-500', type: 'battle' },
            { label: 'Kongreler', color: 'bg-sky-500', type: 'congress' },
            { label: 'Başlangıç', color: 'bg-emerald-500', type: 'arrival' },
            { label: 'Cumhuriyet', color: 'bg-violet-500', type: 'republic' }
          ].map((item) => {
            const isActive = activeFilter === item.type;
            return (
              <button key={item.type} onClick={() => setActiveFilter(isActive ? 'all' : item.type)} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 group ${ isActive ? `bg-zinc-800 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]` : 'bg-zinc-900/60 border-white/5 hover:bg-zinc-800' }`} >
                <div className={`w-2 h-2 ${item.color} rounded-full shadow-[0_0_8px_currentColor] transition-transform ${isActive ? 'scale-125' : 'scale-100'}`}></div>
                <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}> {item.label} </span>
              </button>
            )
          })}
          <AnimatePresence>
            {activeFilter !== 'all' && (
              <motion.button initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} onClick={() => setActiveFilter('all')} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-xs uppercase" >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Temizle</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="relative w-full flex-1 min-h-0 bg-[#151518]/50 backdrop-blur-sm rounded-3xl shadow-[0_0_40px_rgba(128,128,255,0.05)] overflow-hidden isolate">
          <TurkeyMapSVG className="w-full h-full object-contain transition-all duration-700 ease-in-out">
            <AnimatePresence>
              {visiblePoints.map((point) => {
                const theme = getTheme(point.type);
                const isSelected = selectedPoint?.id === point.id;
                const fillColor = theme.dotColor;
                return (
                  <motion.g key={point.id} variants={pointVariants} initial="initial" animate="animate" exit="exit" className="cursor-pointer group/pin" onClick={(e) => { e.stopPropagation(); setSelectedPoint(point); }} style={{ pointerEvents: 'bounding-box' }} >
                    <circle cx={point.x} cy={point.y} r={isSelected ? 18 : 8} className={`fill-transparent stroke-2 opacity-60 transition-all duration-1000 ease-out origin-center ${isSelected ? 'stroke-white animate-pulse' : ''}`} stroke={fillColor} strokeOpacity={0.5} />
                    <circle cx={point.x} cy={point.y} r={isSelected ? 5 : 3.5} fill={fillColor} className="transition-all duration-300 group-hover/pin:r-5 shadow-lg" style={{ filter: `drop-shadow(0 0 6px ${fillColor})` }} />
                    <circle cx={point.x} cy={point.y} r="25" className="fill-transparent" />
                    <text x={point.x} y={point.y + 16} textAnchor="middle" className={`font-sans font-bold text-[8px] md:text-[9px] tracking-wider uppercase transition-all duration-300 ${isSelected ? 'fill-white text-[10px]' : 'fill-gray-400 group-hover/pin:fill-white'}`} style={{ textShadow: '0 1px 3px rgba(0,0,0,1)', paintOrder: 'stroke', stroke: '#050505', strokeWidth: '3px' }}>
                      {point.city}
                    </text>
                  </motion.g>
                );
              })}
            </AnimatePresence>
          </TurkeyMapSVG>

          <AnimatePresence>
            {selectedPoint && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute z-50 
                           top-4 left-4 right-4 w-auto max-h-[calc(100%-2rem)] 
                           md:top-6 md:left-auto md:right-6 md:w-[360px] md:max-h-[calc(100%-3rem)]
                           bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const theme = getTheme(selectedPoint.type);
                  return (
                    <>
                      <div className={`relative p-5 pb-5 bg-gradient-to-b ${theme.gradient} shrink-0`}>
                        <button onClick={() => setSelectedPoint(null)} className="absolute top-3 right-3 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white transition-colors border border-white/5 backdrop-blur-md">
                          <X size={14} />
                        </button>
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider mb-3 border backdrop-blur-md ${theme.badge}`}>
                          {getEventIcon(selectedPoint.type)}
                          <span>
                            {selectedPoint.type === 'congress' ? 'Milli Kongre' : 
                             selectedPoint.type === 'battle' ? 'Cephe Savaşı' : 
                             selectedPoint.type === 'republic' ? 'Devrim' : 'Başlangıç'}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-display font-bold text-white leading-tight mb-2 drop-shadow-lg">
                          {selectedPoint.title}
                        </h2>
                        <div className="flex items-center gap-3 text-xs text-white/80 font-medium">
                          <div className="flex items-center gap-1">
                            <MapPin size={12} className={theme.primary} />
                            <span className="uppercase tracking-wide">{selectedPoint.city}</span>
                          </div>
                          <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} className={theme.primary} />
                            <span>{selectedPoint.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-y-auto px-5 py-4 space-y-5 custom-scrollbar bg-[#121212]">
                        <p className="text-sm leading-relaxed border-l-2 border-white/10 pl-4 text-gray-300">
                          {selectedPoint.description}
                        </p>
                        {selectedPoint.quote && (
                          <div className="relative p-4 bg-white/5 rounded-xl border border-white/5">
                            <Quote className={`absolute top-3 left-3 w-4 h-4 opacity-20 ${theme.primary}`} />
                            <blockquote className={`relative z-10 text-center font-serif italic text-sm ${theme.secondary}`}>
                              "{selectedPoint.quote}"
                            </blockquote>
                          </div>
                        )}
                        {selectedPoint.details && (
                          <div className="space-y-2">
                            <h4 className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Detaylar</h4>
                            <ul className="space-y-1.5">
                              {selectedPoint.details.split('.').filter(d => d.trim().length > 2).map((d, i) => (
                                <li key={i} className="flex gap-2.5 text-xs text-gray-400">
                                  <span className="leading-relaxed">{d.trim()}.</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {selectedPoint.importance && (
                          <div className={`p-3 rounded-xl border border-dashed border-white/10 bg-gradient-to-br from-zinc-900 to-black ${theme.shadow}`}>
                            <h4 className={`text-[9px] font-bold uppercase tracking-wide mb-1 ${theme.primary}`}>
                              Tarihi Önemi
                            </h4>
                            <p className="text-xs text-gray-400 font-medium">
                              {selectedPoint.importance}
                            </p>
                          </div>
                        )}
                        <div className="h-2"></div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.25); }
        #map svg path {
           stroke: #4b5563 !important;
           fill: #1f2937 !important;
           transition: fill 0.5s ease;
           stroke-width: 0.5px;
        }
        #map svg path:hover {
           fill: #374151 !important;
        }
      `}</style>
    </section>
  );
};

export default WarMap;

