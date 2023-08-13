import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detail-place',
  templateUrl: './detail-place.component.html',
  styleUrls: ['./detail-place.component.css']
})
export class DetailPlaceComponent {
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
        .get(`location/${characterId}`)
        .pipe(
          catchError((error) => {
            console.error('Ocurrio un error al consumir el api:', error);
            return (this.locations.message = 'error al consultar api');
          })
        )
        .subscribe((resp) => {
          if (resp) {
            this.locations = resp;
            this.countCharacter = resp.residents.length;
            this.getCharacterArray();
          } else {
            console.error('Error obteniendo datos del personaje;');
          }
        });
    });
  }

  getCharacterArray(){
    if (Array.isArray(this.locations.residents)) {
    this.arrayCharacter = this.locations.residents.map((url: string) => {
      const parts = url.split('/');
      return +parts[parts.length - 1]; 
    });
    }
    if(this.arrayCharacter.length>0){
      this.validaCharacter = true;
    }
    }
}
