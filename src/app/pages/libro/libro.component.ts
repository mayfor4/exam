import { Component } from '@angular/core';
import { Libro } from '../../models/producto.model';
import { LibroService } from '../../services/libro.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-libro',
  standalone: true, 
  imports: [FormsModule], 
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

  
  async getLibros(): Promise<void> {
    this.libros = await firstValueFrom(this.libroService.getLibros());
  }


  insertarLibro() {
    this.libroService.agregarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

  
  selectLibro(libroSeleccionado: Libro) {
    this.libro = libroSeleccionado;
  }

  
  updateLibro() {
    this.libroService.modificarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

  
  deleteLibro() {
    this.libroService.eliminarLibro(this.libro);
    this.getLibros();
    this.libro = new Libro();
  }

}
