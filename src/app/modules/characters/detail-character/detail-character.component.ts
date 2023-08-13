import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css'],
})
export class DetailCharacterComponent implements OnInit {
  character: any;
  countEpisodes = 0;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.getCharacterData();
  }

  getCharacterData() {
    this.route.params.subscribe((params) => {
      const characterId = params['id'];
      this.api
        .get(`character/${characterId}`)
        .pipe(
          catchError((error) => {
            console.error('Ocurrio un error al consumir el api:', error);
            return (this.character.message = 'error al consultar api');
          })
        )
        .subscribe((resp) => {
          if (resp) {
            this.character = resp;
            this.countEpisodes = resp.episode.length;
          } else {
            console.error('Error obteniendo datos del personaje;');
          }
        });
    });
  }
}
