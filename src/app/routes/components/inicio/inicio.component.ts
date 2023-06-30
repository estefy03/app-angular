import { Component } from '@angular/core';
import { MovieDBService } from 'src/app/services/movie-db.service';
import { moviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ MovieDBService ]
})

export class InicioComponent {
   movies_series : any[] = [];
   movies: any[] =[];
   series: any[] =[];
    
   search: string = '';

   filter:'Todos' | 'Películas' | 'Series' = 'Todos';

   changeFilter =(filtro: 'Todos' | 'Películas' | 'Series') => {
    this.filter = filtro;
    if(filtro === 'Todos' && this.movies_series.length === 0) {
      this.getAllTrending();
    }
    if(filtro === 'Películas' && this.movies.length === 0) {
      this.getAllMovies();
    }
    if(filtro === 'Series' && this.series.length === 0) {
      this.getAllTvShows();
    }
   };
  
   searchMovie() {
    let peliculaEncontrada;
    peliculaEncontrada = this.movies_series.find((movie) => {        
        return movie.name === this.search;
    });
    
   }
  
   constructor(
    private _movieDBService: MovieDBService
   ){}

   ngOnInit(){
    this.getAllTrending();
   }

   getAllTrending(){
    this._movieDBService.getTrending().subscribe({
      next: (response) => {
        this.movies_series = response.results;
      },
      error: (error) => {
        console.log('error', error);
      },
      complete() {
        console.log('LA EJECUCión terminó');
      },
    })
   }

   getAllMovies(){
    this._movieDBService.getMovies().subscribe({
      next: (response) => {
        this.movies = response.results;
        console.log('VARIABLE movies', this.movies);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('LA EJECUCión terminó');
      },
    })
  }

  getAllTvShows(){
    this._movieDBService.getSeries().subscribe({
      next: (response) => {
        this.series = response.results;
        console.log('VARIABLE series', this.series);
      },
      error: (error) => {
        console.log('ERROR', error);
      },
      complete() {
        console.log('LA EJECUCión terminó');
      },
    })
   }
  }