import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
// Page
import { LoginPage } from "../auth/login/login";
import { SignupPage } from "../auth/signup/signup";
import { ForgotPasswordPage } from "../auth/forgot-password/forgot-password";
// Provider
import { InAppBrowserProvider } from "../../providers/in-app-browser";
import { LoaderProvider } from "../../providers/loader";
import { ToasterProvider } from "../../providers/toaster";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    private iappBp: InAppBrowserProvider,
    private loader: LoaderProvider,
    private toaster: ToasterProvider,
    public menuCtrl: MenuController
  ) {

  }

  openMenu($event):void {
    this.menuCtrl.toggle();
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

  openBrowser(): void {
    this.iappBp.open();
  }

  loaderDefault(): void {
   
    this.loader.showLoading('default');
    setTimeout(() => {
      this.loader.hideLoading();
    }, 2000);
  }

  
  loaderCustom(): void {
    this.loader.showLoading('custom');
    setTimeout(() => {
      this.loader.hideLoading();
    }, 2000);
  }

  loaderText() {
    this.loader.showLoading('text');
    setTimeout(() => {
      this.loader.hideLoading();
    }, 2000);
  }

  defaultToaster() {
    this.toaster.show();
  }

  topToaster() {
    this.toaster.show('', 'top');
  }

}