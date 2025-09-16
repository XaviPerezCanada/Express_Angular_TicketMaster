export interface Concert {
  _id?: string;  
  nombre: string;
  artista: string;
  fecha: string | Date;  
  lugar: string;
  precio: number;
}

