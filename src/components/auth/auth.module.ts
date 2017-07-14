import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { ForgotPasswordComponent } from './forgotPass/forgotPass';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
  ],
})
export class AuthComponentModule { }
