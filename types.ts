export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Sofa' | 'Scissors' | 'Car' | 'Ruler';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Restauro' | 'Tendaggi' | 'Moderno' | 'Auto';
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
