import { Injectable, inject } from '@angular/core';
import { Libro } from '../models/producto.model';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private db : Firestore = inject(Firestore);

  constructor() { }

  
  getLibros(){
    const librosCollection = collection(this.db, 'libros');
    return collectionData((librosCollection), {idField: 'id'}).pipe(first());

  }
  
agregarLibro(libro:Libro){
  const librosCollection = collection(this.db, 'libros');
  const libroData = {
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    anioPublicacion: libro.anioPublicacion
  };
  addDoc(librosCollection, libroData);
}


modificarLibro(libro:Libro){
  const documentRef = doc(this.db, 'libros', libro.id);
  updateDoc(documentRef, {
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    anioPublicacion: libro.anioPublicacion
  });
}


eliminarLibro(libro:Libro){
  const documentRef = doc(this.db, 'libros', libro.id);
  deleteDoc(documentRef);
}
}

