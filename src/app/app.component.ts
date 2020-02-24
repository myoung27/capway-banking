import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capway-banking';



  constructor(private router: Router){

    this.router.events.subscribe( (v: Event) => {
     console.log(v);
   });
 }
 ngOnInit() {

  }

  onRouterOutletActivate() {

  }

  onRouterOutletDeactivate() {

  }
}
