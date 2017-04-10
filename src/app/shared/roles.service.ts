import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class RolesService {
  public roles: BehaviorSubject<any> = new BehaviorSubject([]);
  private _roles: Array<any> = [];

  constructor() {
  }

  public addRole(role) {
    if (this._roles.indexOf(role) === -1) {
      this._roles.push(role);

      this._roles = this._roles.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });

      this.roles.next(this._roles);
    }
  }
}
