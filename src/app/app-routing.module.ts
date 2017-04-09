import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ModelComponent} from "./model/model.component";

const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'model/:model',
    component: ModelComponent
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
