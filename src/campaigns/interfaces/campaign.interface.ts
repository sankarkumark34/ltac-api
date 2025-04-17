export interface Campaign {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'inactive' | 'upcoming' | 'completed';
  budget: number;
} 