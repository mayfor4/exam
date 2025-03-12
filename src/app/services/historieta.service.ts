import { Injectable, inject } from '@angular/core';
import { Historieta } from '../models/producto.model';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class HistorietaService {
  private db: Firestore = inject(Firestore);

  constructor() {}

  // Método para obtener el listado de historietas de la colección
  getHistorietas() {
    const historietasCollection = collection(this.db, 'historietas');
    return collectionData(historietasCollection, { idField: 'id' }).pipe(first());
  }

  // Método para agregar una nueva historieta
  agregarHistorieta(historieta: Historieta) {
    const historietasCollection = collection(this.db, 'historietas');
    const historietaData = {
      titulo: historieta.titulo,
      genero: historieta.genero,
      precio: historieta.precio,
      tipo: historieta.tipo,
    };
    addDoc(historietasCollection, historietaData);
  }

  // Método para modificar una historieta existente
  modificarHistorieta(historieta: Historieta) {
    const documentRef = doc(this.db, 'historietas', historieta.id);
    updateDoc(documentRef, {
      titulo: historieta.titulo,
      genero: historieta.genero,
      precio: historieta.precio,
      tipo: historieta.tipo,
    });
  }

  // Método para eliminar una historieta
  eliminarHistorieta(historieta: Historieta) {
    const documentRef = doc(this.db, 'historietas', historieta.id);
    deleteDoc(documentRef);
  }
}