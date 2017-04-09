import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {DocViewer} from './doc-viewer/doc-viewer';
import {ExampleViewer} from './example-viewer/example-viewer';
import {NavBar} from './navbar/navbar';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {GuideItems} from './guide-items/guide-items';


@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
  ],
  declarations: [DocViewer, ExampleViewer, NavBar],
  exports: [DocViewer, ExampleViewer, NavBar],
  providers: [GuideItems],
  entryComponents: [
    ExampleViewer,
  ],
})
export class SharedModule {
}
