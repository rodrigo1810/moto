import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Catalog from './components/Catalog';
import Rental from './components/Rental';
import AIChat from './components/AIChat';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Catalog />
        <Rental />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      <AIChat />
    </div>
  );
}
