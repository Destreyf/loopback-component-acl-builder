import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from "@angular/material";
import {AppComponent} from './app.component';
import {AppRouting} from "./app-routing.module";
import {Footer} from "./shared/footer/footer";
import {Homepage} from "./pages/homepage/homepage";
import {GuideViewer} from "./pages/guide-viewer/guide-viewer";
import {GuideList} from "./pages/guide-list/guide-list";
import {ComponentPageHeader} from "./pages/component-page-header/component-page-header";
import {ComponentViewer} from "./pages/component-viewer/component-viewer";
import {ComponentSidenav} from "./pages/component-sidenav/component-sidenav";
import {ComponentList} from "./pages/component-list/component-list";
import {ComponentCategoryList} from "./pages/component-category-list/component-category-list";
import {SharedModule} from "./shared/shared-module";
import {ComponentPageTitle} from "./pages/page-title/page-title";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ComponentCategoryList,
    ComponentList,
    ComponentSidenav,
    ComponentViewer,
    ComponentPageHeader,
    GuideList,
    GuideViewer,
    Homepage,
    Footer
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRouting,
    SharedModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Location,
    ComponentPageTitle,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
