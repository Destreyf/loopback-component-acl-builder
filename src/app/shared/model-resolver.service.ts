import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot} from "@angular/router";
import {DataShareService} from "./data-share.service";

@Injectable()
export class ModelResolverService {

  constructor(private dataShare: DataShareService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return Observable.of(this.dataShare.getShareValue(route.params['model']));
  }
}
