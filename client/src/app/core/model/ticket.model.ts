export interface Ticket {
  id: number;
  concertId: number; // referencia al concierto
  price: number;
  available: number; // cantidad disponible
}
