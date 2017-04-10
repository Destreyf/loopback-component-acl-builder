import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ModelComponent} from "./model/model.component";
import {AclBuilderComponent} from "./acl-builder/acl-builder.component";
import {ModelsResolverService} from "./shared/models-resolver.service";
import {ModelResolverService} from "./shared/model-resolver.service";

const AppRoutes: Routes = [
  {
    path: '',
    component: AclBuilderComponent,
    resolve: {
      models: ModelsResolverService
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'model/:model',
        component: ModelComponent,
        resolve: {
          model: ModelResolverService
        }
      }
    ]
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
