import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  serie: any[] = [];
  serieParaGuardar: any;
  private _firestoreService: any;
  id_api: number | undefined;

  addSeriesToFirebase(id: number) {
    console.log('serie para agregar', id);
    const auxiliar = this.serie.find((value) => value.id == id );
    !this.serieParaGuardar.name && delete this.serieParaGuardar.name;
    !this.serieParaGuardar.title && delete this.serieParaGuardar.title;
    this._firestoreService.addserieToFirebase(this.serieParaGuardar).then((response: any) => {
      console.log(response);
    }).catch((error: any) => {
      console.log(error);
    })
    
  }

  deleteSeriesFromFirebase(id :number) {
    console.log('series para eliminar', id);
    let auxResponseMovies: SeriesComponent [] = [];
    let peliculaEncontrada: SeriesComponent | undefined;
    this._firestoreService.getSerie().subscribe({
      next: (response: SeriesComponent []) => {
        const auxResponseSerie = response;
        console.log('RESPONSE', response);
        peliculaEncontrada = auxResponseSerie.find((value) => value.id_api === id);
        console.log('SeriesEncontrada', this.serieParaGuardarEncontrada);
        this._firestoreService.deleteSeriesFromFirebase(this.serieParaGuardarEncontrada!!).then((response: any) => {
          console.log(response);
          }).catch((error: any) => {
          console.log(error);
        })
      }
    })
  }
  serieParaGuardarEncontrada(arg0: string, serieParaGuardarEncontrada: any) {
    throw new Error('Method not implemented.');
  }

}
