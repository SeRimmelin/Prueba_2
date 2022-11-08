import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductosID } from '../interfaz/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  private URL_PRODUCTOS = 'http://localhost:3000/productos';
  private pagActual = 1;
  private laLista = new BehaviorSubject<Array<ProductosID>>([]);

  public mostrarProductos

  constructor() { }
}
