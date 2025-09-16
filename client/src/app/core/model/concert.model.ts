export interface Concert {
  _id?: string;  // opcional, ya que puede no estar presente al crear un nuevo concierto
  nombre: string;
  artista: string;
  fecha: string | Date;  // puedes usar string si viene del JSON, o Date si lo transformas
  lugar: string;
  precio: number;
}

