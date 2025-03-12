import { Component } from '@angular/core';
import { Libro } from '../../models/producto.model';
import { LibroService } from '../../services/libro.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-libro',
  standalone: true, // ✅ Asegurar que sea standalone
  imports: [FormsModule], // ✅ Agregar FormsModule aquí
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  //propiedades
  libros: any;
  libro = new Libro();

  constructor(private libroService: LibroService) {
    this.getLibros();
  }

  //método para obtener el listado de libros
  async getLibros(): Promise<void> {
    this.libros = await firstValueFrom(this.libroService.getLibros());
  }

  //método para insertar un libro desde form
  insertarLibro() {
    this.libroService.agregarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

  //método para seleccionar un libro de la tabla 
  selectLibro(libroSeleccionado: Libro) {
    this.libro = libroSeleccionado;
  }

  //método para modificar un libro
  updateLibro() {
    this.libroService.modificarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

  //método para eliminar un libro
  deleteLibro() {
    this.libroService.eliminarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

}
