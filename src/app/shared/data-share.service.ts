import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class DataShareService {
  private dataStore: any = {};

  public createShare(key, initialValue: any = '') {
    if (typeof(this.dataStore[key]) == 'undefined') {
      this.dataStore[key] = new BehaviorSubject(initialValue);
    } else {
      this.setShare(key, initialValue);
    }

    return this.getShare(key);
  }

  public getShare(key) {
    return this.dataStore[key];
  }

  public isShare(key) {
    return Object.keys(this.dataStore).indexOf(key) !== -1;
  }

  public getShareValue(key) {
    return this.dataStore[key].getValue();
  }

  public setShare(key, value) {
    return this.dataStore[key].next(value);
  }
}
