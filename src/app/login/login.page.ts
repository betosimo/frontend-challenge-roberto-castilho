import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  senha: string = '';
  email: string = '';
  public loginForm : FormGroup;


  constructor(
    private navCtrl: NavController,
    private formbuilder: FormBuilder,
  ) {
    this.loginForm = this.formbuilder.group({

      emailf:[this.email,[Validators.required, Validators.minLength(5),Validators.maxLength(60),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      senhaf:[this.senha,[Validators.required, Validators.minLength(6),Validators.maxLength(20)]],

    })
   }

  ngOnInit() {
  }



  onSubmit() {


      if ((this.loginForm.value.emailf ) && (this.loginForm.value.senhaf)) {
        this.navCtrl.navigateRoot('home');

      }



  }

}
