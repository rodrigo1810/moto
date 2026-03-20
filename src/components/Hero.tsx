import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1920&auto=format&fit=crop" 
          alt="Electric Motorcycle Urban Scene" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-neon-green/20 border border-neon-green/30 text-neon-green text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            O Futuro da Mobilidade
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
            Mobilidade elétrica <br />
            <span className="text-neon-green">prática e econômica</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light">
            Compre ou alugue motos elétricas com atendimento rápido, sem burocracia e tecnologia de ponta para o seu dia a dia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#catalog" 
              className="group w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-neon-green transition-all duration-300"
            >
              Ver modelos
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto glass px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle size={20} className="text-neon-green" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-green rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
