import { Component } from '@angular/core';
import { Historieta } from '../../models/producto.model';
import { HistorietaService } from '../../services/historieta.service'; 
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-historieta',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './historieta.component.html',
  styleUrls: ['./historieta.component.css']
})
export class HistorietaComponent {

  // Propiedades
  historietas: any[] = []; 
  historieta = new Historieta();
  tipos: string[] = ['Manga', 'Comic', 'Manhwa', 'Novela']; 

  constructor(private historietaService: HistorietaService) {
    this.getHistorietas();
  }

 
  async getHistorietas(): Promise<void> {
    this.historietas = await firstValueFrom(this.historietaService.getHistorietas());
  }

  
  insertarHistorieta() {
    this.historietaService.agregarHistorieta(this.historieta);
    this.getHistorietas();
    this.historieta = new Historieta();
  }

 
  selectHistorieta(historietaSeleccionada: Historieta) {
    this.historieta = historietaSeleccionada;
  }

  
  updateHistorieta() {
    this.historietaService.modificarHistorieta(this.historieta);
    this.getHistorietas();
    this.historieta = new Historieta();
  }

  
  deleteHistorieta(id: string) {
    this.historietaService.eliminarHistorieta({ id } as Historieta);
    this.getHistorietas();
    this.historieta = new Historieta();
  }
}