import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';


@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.html',
  styleUrls: ['./component-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentViewer {
  componentDocItem: any;

  constructor(private _route: ActivatedRoute,
              private _componentPageTitle: ComponentPageTitle) {

  }
}
