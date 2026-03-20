import React from 'react';
import { Zap, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

export default function Footer() {
  const formattedPhone = "(13) 99163-4188";
  
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-neon-green rounded-lg flex items-center justify-center">
                <Zap className="text-black fill-black" size={20} />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                VOLT<span className="text-neon-green">DRIVE</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Líder em mobilidade elétrica urbana. Oferecemos as melhores soluções em vendas e aluguel de motos elétricas com tecnologia de ponta e zero burocracia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-neon-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-neon-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-neon-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-neon-green transition-colors">Início</a></li>
              <li><a href="#catalog" className="hover:text-neon-green transition-colors">Modelos</a></li>
              <li><a href="#rental" className="hover:text-neon-green transition-colors">Aluguel</a></li>
              <li><a href="#benefits" className="hover:text-neon-green transition-colors">Benefícios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-neon-green" />
                Litoral de São Paulo, Brasil
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-neon-green" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                  {formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-neon-green" />
                contato@voltdrive.com.br
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-4">Receba novidades e ofertas exclusivas.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-neon-green"
              />
              <button className="bg-neon-green text-black px-4 py-2 rounded-xl font-bold text-sm hover:bg-white transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 VoltDrive Mobilidade Elétrica. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
