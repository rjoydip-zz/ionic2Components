import { Component, Input, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

// Config
import { AUTH } from '../auth.config';

@Component({
  selector: 'app-social-login',
  templateUrl: 'social-login.html'
})
export class SocialLoginComponent implements OnInit {

  // @Input() layout: boolean;
  private google: boolean = false;
  private facebook: boolean = false;
  private twitter: boolean = false;

  constructor(
    private platform: Platform,
    // private fb: Facebook,
    // private googlePlus: GooglePlus,
  ) {
    console.log('Hello SocialLoginComponent Component');
  }

  ngOnInit() {
    this.google = AUTH.GOOGLE_AUTHENTICATION;
    this.facebook = AUTH.FACEBOOK_AUTHENTICATION;
  }

  fbAuth(): void {
    console.log("Facebook login");
    if (
      !(this.platform.is('mobileweb')) &&
      (
        this.platform.is('ios') ||
        this.platform.is('android') ||
        this.platform.is('cordova')
      )
    ) {
    // this.fb.login(['public_profile', 'user_friends', 'email'])
    //     .then((res: FacebookLoginResponse) => alert(JSON.stringify(res)))
    //     .catch(e => console.log('Error logging into Facebook', e));
    } else {
      console.log("You are not in currect platform");
    }
  }

  gPlusAuth(): void {
    console.log("Google plus login");
    if (
      !(this.platform.is('mobileweb')) &&
      (
        this.platform.is('ios') ||
        this.platform.is('android') ||
        this.platform.is('cordova')
      )
    ) {
      // this.googlePlus.login({})
      //   .then(res => alert(JSON.stringify(res)))
      //   .catch(err => console.error(err));
    } else {
      console.log("You are not in currect platform");
    }
  }
}
