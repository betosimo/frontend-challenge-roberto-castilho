import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContriesService } from '../services/contries.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  countries: any;

  constructor(
    private router: Router,
    private countriesService: ContriesService,
  ) { }

  ngOnInit() {
    this.getAllCountries();

  }

  detail(code, name) {
    this.router.navigate(['/country-holidays', code, name]);
  }

  getAllCountries() {
    this.countriesService.getCountries().then(d => {
      let pay: any = d;
      this.countries = pay.countries;

    }).catch(err => {
      console.log(err)

    });
  }

}
