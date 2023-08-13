import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.css']
})
export class DetailEpisodeComponent {
  locations: any;
  countCharacter = 0;
  arrayCharacter :string[] = [];
  validaCharacter = false;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.getLocationData();
  }

  getLocationData() {
    this.route.params.subscribe((params) => {
      const characterId = params['id'];
      this.api
        .get(`episode/${characterId}`)
        .pipe(
          catchError((error) => {
            console.error('Ocurrio un error al consumir el api:', error);
            return (this.locations.message = 'error al consultar api');
          })
        )
        .subscribe((resp) => {
          if (resp) {
            this.locations = resp;
            this.countCharacter = resp.characters.length;
            this.getCharacterArray();
          } else {
            console.error('Error obteniendo datos del personaje;');
          }
        });
    });
  }

  getCharacterArray(){
    if (Array.isArray(this.locations.characters)) {
    this.arrayCharacter = this.locations.characters.map((url: string) => {
      const parts = url.split('/');
      return +parts[parts.length - 1]; 
    });
    }
    if(this.arrayCharacter.length>0){
      this.validaCharacter = true;
    }
    }
}
