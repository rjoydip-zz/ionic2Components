import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupComponent } from './signup';

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    IonicPageModule.forChild(SignupComponent),
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupComponentModule {}
