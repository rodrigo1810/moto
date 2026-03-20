import React from 'react';
import { motion } from 'motion/react';
import { Zap, Leaf, Smile, ShieldCheck, Star } from 'lucide-react';
import { BENEFITS } from '../constants';

const iconMap: Record<string, any> = {
  Zap,
  Leaf,
  Smile,
  ShieldCheck
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que mudar para <span className="text-neon-green">elétrico?</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Mais do que uma tendência, a mobilidade elétrica é a solução inteligente para quem valoriza tempo, dinheiro e o meio ambiente.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-2xl flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-zinc-900"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-neon-green mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider">
                +1.500 Clientes Satisfeitos
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl hover:border-neon-green/50 transition-all group"
              >
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-green transition-colors">
                  <Icon className="text-neon-green group-hover:text-black transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
