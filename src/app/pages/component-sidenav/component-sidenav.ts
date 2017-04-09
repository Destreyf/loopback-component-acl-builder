import {Component, ViewEncapsulation, ViewChild, OnInit} from "@angular/core";
import {MdSidenav} from "@angular/material";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.html',
  styleUrls: ['./component-sidenav.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentSidenav implements OnInit {
  public docItems: any = [];

  constructor(private _router: Router, private http: Http) {
  }

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  ngOnInit() {
    this.http.get('api/models').subscribe(models => {
      console.log("Data", models);
    });
  }
}
