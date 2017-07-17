import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialLoginComponent } from './social-login';

@NgModule({
  declarations: [
    SocialLoginComponent,
  ],
  imports: [
    IonicPageModule.forChild(SocialLoginComponent),
  ],
  exports: [
    SocialLoginComponent
  ]
})
export class SocialLoginComponentModule {}
