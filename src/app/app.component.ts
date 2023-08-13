import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick-and-morty-app';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.title = this.getTitle(this.activatedRoute);
      });
  }

  private getTitle(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    if (route.snapshot.data['title']) { 
      return route.snapshot.data['title'];
    }
    return 'Mi Aplicación'; 
  }
}
