import { Injectable, inject } from '@angular/core';
import { Producto } from '../models/producto.model';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private db: Firestore = inject(Firestore);

  constructor() {}

  // Método para obtener el listado de productos de la colección
  getProductos() {
    const productosCollection = collection(this.db, 'productos'); // Cambia la colección a 'productos'
    return collectionData(productosCollection, { idField: 'id' }).pipe(first());
  }

  // Método para agregar un nuevo producto
  agregarProducto(producto: Producto) {
    const productosCollection = collection(this.db, 'productos'); // Cambia la colección a 'productos'
    const productoData = {
      descripcion: producto.descripcion, // Corrige el nombre de la propiedad
      precio: producto.precio,
    };
    addDoc(productosCollection, productoData);
  }

  // Método para modificar un producto existente
  modificarProducto(producto: Producto) {
    const documentRef = doc(this.db, 'productos', producto.id); // Cambia la colección a 'productos'
    updateDoc(documentRef, {
      descripcion: producto.descripcion, // Corrige el nombre de la propiedad
      precio: producto.precio,
    });
  }

  // Método para eliminar un producto
  eliminarProducto(producto: Producto) {
    const documentRef = doc(this.db, 'productos', producto.id); // Cambia la colección a 'productos'
    deleteDoc(documentRef);
  }
}