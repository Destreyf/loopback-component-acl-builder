import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[class.docs-dark-theme]': 'isDarkTheme',
  },
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  isDarkTheme = true;
  showShadow = true;

  constructor(router: Router) {

  }
}
