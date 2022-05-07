import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import {  ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.page.html',
  styleUrls: ['./country-holidays.page.scss'],
})
export class CountryHolidaysPage implements OnInit {

  code:string="";

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    console.log(this.code);

  }

  backHome() {
    this.navCtrl.navigateRoot('home');

  }

}
