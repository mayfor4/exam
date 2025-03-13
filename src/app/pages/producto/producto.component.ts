import { Component } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-producto',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  // Propiedades
  productos: any[] = []; 
  producto = new Producto();

  constructor(private productoService: ProductoService) {
    this.getProductos();
  }

 
  async getProductos(): Promise<void> {
    try {
      this.productos = await firstValueFrom(this.productoService.getProductos());
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  }

 
  insertarProducto() {
    this.productoService.agregarProducto(this.producto);
    this.getProductos();
    this.producto = new Producto();
  }

  
  selectProducto(productoSeleccionado: Producto) {
    this.producto = productoSeleccionado;
  }


  updateProducto() {
    this.productoService.modificarProducto(this.producto);
    this.getProductos();
    this.producto = new Producto();
  }

  
  deleteProducto(id: string) {
    this.productoService.eliminarProducto({ id } as Producto);
    this.getProductos();
    this.producto = new Producto();
  }
}