import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'rb-nav-bar',
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.scss']
})
export class NavBarComponent {
  
    constructor(public router: Router) { }
    toggleDrawer() {

    }
}