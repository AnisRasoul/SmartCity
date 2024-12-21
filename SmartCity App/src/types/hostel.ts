export interface Hostel {
  id: string;
  name: string;
  address: string;
  description: string;
  image: string;
  rooms: number;
  rating: number;
  price: number;
  distance: number;
  reviews: number;
}

export interface Reservation {
  id: string;
  userId: string;
  hostelId: string;
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  guestDetails: {
    fullName: string;
    email: string;
    phone: string;
    idCard: string;
  };
}
