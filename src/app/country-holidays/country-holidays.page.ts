import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ContriesService } from '../services/contries.service';

@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.page.html',
  styleUrls: ['./country-holidays.page.scss'],
})
export class CountryHolidaysPage implements OnInit {

  code: string = "";
  name: string = "";

  holidays: any;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private countriesService: ContriesService,
  ) { }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    if (this.code && this.code != "") {
      this.getAllHolidays(this.code);
    }
  }

  backHome() {
    this.navCtrl.navigateRoot('home');

  }
  getAllHolidays(code) {
    const year = (new Date()).getFullYear();
    const data = {
      "country_code": code,
      "year": year
    }
    this.countriesService.getHolidays(data).then(d => {
      let pay: any = d;
      this.holidays = pay.holidays;

    }).catch(err => {
      console.log(err)

    });
  }

}
