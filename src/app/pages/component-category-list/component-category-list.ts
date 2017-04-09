import {Component} from '@angular/core';
import {ComponentPageTitle} from '../page-title/page-title';


@Component({
  selector: 'app-component-category-list',
  templateUrl: './component-category-list.html',
  styleUrls: ['./component-category-list.scss']
})
export class ComponentCategoryList {
  public docItems: any = [];
  constructor(private _componentPageTitle: ComponentPageTitle) {}

  ngOnInit() {
    this._componentPageTitle.title = 'Component Library';
  }
}
