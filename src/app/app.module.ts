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
import { ListActorsComponent } from './list-actors/list-actors.component';
import { ConvertPipe } from './pipes/convert/convert.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const appRoutes: Routes = [
	{ path: "", component: ListMoviesComponent },
	{ path: "addmovie", component: AddMovieComponent },
	{ path: "deletemovie", component: DeleteMovieComponent },
	{ path: "addactortomovie", component: AddActorToMovieComponent },
	{ path: "listmovie", component: ListMoviesComponent },
	{ path: "listactors", component: ListActorsComponent },

	{ path: "**", component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    ListMoviesComponent,
    AddActorToMovieComponent,
    ErrorComponent,
    ListActorsComponent,
    ConvertPipe
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
