import { Injectable,Component } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(
    private http: Http
  ) { }
  sName: any
  // url = 'https://us-central1-seletedtopic21048.cloudfunctions.net/apiUrl'
  url = 'http://localhost:3005'
  async  mateMd5() {
    let data = await this.getReceiveOther()
    console.log(data);
  }
  async getReceiveOther() {
    const res:any = await this.http.get(`${this.url}/`).subscribe(data => {
      console.log(data);
    });
    return res;
  }
}
