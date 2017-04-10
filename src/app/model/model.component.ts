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
  public methods: any = {};
  public methodGroups: Array<string> = [];
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
    this.routerSub = this.route.data.subscribe(data => {
      this.model = data['model'];
      this.buildData();
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

    let methods = [];
    this.model.settings.methods.forEach(m => {
      methods.push({value: m.name, name: m.name});
    });

    let grouped_methods = {};

    grouped_methods[this.model.name] = [{value: '*', name: '* (any)'}];

    let re = /__(\w*)__(\w*)/;

    methods.forEach(method => {
      let match = re.exec(method.name);
      if (match) {
        if (typeof(grouped_methods[match[2]]) == 'undefined') {
          grouped_methods[match[2]] = [];
        }

        method.name = `[${match[2]}] ${match[1]}`;
        grouped_methods[match[2]].push(method);
      } else {
        grouped_methods[this.model.name].push(method);
      }
    });

    this.methodGroups = Object.keys(grouped_methods);

    this.methodGroups.forEach((group) => {
      grouped_methods[group].sort(function (a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
    });

    this.methods = grouped_methods;
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

    console.log("Exported ACL is ", JSON.stringify(acls));
  }
}
