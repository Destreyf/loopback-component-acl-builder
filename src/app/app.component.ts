import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {DataShareService} from "./shared/data-share.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public models: Array<any> = [];

  constructor(private http: Http, private dataShare: DataShareService) {

  }

  ngOnInit() {
    this.http.get('api/models').map(res => res.json()).subscribe((res: any) => {
      let models = Object.keys(res).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });

      this.models = models.map(m => {
        this.dataShare.createShare(res[m].name, res[m]);
        return res[m];
      });
    });
  }

  public dedupe(originalArray, prop) {
    return originalArray.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}
