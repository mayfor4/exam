import { Component } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service'; // Asegúrate de crear este servicio
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-producto',
  standalone: true, // ✅ Asegurar que sea standalone
  imports: [FormsModule], // ✅ Agregar FormsModule aquí
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  // Propiedades
  productos: any[] = []; // Inicializa como un arreglo vacío
  producto = new Producto();

  constructor(private productoService: ProductoService) {
    this.getProductos();
  }

  // Método para obtener el listado de productos
  async getProductos(): Promise<void> {
    try {
      this.productos = await firstValueFrom(this.productoService.getProductos());
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  }

  // Método para insertar un producto desde el formulario
  insertarProducto() {
    this.productoService.agregarProducto(this.producto);
    this.getProductos();
    this.producto = new Producto();
  }

  // Método para seleccionar un producto de la tabla
  selectProducto(productoSeleccionado: Producto) {
    this.producto = productoSeleccionado;
  }

  // Método para modificar un producto
  updateProducto() {
    this.productoService.modificarProducto(this.producto);
    this.getProductos();
    this.producto = new Producto();
  }

  // Método para eliminar un producto
  deleteProducto(id: string) {
    this.productoService.eliminarProducto({ id } as Producto);
    this.getProductos();
    this.producto = new Producto();
  }
}