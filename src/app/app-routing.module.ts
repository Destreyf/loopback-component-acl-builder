import {ModuleWithProviders} from "@angular/core";
import {ComponentList} from "./pages/component-list";
import {Routes, RouterModule} from "@angular/router";
import {ComponentViewer} from "./pages/component-viewer/component-viewer";
import {ComponentCategoryList} from "./pages/component-category-list/component-category-list";
import {ComponentSidenav} from "./pages/component-sidenav/component-sidenav";

const AppRoutes: Routes = [
  {
    path: '',
    component: ComponentSidenav,
    children: [
      {path: '', component: ComponentCategoryList}
    ],
    pathMatch: 'full'
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
