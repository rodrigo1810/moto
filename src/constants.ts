import { Motorcycle, Benefit } from './types';

export const MOTORCYCLES: Motorcycle[] = [
  {
    id: 'volt-s1',
    name: 'Volt S1 Urban',
    price: 'R$ 12.900',
    rentalPrice: 'R$ 25/30min',
    autonomy: '80 km',
    maxSpeed: '60 km/h',
    chargeTime: '4h',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A Volt S1 é a escolha perfeita para quem busca agilidade no trânsito urbano. Leve, compacta e extremamente econômica.',
    specs: [
      { label: 'Motor', value: '2000W Hub Motor' },
      { label: 'Bateria', value: '60V 24Ah Lithium' },
      { label: 'Peso', value: '75 kg' },
      { label: 'Carga Máx', value: '150 kg' }
    ]
  },
  {
    id: 'volt-x-pro',
    name: 'Volt X-Pro',
    price: 'R$ 18.500',
    rentalPrice: 'R$ 45/hora',
    autonomy: '120 km',
    maxSpeed: '90 km/h',
    chargeTime: '6h',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Performance superior para quem não quer limites. A X-Pro combina autonomia estendida com uma velocidade final impressionante.',
    specs: [
      { label: 'Motor', value: '4000W Central Motor' },
      { label: 'Bateria', value: '72V 40Ah Lithium' },
      { label: 'Peso', value: '95 kg' },
      { label: 'Carga Máx', value: '180 kg' }
    ]
  },
  {
    id: 'volt-cruiser',
    name: 'Volt Cruiser',
    price: 'R$ 22.000',
    rentalPrice: 'R$ 60/hora',
    autonomy: '100 km',
    maxSpeed: '80 km/h',
    chargeTime: '5h',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Estilo retrô com tecnologia de ponta. Conforto inigualável para passeios de lazer ou trajetos diários com estilo.',
    specs: [
      { label: 'Motor', value: '3000W Hub Motor' },
      { label: 'Bateria', value: '60V 35Ah Lithium' },
      { label: 'Peso', value: '110 kg' },
      { label: 'Carga Máx', value: '200 kg' }
    ]
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'economy',
    title: 'Economia Real',
    description: 'Até 90% mais barato que gasolina por quilômetro rodado.',
    icon: 'Zap'
  },
  {
    id: 'eco',
    title: 'Sustentabilidade',
    description: 'Zero emissão de CO2 e poluição sonora. O futuro é verde.',
    icon: 'Leaf'
  },
  {
    id: 'easy',
    title: 'Fácil de Usar',
    description: 'Basta carregar na tomada comum e sair rodando. Sem marchas.',
    icon: 'Smile'
  },
  {
    id: 'no-bureaucracy',
    title: 'Sem Burocracia',
    description: 'Processo de compra e aluguel rápido, digital e simplificado.',
    icon: 'ShieldCheck'
  }
];

export const WHATSAPP_NUMBER = '5513991634188';
export const WHATSAPP_MESSAGE = 'Olá! Vi o site da VoltDrive e gostaria de mais informações.';
