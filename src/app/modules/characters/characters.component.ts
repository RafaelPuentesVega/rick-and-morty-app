import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  characters: any[] = [];

  currentPage = 1;
  itemsPerPage = 20;
  totalItems = 0;
  findFormControl = '';
  titleGenero = 'Genero';
  titleEspecie = 'Especie';
  arrayStatus: string[] = [];
  arrayGenero: string[] = [];
  opcionOne = 'Estado';
  opcionTwo = 'Genero';
  generoObjects: any[] = [];
  searchName = '';
  selectedOpcionOne = '';
  selectedOpcionTwo = '';
  perPage = 0;
  updateSelect = 0;
  query = '';

  @Input() dataIdArray: string[] = [];

  constructor(private api: ApiService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getCharacters();
  }

  getAvatarClass(status: string): string {
    switch (status) {
      case 'Alive':
        return 'live-avatar';
      case 'Dead':
        return 'dead-avatar';
      default:
        return 'default-avatar';
    }
  }

  getDataIdArray() {
    if (this.dataIdArray.length > 0) {
      this.query = '/' + this.dataIdArray;
    } else {
      this.query = '';
    }
  }

  getCharacters(page: number = 1) {
    this.getDataIdArray();
    this.api
      .get(
        `character${this.query}?page=${page}&name=${this.searchName}&status=${this.selectedOpcionOne}&gender=${this.selectedOpcionTwo}`
      )
      .subscribe(
        (resp) => {
          if (resp) {
            //valido si es llamado desde otro modulo
            if (this.dataIdArray.length > 0) {
              this.characters = Array.isArray(resp) ? resp : [resp];
              this.totalItems = this.characters.length;
              this.perPage = this.characters.length;
            } else {
              this.characters = resp.results;
              this.totalItems = resp.info.count;
              this.perPage = resp.results.length;

              this.updateSelect = this.updateSelect + 1;
              this.getStatus();
              this.getGender();
            }
            this._snackBar.open('Consultado correctamente', 'Cerrar', {
              duration: 3000,
            });
          } else {
            this.characters = [];
            this.perPage = 0;
            this._snackBar.open('No se encontraron resultados', 'Cerrar', {
              duration: 3000,
            });
          }
        },
        (error) => {
          if ((error.error.error = 'There is nothing here')) {
            this._snackBar.open('No se encontraron resultados', 'Cerrar', {
              duration: 3000,
            });
          } else {
            this._snackBar.open(
              'Ocurrió un error consumiendo la API' + error,
              'Cerrar',
              {
                duration: 3000,
              }
            );
          }
          this.characters = [];
          this.perPage = 0;
        }
      );
  }

  //obtener los estados de los personajes
  getStatus() {
    if (this.characters && this.updateSelect == 1) {
      this.arrayStatus = this.characters.map(
        (character: any) => character.status
      );
      this.arrayStatus = this.arrayStatus.filter(
        (value, index, self) => self.indexOf(value) === index
      );
    }
  }
  getGender() {
    if (this.characters && this.updateSelect == 1) {
      this.arrayGenero = this.characters.map(
        (character: any) => character.gender
      );
      this.arrayGenero = this.arrayGenero.filter(
        (value, index, self) => self.indexOf(value) === index
      );
    }
  }
}
