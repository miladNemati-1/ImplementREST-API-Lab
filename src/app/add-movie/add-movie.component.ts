import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  Movietitle: string = "";
  Movieyear: number = 0;
  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
  }
  onSaveMovie() {
    let obj = { title: this.Movietitle, year: this.Movieyear };
    this.dbService.createMovie(obj).subscribe(result => {
      this.onGetMovies();
    });

  }
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }

}
