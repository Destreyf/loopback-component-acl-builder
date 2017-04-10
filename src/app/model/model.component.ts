import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataShareService} from "../shared/data-share.service";
import {Http} from "@angular/http";
import {FormBuilder, FormArray} from "@angular/forms";
import {RolesService} from "../shared/roles.service";
import {Subscription} from "rxjs";

declare const document: any;

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit, OnDestroy {
  public model: any;
  public acls: FormArray;
  public methods: Array<any> = [];
  public roles: Array<any> = [];

  private routerSub: Subscription;
  private rolesSub: Subscription;

  constructor(private route: ActivatedRoute,
              private http: Http,
              private dataShare: DataShareService,
              private rolesService: RolesService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.routerSub = this.route.params.subscribe(data => {
      if (this.dataShare.isShare(data['model'])) {
        this.model = this.dataShare.getShareValue(data['model']);
        this.buildData();
      } else {
        this.http.get('api/models/' + data['model']).map(res => res.json()).subscribe(res => {
          this.dataShare.createShare(data['model'], res);
          this.model = res;
          this.buildData();
        });
      }
    });

    this.rolesSub = this.rolesService.roles.subscribe(roles => this.roles = roles);
  }

  ngOnDestroy() {
    this.rolesSub.unsubscribe();
    this.routerSub.unsubscribe();
  }

  buildData() {
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

    this.acls = this.fb.array(Object.keys(acls).map(s => {
      let props = s.split('.');

      return this.fb.group({
        permission: props[0],
        method: props[1],
        principals: this.fb.array(acls[s].map(p => this.fb.group(p)))
      });
    }));

    this.methods = [{value: '*', name: '* (any)'}];

    this.model.settings.methods.forEach(m => {
      this.methods.push({value: m.name, name: m.name});
    });
  }

  exportAcl() {
    let acls = [];
    let val = this.acls.value;

    val.forEach(acl => {
      let acl_body = {
        permission: acl.permission,
        property: acl.method,
      };

      if (acl_body.property == '*') {
        delete(acl_body.property);
      }

      acl.principals.forEach(p => {
        let n = Object.assign({}, acl_body);

        n['principalId'] = p.principalId;
        n['principalType'] = p.principalType;

        acls.push(n);
      });
    });
  }
}
