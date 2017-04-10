import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot} from "@angular/router";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {DataShareService} from "./data-share.service";
import {RolesService} from "./roles.service";

@Injectable()
export class ModelsResolverService {

  constructor(private http: Http, private dataShare: DataShareService, private rolesService: RolesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Array<any>>{
    if(this.dataShare.isShare('models')){
      return this.dataShare.getShare('models');
    }

    return this.http.get('api/models').map(res => {
      res = res.json();

      let models = Object.keys(res).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });

      let entries = models.map(m => {
        let model = res[m];
        this.dataShare.createShare(model.name, model);

        if (model && model.settings && model.settings.acls) {
          model.settings.acls.forEach(acl => {
            if (acl.principalType.toLowerCase() == 'role') {
              this.rolesService.addRole(acl.principalId);
            }
          });
        }

        return model;
      });

      this.dataShare.createShare('models',entries);

      return entries;
    });
  }
}
