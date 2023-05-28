import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  query = '';
  movies: any[] = [];
  isLoading = false;

  constructor(private movieService: MovieService) {}

  searchMovies(): void {
    if (!this.query) {
      return;
    }

    this.isLoading = true;
    this.movieService.searchMovies(this.query)
      .subscribe(response => {
        this.movies = response.results;
        this.isLoading = false;
      });
  }
}
