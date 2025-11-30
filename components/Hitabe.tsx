import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const HITABE_TEXT = [
  "Ey Türk gençliği! Birinci vazifen; Türk istiklalini, Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir.",
  "Mevcudiyetinin ve istikbalinin yegâne temeli budur. Bu temel, senin en kıymetli hazinendir. İstikbalde dahi seni bu hazineden mahrum etmek isteyecek dâhilî ve haricî bedhahların olacaktır. Bir gün, istiklal ve cumhuriyeti müdafaa mecburiyetine düşersen, vazifeye atılmak için içinde bulunacağın vaziyetin imkân ve şeraitini düşünmeyeceksin. Bu imkân ve şerait, çok namüsait bir mahiyette tezahür edebilir. İstiklal ve cumhuriyetine kastedecek düşmanlar, bütün dünyada emsali görülmemiş bir galibiyetin mümessili olabilirler. Cebren ve hile ile aziz vatanın bütün kaleleri zapt edilmiş, bütün tersanelerine girilmiş, bütün orduları dağıtılmış ve memleketin her köşesi bilfiil işgal edilmiş olabilir. Bütün bu şeraitten daha elim ve daha vahim olmak üzere, memleketin dâhilinde iktidara sahip olanlar, gaflet ve dalalet ve hatta hıyanet içinde bulunabilirler. Hatta bu iktidar sahipleri, şahsî menfaatlerini, müstevlilerin siyasî emelleriyle tevhit edebilirler. Millet, fakr u zaruret içinde harap ve bitap düşmüş olabilir.",
  "Ey Türk istikbalinin evladı! İşte, bu ahval ve şerait içinde dahi vazifen, Türk istiklal ve cumhuriyetini kurtarmaktır. Muhtaç olduğun kudret, damarlarındaki asil kanda mevcuttur!"
];

const Hitabe: React.FC = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <Quote className="w-12 h-12 text-amber-500/30 mx-auto mb-6 rotate-180" />
          <h2 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 tracking-tight drop-shadow-lg">
            GENÇLİĞE HİTABE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* The Text - Scroll Reveal */}
        <div className="max-w-4xl mx-auto space-y-8 text-center md:text-justify px-4 md:px-0">
          {HITABE_TEXT.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`
                leading-relaxed font-serif text-lg md:text-2xl tracking-wide
                ${index === 0 ? "text-amber-100 font-bold" : "text-zinc-300"}
                ${index === 2 ? "text-amber-500 font-bold md:text-3xl mt-12 !text-center" : ""}
              `}
              style={{ textShadow: index === 2 ? '0 0 20px rgba(245,158,11,0.3)' : 'none' }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Signature */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative group">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/4/46/Signature_of_Mustafa_Kemal_Atat%C3%BCrk.svg" 
               alt="K. Atatürk İmzası" 
               className="w-48 md:w-64 h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500 invert"
             />
             <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hitabe;