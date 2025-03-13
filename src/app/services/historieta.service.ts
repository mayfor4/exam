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

  
  getHistorietas() {
    const historietasCollection = collection(this.db, 'historietas');
    return collectionData(historietasCollection, { idField: 'id' }).pipe(first());
  }

 
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

 
  modificarHistorieta(historieta: Historieta) {
    const documentRef = doc(this.db, 'historietas', historieta.id);
    updateDoc(documentRef, {
      titulo: historieta.titulo,
      genero: historieta.genero,
      precio: historieta.precio,
      tipo: historieta.tipo,
    });
  }

 
  eliminarHistorieta(historieta: Historieta) {
    const documentRef = doc(this.db, 'historietas', historieta.id);
    deleteDoc(documentRef);
  }
}