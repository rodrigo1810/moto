import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Modelos', href: '#catalog' },
    { name: 'Aluguel', href: '#rental' },
    { name: 'Benefícios', href: '#benefits' },
  ];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-neon-green rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap className="text-black fill-black" size={24} />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter">
            VOLT<span className="text-neon-green">DRIVE</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-neon-green transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-green text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors uppercase tracking-widest"
          >
            Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass py-6 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium hover:text-neon-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-green text-black px-6 py-3 rounded-xl text-center font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  );
}
