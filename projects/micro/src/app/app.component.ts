import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  template: `
    <h1>Root Component Microfrontend</h1>
    <mcr-nav-bar></mcr-nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
