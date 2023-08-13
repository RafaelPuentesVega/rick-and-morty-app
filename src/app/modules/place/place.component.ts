import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {

  constructor(private api: ApiService, private _snackBar: MatSnackBar){};

  displayedColumns: string[] = ['Nombre', 'Tipo', 'Dimensiones' , "Acciones"];
  dataSource : string[] = [] ;
  searchName = '';
  searchTipo = '';
  selectedOpcionOne = '';
  totalItems = 0;
  perPage = 0;
  updateSelect = 0;
  opcionOne = 'Tipo';
  ngOnInit() {
    this.getLocations();
  }

  getLocations(page: number = 1) {

    this.api
      .get(
        `location?page=${page}&name=${this.searchName}&type=${this.searchTipo}`
      )
      .subscribe(
        (resp) => {
          if (resp) {
            this.dataSource = resp.results;
            this.totalItems = resp.info.count;
            this.perPage = resp.results.length;
            this._snackBar.open('Consultado correctamente', 'Cerrar', {
              duration: 3000,
            });
          } else {
            this.dataSource = [];
            this.perPage = 0;
            this._snackBar.open('No se encontraron resultados', 'Cerrar', {
              duration: 3000,
            });
          }
        },
        (error) => {
          if(error.error.error = 'There is nothing here'){
            this._snackBar.open('No se encontraron resultados', 'Cerrar', {
              duration: 3000,
            });
          }else{
            this._snackBar.open('Ocurrió un error consumiendo la API' +error, 'Cerrar', {
              duration: 3000,
            });
          }
          this.dataSource = [];
          this.perPage = 0;
        }
      );
  }

}
