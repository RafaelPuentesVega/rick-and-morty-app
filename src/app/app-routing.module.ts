import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './modules/characters/characters.component';
import { PlaceComponent } from './modules/place/place.component';
import { EpisodesComponent } from './modules/episodes/episodes.component';
import { HomeComponent } from './modules/home/home.component';
import { DetailCharacterComponent } from './modules/characters/detail-character/detail-character.component';
import { DetailPlaceComponent } from './modules/place/detail-place/detail-place.component';
import { DetailEpisodeComponent } from './modules/episodes/detail-episode/detail-episode.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
        'title': 'Inicio',
    }
  },
  {
    path: 'characters',
    component: CharactersComponent,
    data: {
        'title': 'Personajes',
    }
  },
  {
    path: 'characters/:id', 
    component: DetailCharacterComponent, 
    data: {
      title: 'Detalle del personaje',
    }
  },
  {
    path: 'locations',
    component: PlaceComponent,
    data: {
        'title': 'Lugares',
    }
  },
  {
    path: 'locations/:id',
    component: DetailPlaceComponent,
    data: {
        'title': 'Detalles del lugar',
    }
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
    data: {
        'title': 'Episodios',
    }
  },
  {
    path: 'episodes/:id',
    component: DetailEpisodeComponent,
    data: {
        'title': 'Detalle del episodio',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
