import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataShareService} from "../shared/data-share.service";
import {Http} from "@angular/http";

declare const document: any;

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  public model: any;
  public acls: Array<any>;

  constructor(private route: ActivatedRoute,
              private http: Http,
              private dataShare: DataShareService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      if (this.dataShare.isShare(data['model'])) {
        this.model = this.dataShare.getShareValue(data['model']);
        this.buildSimpleList();
      } else {
        this.http.get('api/models/' + data['model']).map(res => res.json()).subscribe(res => {
          this.dataShare.createShare(data['model'], res);
          this.model = res;
          this.buildSimpleList();
        });
      }
    });
  }

  buildSimpleList() {
    let acls = {};

    let modelAcls = this.model && this.model.settings && this.model.settings.acls ? this.model.settings.acls : [];

    modelAcls.forEach(acl => {
      if (!acl.property) {
        acl.property = '*';
      }

      let selector = [acl.permission, acl.property].join('.');

      if (!acls[selector]) {
        acls[selector] = [];
      }

      acls[selector].push({
        principalType: acl.principalType,
        principalId: acl.principalId
      });
    });

    this.acls = Object.keys(acls).map(s => {
      let props = s.split('.');

      return {
        permission: props[0],
        method: props[1],
        principals: acls[s]
      };
    });
  }
}
