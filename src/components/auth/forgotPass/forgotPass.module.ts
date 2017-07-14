import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPasswordComponent } from './forgotPass';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPasswordComponent),
  ],
  exports: [
    ForgotPasswordComponent
  ]
})
export class ForgotPasswordComponentModule {}
