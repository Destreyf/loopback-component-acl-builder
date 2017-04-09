import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRouting} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {MaterialModule} from "@angular/material";
import {ModelComponent} from "./model/model.component";
import {HomeComponent} from "./home/home.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {SortablejsModule} from "angular-sortablejs";

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule,
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
