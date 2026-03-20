import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Clock, Bike } from 'lucide-react';

export default function Rental() {
  const steps = [
    {
      icon: Bike,
      title: "Escolha o modelo",
      desc: "Selecione a moto que melhor se adapta ao seu estilo e necessidade."
    },
    {
      icon: Calendar,
      title: "Defina data e tempo",
      desc: "Alugue por 30 minutos, 1 hora ou mais. Você decide quanto tempo quer rodar."
    },
    {
      icon: Clock,
      title: "Retire e aproveite",
      desc: "Retirada rápida em nossa loja. Sem burocracia, só diversão."
    }
  ];

  return (
    <section id="rental" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Aluguel sem <br />
              <span className="text-neon-green">complicação</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12">
              Precisa de uma moto para o final de semana ou para testar antes de comprar? Nosso sistema de aluguel é o mais rápido do mercado.
            </p>

            <div className="space-y-8 mb-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 bg-neon-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <step.icon className="text-neon-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-zinc-500 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-8 p-6 glass rounded-3xl border-neon-green/20">
              <div>
                <p className="text-xs uppercase font-bold text-zinc-500 mb-1">A partir de</p>
                <p className="text-3xl font-display font-bold text-neon-green">R$ 60<span className="text-sm text-white">/30min</span></p>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
                className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-neon-green transition-colors"
              >
                Reservar agora
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1000&auto=format&fit=crop" 
                alt="Rental Experience" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating cards */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -right-8 top-1/4 glass p-6 rounded-3xl hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-neon-green" size={20} />
                <span className="font-bold">Seguro incluso</span>
              </div>
              <p className="text-xs text-zinc-400">Proteção total durante o uso</p>
            </motion.div>

            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -left-8 bottom-1/4 glass p-6 rounded-3xl hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-neon-green" size={20} />
                <span className="font-bold">Capacete grátis</span>
              </div>
              <p className="text-xs text-zinc-400">Segurança em primeiro lugar</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
