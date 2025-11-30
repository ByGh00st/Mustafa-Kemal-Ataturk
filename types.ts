// types.ts dosyasının güncel hali

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'life' | 'war' | 'republic';
}

export interface Reform {
  title: string;
  date: string;
  description: string;
  // Lucide ikonları obje/bileşen olduğu için string yerine any kullanıyoruz
  icon: any; 
}

export interface MapPoint {
  id: string;
  city: string;
  date: string;
  title: string;
  description: string;
  type: 'battle' | 'congress' | 'arrival' | 'republic';
  x: number;
  y: number;
  significance: number;
  details: string;
  importance: string;
  quote?: string;
  casualties?: string;
  companions?: string;
  weapons?: string;
  duration?: string;
}