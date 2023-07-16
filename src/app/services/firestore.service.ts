import { Injectable } from '@angular/core';
import {Firestore, collectionData, deleteDoc, addDoc, collection, doc} from '@angular/fire/firestore';
import { Movie } from '../types/Movies';
import { Observable } from 'rxjs';
import { SeriesComponent } from '../routes/components/series/series.component';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore
  ) { }

  addMovie(data: Movie) {
    const collectionMovieRef = collection(this.firestore, 'movies');
    return addDoc(collectionMovieRef, data).then((response) => {
      console.log('TODO OK', response);
    }).catch((error) => {
      console.log('ERROR', error);   
    })
  }

  getMovie() {
    const collectionMovieRef = collection(this.firestore, 'movies');
    return collectionData(collectionMovieRef, { idField: 'id'}) as Observable<Movie[]>;
  }

  deleteMovie(id: number): Promise<any> {
    const documentMovieRef = doc(this.firestore, `movies/${id}`)
    console.log(documentMovieRef);
    return deleteDoc(documentMovieRef);
  }

  addSerie(data: SeriesComponent ) {
    const collectionSeriesRef = collection(this.firestore, 'Series');
    return addDoc(collectionSeriesRef, data).then((response) => {
      console.log('TODO OK', response);
    }).catch((error) => {
      console.log('ERROR', error);   
    })
  }

  getSerie(){
    const collectionSeriesRef = collection(this.firestore, 'Series');
    return collectionData(collectionSeriesRef, { idField: 'id'}) as Observable<SeriesComponent[]>;
  }

  deleteSerie(id: number): Promise<any> {
      const documentSeriesRef = doc(this.firestore, `Series/${id}`)
      console.log(documentSeriesRef);
      return deleteDoc(documentSeriesRef);
  }
}
