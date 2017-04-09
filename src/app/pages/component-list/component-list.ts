import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';

@Component({
  selector: 'app-components',
  templateUrl: './component-list.html',
  styleUrls: ['./component-list.scss']
})
export class ComponentList {
  public category: any = {items: []};
  public docItems: any = [];

  constructor(private _componentPageTitle: ComponentPageTitle,
              private _route: ActivatedRoute) {
  }
}
