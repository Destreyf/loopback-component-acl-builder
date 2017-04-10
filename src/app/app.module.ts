import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {SortablejsModule} from "angular-sortablejs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {AppRouting} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {ModelComponent} from "./model/model.component";
import {HomeComponent} from "./home/home.component";
import { AclBuilderComponent } from './acl-builder/acl-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    HomeComponent,
    AclBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    SortablejsModule,
    SharedModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
