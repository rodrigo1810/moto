import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Battery, Gauge, Timer, ShoppingCart, MessageCircle, Key, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOTORCYCLES, WHATSAPP_NUMBER } from '../constants';
import { Motorcycle } from '../types';

export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState<Motorcycle | null>(null);

  return (
    <section id="catalog" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Nossa <span className="text-neon-green">Frota</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Modelos selecionados para diferentes perfis de uso. Do trabalho ao lazer, temos a moto elétrica ideal para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOTORCYCLES.map((moto, index) => (
            <motion.div 
              key={moto.id}
              layoutId={moto.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-[2.5rem] overflow-hidden group hover:border-neon-green/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={moto.image} 
                  alt={moto.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold border border-white/10">
                  {moto.rentalPrice}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{moto.name}</h3>
                <p className="text-neon-green font-display text-xl font-bold mb-6">{moto.price}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <Battery size={18} className="mx-auto mb-2 text-zinc-500" />
                    <p className="text-[10px] uppercase text-zinc-500 font-bold">Autonomia</p>
                    <p className="text-sm font-bold">{moto.autonomy}</p>
                  </div>
                  <div className="text-center">
                    <Gauge size={18} className="mx-auto mb-2 text-zinc-500" />
                    <p className="text-[10px] uppercase text-zinc-500 font-bold">Velocidade</p>
                    <p className="text-sm font-bold">{moto.maxSpeed}</p>
                  </div>
                  <div className="text-center">
                    <Timer size={18} className="mx-auto mb-2 text-zinc-500" />
                    <p className="text-[10px] uppercase text-zinc-500 font-bold">Recarga</p>
                    <p className="text-sm font-bold">{moto.chargeTime}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => setSelectedProduct(moto)}
                    className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-neon-green transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Quero comprar
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, tenho interesse em alugar a ${moto.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                    >
                      <Key size={16} className="text-neon-green" />
                      Alugar
                    </a>
                    <button 
                      onClick={() => setSelectedProduct(moto)}
                      className="glass py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                    >
                      Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProductModal({ product, onClose }: { product: Motorcycle, onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
      />
      
      <motion.div 
        layoutId={product.id}
        className="relative w-full max-w-5xl glass rounded-[3rem] overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all"
        >
          <X size={24} />
        </button>

        {/* Gallery */}
        <div className="w-full md:w-1/2 bg-zinc-900 relative">
          <img 
            src={product.gallery[activeImage]} 
            alt={product.name} 
            className="w-full h-full object-cover aspect-square md:aspect-auto"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {product.gallery.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeImage === i ? 'bg-neon-green w-8' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <span className="text-neon-green font-bold text-sm uppercase tracking-widest mb-4 block">Lançamento 2024</span>
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-3xl font-display font-bold">{product.price}</span>
            <span className="text-zinc-500 line-through text-lg">R$ 14.500</span>
          </div>

          <p className="text-zinc-400 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {product.specs.map((spec) => (
              <div key={spec.label} className="border-b border-white/10 pb-2">
                <p className="text-[10px] uppercase text-zinc-500 font-bold mb-1">{spec.label}</p>
                <p className="font-bold">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, quero comprar a ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-neon-green text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <ShoppingCart size={20} />
              Comprar Agora
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, quero alugar a ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <Key size={20} className="text-neon-green" />
              Reservar Aluguel
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
