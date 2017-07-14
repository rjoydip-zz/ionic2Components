import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../auth/login/login";
import { SignupPage } from "../auth/signup/signup";
import { ForgotPasswordPage } from "../auth/forgot-password/forgot-password";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goLogin(): void {
    this.navCtrl.push(LoginPage);
  }

  goSignup(): void {
    this.navCtrl.push(SignupPage);
  }


  goForgotPassword(): void {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
