import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as Config } from 'src/environments/environment';
import { PopoverController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {


  constructor(
  ) { }

  headerPadrao() {
    return new HttpHeaders({
      'Authorization': `Bearer ${Config.SYSTEM.key}`
    });
  }

}
