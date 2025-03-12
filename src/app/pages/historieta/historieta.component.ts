import { Component } from '@angular/core';
import { Historieta } from '../../models/producto.model';
import { HistorietaService } from '../../services/historieta.service'; // Asegúrate de crear este servicio
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-historieta',
  standalone: true, // ✅ Asegurar que sea standalone
  imports: [FormsModule], // ✅ Agregar FormsModule aquí
  templateUrl: './historieta.component.html',
  styleUrls: ['./historieta.component.css']
})
export class HistorietaComponent {

  // Propiedades
  historietas: any[] = []; // Inicializa como un arreglo vacío
  historieta = new Historieta();
  tipos: string[] = ['Manga', 'Comic', 'Manhwa', 'Novela']; // Agrega esta línea

  constructor(private historietaService: HistorietaService) {
    this.getHistorietas();
  }

  // Método para obtener el listado de historietas
  async getHistorietas(): Promise<void> {
    this.historietas = await firstValueFrom(this.historietaService.getHistorietas());
  }

  // Método para insertar una historieta desde el formulario
  insertarHistorieta() {
    this.historietaService.agregarHistorieta(this.historieta);
    this.getHistorietas();
    this.historieta = new Historieta();
  }

  // Método para seleccionar una historieta de la tabla
  selectHistorieta(historietaSeleccionada: Historieta) {
    this.historieta = historietaSeleccionada;
  }

  // Método para modificar una historieta
  updateHistorieta() {
    this.historietaService.modificarHistorieta(this.historieta);
    this.getHistorietas();
    this.historieta = new Historieta();
  }

  // Método para eliminar una historieta
  deleteHistorieta(id: string) {
    this.historietaService.eliminarHistorieta({ id } as Historieta);
    this.getHistorietas();
    this.historieta = new Historieta();
  }
}