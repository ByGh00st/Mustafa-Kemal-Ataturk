import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">
              1881 - 193<span className="text-amber-500">∞</span>
            </h2>
            <p className="text-zinc-400 text-sm">Saygı, Minnet ve Özlemle...</p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://www.anitkabir.tsk.tr/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm font-medium uppercase tracking-wider hover:underline underline-offset-4">
              Anıtkabir
            </a>
            <a href="https://atam.gov.tr/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm font-medium uppercase tracking-wider hover:underline underline-offset-4">
              Atatürk Araştırma Merkezi
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          {/* --- FIX BURADA: text-zinc-500 -> text-zinc-400 --- */}
          <p className="text-zinc-400 text-xs">
            &copy; {new Date().getFullYear()} Türkiye Cumhuriyeti İlelebet Payidar Kalacaktır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;