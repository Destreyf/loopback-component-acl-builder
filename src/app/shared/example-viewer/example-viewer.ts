import {Component, Input} from '@angular/core';
import {Http} from '@angular/http';
import {ComponentPortal} from '@angular/material';
import 'rxjs/add/operator/first';

@Component({
  selector: 'example-viewer',
  templateUrl: './example-viewer.html',
  styleUrls: ['./example-viewer.scss']
})
export class ExampleViewer {
  /** Component portal for the currently displayed example. */
  selectedPortal: ComponentPortal<any>;

  /** String key of the currently displayed example. */
  _example: string;

  exampleData: any;

  /** Whether the source for the example is being displayed. */
  showSource: boolean = false;

  /** Map of file extension (html|ts|css) to source file content. */
  sourceFileContent: Map<string, string> = new Map<string, string>();

  constructor(private _http: Http) {
  }

  get example() {
    return this._example;
  }

  @Input()
  set example(example: string) {
    console.log('MISSING EXAMPLE: ', example);
  }

  toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  exampleFileUrl(extension: string) {
    return `/assets/examples/${this.example}-example-${extension.toLowerCase()}.html`;
  }
}
