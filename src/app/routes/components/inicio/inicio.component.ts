import { Component } from '@angular/core';
import { moviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  firstNumber: number = 0;
  state = true;
   movies_series : moviesSeries[] = [
    {
      id: 1,
      name: "Avatar",
      description: "AVATAR nos lleva a un mundo situado más allá de la imaginación, en donde un recién llegado de la Tierra se embarca en una aventura épica, llegando a luchar, al final, por salvar el extraño mundo al que ha aprendido a llamar su hogar.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tXmTHdrZgNsULqCbThK2Dt2X9Wt.jpg",
      rating: "76%",
      category: "series"
    },
    {
      id: 2,
      name: "Coco",
      description: "Un joven aspirante a músico llamado Miguel se embarca en un viaje extraordinario a la mágica tierra de sus ancestros. Allí, el encantador embaucador Héctor se convierte en su inesperado amigo y le ayuda a descubrir los misterios detrás de las historias y tradiciones de su familia.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lUZZhYLLDU4g4XGQ5tvjYNVytxc.jpg",
      rating: "82%",
      category: "Movie"
    },
    {
      id: 3,
      name: "Encanto",
      description: "Los Madrigal son una familia extraordinaria que vive en una casa mágica de un pueblo vibrante en las montañas de Colombia. La magia ha bendecido a cada niño de la familia con un don único, desde la superfuerza hasta el poder de sanar. A todos, excepto Mirabel, quien desea ser tan especial como el resto de su familia.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4JCyBaUJmMgmnDkLiOI8P3tDpqS.jpg",
      rating: "76%",
      category: "series"
    },
    {
      id: 4,
      name: "Frozen",
      description: "Cuando una profecía condena a un reino a un invierno eterno, Anna, una joven optimista se une a un temerario montañero llamado Kristoff y a su compinche el reno Sven. Juntos emprenden un viaje épico en busca de Elsa, hermana de Anna y Reina de las Nieves para poner fin al gélido hechizo.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hAKhrHvzQDUHQP5zd5HFeqF2BCN.jpg",
      rating: "72%",
      category: "Movie"
    },
    {
      id: 5,
      name: "Hotel Transilvania ",
      description: "Drácula regenta un hotel en el que se alojan personajes como Frankenstein, la Momia, el Hombre Invisible, hombres-lobo... El problema del conde es que tiene una hija de espíritu aventurero a la que le resulta difícil controlar. El conflicto surge cuando se aloja en el hotel un ser humano que se siente atraído por la hija del dueño.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zvWlwBGQWuJ0wog65q1uS37BApC.jpg",
      rating: "70%",
      category: "series"
    },
    {
      id: 6,
      name: "Los Croods",
      description: "La película está ambientada en la prehistoria, donde Crug lidera a su familia más allá de la comodidad de su hogar después de que este sea destruido por un gran terremoto. Mientras intentan viajar por el desconocido y aterrador mundo, se encuentran con un nómada que cautiva a su clan, en especial a su hermana mayor, con su mente moderna.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3X3qtBTgKt5mCB30RJwbIjgjzdw.jpg",
      rating: "69%",
      category: "Movie"
    },
    {
      id: 7,
      name: "Ferdinand ",
      description: "Ferdinand es un novillo muy tranquilo que prefiere sentarse bajo un árbol a oler las flores que saltar, resoplar y embestirse con otros toros. A medida que va creciendo y haciéndose fuerte, su temperamento no cambia y sigue siendo un toro manso. Un día, unos hombres vienen buscando al toro más grande, rápido y bravo... y Ferdinand es elegido equivocadamente para las corridas de toros de Madrid.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bCo0AubAUaFQLowF1IwPjVv7hFt.jpg",
      rating: "72%",
      category: "series"
    },
    {
      id: 8,
      name: "Raya y el último dragón",
      description: "Raya, una niña de gran espíritu aventurero, se embarca en la búsqueda del último dragón del mundo con el objetivo de devolver el equilibrio a Kumandra, un lejano y recóndito territorio habitado por una civilización milenaria.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hbjOtofNpvFvhzBUUoZGAjkjjsl.jpg",
      rating: "79%",
      category: "Movie"
    },

   ];

   movies_series_aux : moviesSeries | undefined = {
      id: 0,
      name: '',
      description: '',
      image: '',
      rating: '',
      category: 'Movie'
   };

   search: string = '';

   filter:'Todos' | 'Películas' | 'Series' = 'Todos';

   changeFilter =(filtro: 'Todos' | 'Películas' | 'Series') => {
    this.filter = filtro;
   };
  
   searchMovie() {
    let peliculaEncontrada;
    peliculaEncontrada = this.movies_series.find((movie) => {        
        return movie.name === this.search;
    });
    if (peliculaEncontrada) {
      this.movies_series_aux = peliculaEncontrada;
    }
   }
  
}
