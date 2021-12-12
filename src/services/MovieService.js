// interface GetMoviesResponse {
//   fields: Movie;
//   model: string;
//   id: number;
// }

// export interface Movie {
//   starships: number[];
//   edited: string;
//   vehicles: number[];
//   planets: number[];
//   producer: string;
//   title: string;
//   created: string;
//   episode_id: string;
//   director: string;
//   release_date: string;
//   opening_crawl: string;
//   characters: number[];
//   species: number[];
// }

class MovieService {
  getMovies() {
    return fetch('https://star-wars-api.herokuapp.com/films').then(res => res.json())
      .then((response) => response.map((r) => r.fields));
  }
}

export default MovieService;
