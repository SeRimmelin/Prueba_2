export interface Productos {

  titulo: string;
  descripcion: string
  precio: number,
  descuentoPorcentaje: number,
  estrellas: number,
  stock: number,
  marca: string
  categoria: string,
  minImagen: string,
  imagen: string

}

export interface ProductosID extends Productos{
  id: number;
}

export interface ProductosParcial extends Partial<Productos>{

}
