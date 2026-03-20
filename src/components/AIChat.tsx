import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, MessageCircle } from 'lucide-react';
import { ChatState, ChatStep } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<ChatState>({
    type: null,
    step: 'initial',
    data: {}
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat.step]);

  const handleOption = (type: 'buy' | 'rent') => {
    setChat({
      ...chat,
      type,
      step: type === 'rent' ? 'rent_date' : 'buy_model'
    });
  };

  const updateData = (field: string, value: string, nextStep: ChatStep) => {
    setChat({
      ...chat,
      step: nextStep,
      data: { ...chat.data, [field]: value }
    });
  };

  const getWhatsAppLink = () => {
    const baseText = chat.type === 'rent' 
      ? `Olá! Gostaria de alugar uma moto.\nData: ${chat.data.date}\nDuração: ${chat.data.duration}\nQuantidade: ${chat.data.quantity}`
      : `Olá! Gostaria de comprar uma moto.\nModelo: ${chat.data.model}\nOrçamento: ${chat.data.budget}\nFinalidade: ${chat.data.purpose}`;
    
    const customerInfo = `\n\nDados do Cliente:\nNome: ${chat.data.name}\nTelefone: ${chat.data.phone}`;
    const text = baseText + customerInfo;
    
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-neon-green text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform neon-shadow"
      >
        <Bot size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] glass rounded-[2rem] overflow-hidden flex flex-col shadow-2xl border-neon-green/20"
          >
            {/* Header */}
            <div className="p-6 bg-neon-green text-black flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-neon-green" />
                </div>
                <div>
                  <p className="font-bold leading-none">Volt Assistant</p>
                  <p className="text-[10px] uppercase font-bold opacity-70">Online agora</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Welcome */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                  <Bot size={16} className="text-neon-green" />
                </div>
                <div className="bg-zinc-900 p-4 rounded-2xl rounded-tl-none text-sm">
                  Olá! Sou o assistente da VoltDrive. Como posso te ajudar hoje?
                </div>
              </div>

              {chat.step === 'initial' && (
                <div className="flex flex-col gap-2 pl-11">
                  <button 
                    onClick={() => handleOption('rent')}
                    className="text-left p-3 rounded-xl border border-white/10 hover:border-neon-green hover:bg-neon-green/5 transition-all text-sm"
                  >
                    Quero ALUGAR uma moto
                  </button>
                  <button 
                    onClick={() => handleOption('buy')}
                    className="text-left p-3 rounded-xl border border-white/10 hover:border-neon-green hover:bg-neon-green/5 transition-all text-sm"
                  >
                    Quero COMPRAR uma moto
                  </button>
                </div>
              )}

              {/* Rental Flow */}
              {chat.type === 'rent' && (
                <>
                  <Message bubble="Quero alugar uma moto" isUser />
                  <Message bubble="Ótima escolha! Para quando você precisa da moto?" />
                  {chat.step === 'rent_date' && (
                    <div className="pl-11">
                      <input 
                        type="date" 
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm focus:border-neon-green outline-none"
                        onChange={(e) => updateData('date', e.target.value, 'rent_duration')}
                      />
                    </div>
                  )}
                  
                      {chat.data.date && (
                    <>
                      <Message bubble={chat.data.date} isUser />
                      <Message bubble="Por quanto tempo pretende ficar com ela?" />
                      {chat.step === 'rent_duration' && (
                        <div className="flex flex-wrap gap-2 pl-11">
                          {['30 minutos', '1 hora', '2 horas', 'Diária'].map(d => (
                            <button 
                              key={d}
                              onClick={() => updateData('duration', d, 'rent_qty')}
                              className="p-2 px-4 rounded-full border border-white/10 text-xs hover:border-neon-green"
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {chat.data.duration && (
                    <>
                      <Message bubble={chat.data.duration} isUser />
                      <Message bubble="Quantas motos você precisa?" />
                      {chat.step === 'rent_qty' && (
                        <div className="flex gap-2 pl-11">
                          {['1', '2', '3', '4+'].map(q => (
                            <button 
                              key={q}
                              onClick={() => updateData('quantity', q, 'customer_name')}
                              className="w-10 h-10 rounded-full border border-white/10 text-xs flex items-center justify-center hover:border-neon-green"
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              {/* Buy Flow */}
              {chat.type === 'buy' && (
                <>
                  <Message bubble="Quero comprar uma moto" isUser />
                  <Message bubble="Excelente! Qual modelo mais te chamou atenção?" />
                  {chat.step === 'buy_model' && (
                    <div className="flex flex-col gap-2 pl-11">
                      {['Volt S1 Urban', 'Volt X-Pro', 'Volt Cruiser', 'Ainda não sei'].map(m => (
                        <button 
                          key={m}
                          onClick={() => updateData('model', m, 'buy_budget')}
                          className="text-left p-3 rounded-xl border border-white/10 hover:border-neon-green text-sm"
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  )}

                  {chat.data.model && (
                    <>
                      <Message bubble={chat.data.model} isUser />
                      <Message bubble="Qual a sua faixa de orçamento aproximada?" />
                      {chat.step === 'buy_budget' && (
                        <div className="flex flex-col gap-2 pl-11">
                          {['Até R$ 15k', 'R$ 15k - R$ 20k', 'Acima de R$ 20k'].map(b => (
                            <button 
                              key={b}
                              onClick={() => updateData('budget', b, 'buy_purpose')}
                              className="text-left p-3 rounded-xl border border-white/10 hover:border-neon-green text-sm"
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {chat.data.budget && (
                    <>
                      <Message bubble={chat.data.budget} isUser />
                      <Message bubble="Qual será a finalidade principal?" />
                      {chat.step === 'buy_purpose' && (
                        <div className="flex gap-2 pl-11">
                          {['Trabalho', 'Lazer', 'Ambos'].map(p => (
                            <button 
                              key={p}
                              onClick={() => updateData('purpose', p, 'customer_name')}
                              className="p-3 rounded-xl border border-white/10 hover:border-neon-green text-sm"
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              {/* Customer Info Collection */}
              {(chat.step === 'customer_name' || chat.step === 'customer_phone' || chat.data.name) && (
                <div className="space-y-4">
                  {/* Name Collection */}
                  {(chat.step === 'customer_name' || chat.data.name) && (
                    <>
                      <Message bubble="Para finalizar, poderia me informar seu nome completo?" />
                      {chat.step === 'customer_name' && (
                        <div className="pl-11 space-y-2">
                          <input 
                            type="text" 
                            placeholder="Seu nome completo"
                            autoFocus
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm focus:border-neon-green outline-none"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
                                updateData('name', (e.target as HTMLInputElement).value, 'customer_phone');
                              }
                            }}
                          />
                          <p className="text-[10px] text-zinc-500">Pressione Enter para continuar</p>
                        </div>
                      )}
                    </>
                  )}

                  {/* Phone Collection */}
                  {chat.data.name && (
                    <>
                      <Message bubble={chat.data.name} isUser />
                      <Message bubble={`Prazer em te conhecer, ${chat.data.name.split(' ')[0]}! Qual seu telefone de contato?`} />
                      {chat.step === 'customer_phone' && (
                        <div className="pl-11 space-y-2">
                          <input 
                            type="tel" 
                            placeholder="(00) 00000-0000"
                            autoFocus
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm focus:border-neon-green outline-none"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
                                updateData('phone', (e.target as HTMLInputElement).value, 'summary');
                              }
                            }}
                          />
                          <p className="text-[10px] text-zinc-500">Pressione Enter para finalizar</p>
                        </div>
                      )}
                    </>
                  )}

                  {chat.data.phone && (
                    <Message bubble={chat.data.phone} isUser />
                  )}
                </div>
              )}

              {/* Summary */}
              {chat.step === 'summary' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-neon-green/10 border border-neon-green/30 p-6 rounded-3xl space-y-4"
                >
                  <p className="text-xs font-bold uppercase text-neon-green">Resumo do seu interesse</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-zinc-500">Cliente:</span> {chat.data.name}</p>
                    <p><span className="text-zinc-500">Telefone:</span> {chat.data.phone}</p>
                    <div className="h-px bg-white/10 my-2" />
                    {chat.type === 'rent' ? (
                      <>
                        <p><span className="text-zinc-500">Data:</span> {chat.data.date}</p>
                        <p><span className="text-zinc-500">Duração:</span> {chat.data.duration}</p>
                        <p><span className="text-zinc-500">Qtd:</span> {chat.data.quantity}</p>
                      </>
                    ) : (
                      <>
                        <p><span className="text-zinc-500">Modelo:</span> {chat.data.model}</p>
                        <p><span className="text-zinc-500">Orçamento:</span> {chat.data.budget}</p>
                        <p><span className="text-zinc-500">Finalidade:</span> {chat.data.purpose}</p>
                      </>
                    )}
                  </div>
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-neon-green text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors"
                  >
                    <MessageCircle size={18} />
                    Falar com Vendedor
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Message({ bubble, isUser = false }: { bubble: string, isUser?: boolean }) {
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isUser ? 'bg-neon-green' : 'bg-zinc-800'}`}>
        {isUser ? <User size={16} className="text-black" /> : <Bot size={16} className="text-neon-green" />}
      </div>
      <div className={`p-4 rounded-2xl text-sm ${isUser ? 'bg-neon-green text-black rounded-tr-none' : 'bg-zinc-900 rounded-tl-none'}`}>
        {bubble}
      </div>
    </div>
  );
}
