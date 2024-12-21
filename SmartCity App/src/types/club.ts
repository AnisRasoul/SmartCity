export interface Club {
  id: string;
  name: string;
  description: string;
  location: string;
  openingHours: {
    open: string;
    close: string;
    days: string[];
  };
  amenities: string[];
  rating: number;
}

export interface ClubMembership {
  clubId: string;
  userId: string;
  membershipType: 'basic' | 'premium' | 'vip';
  startDate: Date;
  endDate: Date;
}
