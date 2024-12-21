export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  capacity: number;
  price: number;
  available: boolean;
}

export interface EventBooking {
  eventId: string;
  userId: string;
  bookingDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  numberOfTickets: number;
}
