import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  template: `
  <h1>Base of Shell</h1>
  <rb-nav-bar></rb-nav-bar>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  
}
