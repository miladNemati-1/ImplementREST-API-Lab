import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
  }
  onDeleteMovie(title: string) {
    this.dbService.deleteMovie(title).subscribe(result => {
      this.onGetMovies();
    });
  }
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

}
