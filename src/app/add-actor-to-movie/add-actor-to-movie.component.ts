import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";

@Component({
	selector: "app-add-actor-to-movie",
	templateUrl: "./add-actor-to-movie.component.html",
	styleUrls: ["./add-actor-to-movie.component.css"],
})
export class AddActorToMovieComponent implements OnInit {
	actorsDB: any[] = [];
	moviesDB: any[] = [];
	constructor(private dbService: DatabaseService) {}

	ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
	}
	onAddActor(movieId: any, actorId: any) {
		console.log(movieId);
		console.log(actorId);
		this.dbService.addActor(movieId, actorId).subscribe((result) => {
			this.onGetMovies();
		});
	}
	onGetMovies() {
		this.dbService.getMovies().subscribe((data: any) => {
			this.moviesDB = data;
		});
	}
	onGetActors() {
		this.dbService.getActors().subscribe((data: any) => {
			this.actorsDB = data;
		});
	}
}
