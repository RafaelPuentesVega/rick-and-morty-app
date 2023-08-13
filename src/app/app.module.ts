import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CharactersComponent } from './modules/characters/characters.component';
import { PlaceComponent } from './modules/place/place.component';
import { EpisodesComponent } from './modules/episodes/episodes.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './modules/home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DetailCharacterComponent } from './modules/characters/detail-character/detail-character.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { DetailPlaceComponent } from './modules/place/detail-place/detail-place.component';
import { DetailEpisodeComponent } from './modules/episodes/detail-episode/detail-episode.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersComponent,
    PlaceComponent,
    EpisodesComponent,
    HomeComponent,
    DetailCharacterComponent,
    DetailPlaceComponent,
    DetailEpisodeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
