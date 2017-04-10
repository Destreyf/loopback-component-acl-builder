import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DataShareService} from "./data-share.service";
import {RolesService} from "./roles.service";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    DataShareService,
    RolesService
  ],
  exports: []
})
export class SharedModule {
}
