import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DataShareService} from "./data-share.service";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    DataShareService
  ],
  exports: []
})
export class SharedModule {
}
