import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class InAppBrowserProvider {
  private iab: any;
  
  constructor(
    private platform: Platform
  ) {
    console.log('Hello InAppBrowserProvider Provider');
  }

  open(): void {
    if (
      !(this.platform.is('mobileweb')) &&
      (
        this.platform.is('ios') ||
        this.platform.is('android') ||
        this.platform.is('cordova')
      )
    ) {
      this.iab = new InAppBrowser();
      this.iab.create('https://ionicframework.com/','_blank', 'location=no');
    } else {
      console.log("You are not in currect platform");
    }
  }
  
}