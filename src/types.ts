export interface Motorcycle {
  id: string;
  name: string;
  price: string;
  rentalPrice: string;
  autonomy: string;
  maxSpeed: string;
  chargeTime: string;
  image: string;
  gallery: string[];
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type ChatStep = 'initial' | 'rent_date' | 'rent_duration' | 'rent_qty' | 'buy_model' | 'buy_budget' | 'buy_purpose' | 'customer_name' | 'customer_phone' | 'summary';

export interface ChatState {
  type: 'buy' | 'rent' | null;
  step: ChatStep;
  data: {
    date?: string;
    duration?: string;
    quantity?: string;
    model?: string;
    budget?: string;
    purpose?: string;
    name?: string;
    phone?: string;
  };
}
