import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {DataShareService} from "./shared/data-share.service";
import {RolesService} from "./shared/roles.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public models: Array<any> = [];

  constructor(private http: Http, private dataShare: DataShareService, private roleService: RolesService) {

  }

  ngOnInit() {
    this.http.get('api/models').map(res => res.json()).subscribe((res: any) => {
      let models = Object.keys(res).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });

      this.models = models.map(m => {
        let model = res[m];
        this.dataShare.createShare(model.name, model);

        if (model && model.settings && model.settings.acls) {
          model.settings.acls.forEach(acl => {
            if (acl.principalType.toLowerCase() == 'role') {
              this.roleService.addRole(acl.principalId);
            }
          });
        }

        return model;
      });
    });
  }

  public dedupe(originalArray, prop) {
    return originalArray.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}
