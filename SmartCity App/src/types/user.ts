export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  idCard: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserReservation {
  userId: string;
  reservationId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  checkIn: Date;
  checkOut: Date;
}
