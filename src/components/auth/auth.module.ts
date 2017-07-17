import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { ForgotPasswordComponent } from './forgotPass/forgotPass';
import { SocialLoginComponent } from './social-login/social-login';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SocialLoginComponent,
    ForgotPasswordComponent,
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    SocialLoginComponent,
    ForgotPasswordComponent,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    SocialLoginComponent,
    ForgotPasswordComponent,
  ],
})
export class AuthComponentModule { }
