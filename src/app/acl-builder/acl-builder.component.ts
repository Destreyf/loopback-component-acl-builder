import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-acl-builder',
  templateUrl: './acl-builder.component.html',
  styleUrls: ['./acl-builder.component.scss']
})
export class AclBuilderComponent implements OnInit {
  public models: Array<any> = [];

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.models = this.route.snapshot.data['models'];
  }

}
