import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddActorToMovieComponent } from './add-actor-to-movie/add-actor-to-movie.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import {Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const appRoutes: Routes = [
	{ path: "", component: ListMoviesComponent },
	{ path: "addmovie", component: AddMovieComponent },
	{ path: "deletemovie", component: DeleteMovieComponent },
	{ path: "addactortomovie", component: AddActorToMovieComponent },
	{ path: "listmovie", component: ListMoviesComponent },

	{ path: "**", component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    ListMoviesComponent,
    AddActorToMovieComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
