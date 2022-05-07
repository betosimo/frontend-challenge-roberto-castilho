import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as Config } from 'src/environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ContriesService {

  constructor(
    public http: HttpClient,
    private utilService: UtilService
    ) { }


  getCountries(token: string) {
    return new Promise((res, rej) => {
      this.http.post(`${Config.SYSTEM.urlApi}Countries`, {}, { headers: this.utilService.headerPadrao() }).subscribe(d => {
        res(d);
      }, err => {
        rej(err);
      });
    });
  }
}
