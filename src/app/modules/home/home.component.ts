import { Component  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  getImagePath(imageFileName: string): string {
    return `../../../assets/img/${imageFileName}`;
  }
}
