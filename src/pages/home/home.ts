import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// Page
import { LoginPage } from "../auth/login/login";
import { SignupPage } from "../auth/signup/signup";
import { ForgotPasswordPage } from "../auth/forgot-password/forgot-password";
// Provider
import { InAppBrowserProvider } from "../../providers/in-app-browser/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    private iappBp: InAppBrowserProvider
  ) {

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

  openBrowser():void{
    this.iappBp.open();
  }

}
