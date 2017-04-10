import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DataShareService} from "./data-share.service";
import {RolesService} from "./roles.service";
import {ModelsResolverService} from "./models-resolver.service";
import {ModelResolverService} from "./model-resolver.service";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    DataShareService,
    RolesService,
    ModelResolverService,
    ModelsResolverService,
  ],
  exports: []
})
export class SharedModule {
}
