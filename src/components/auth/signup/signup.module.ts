import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupComponent } from './signup';
import { EqualValidator } from '../directives/equal-validators.directive';

@NgModule({
  declarations: [
    SignupComponent,
    EqualValidator
  ],
  imports: [
    IonicPageModule.forChild(SignupComponent),
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupComponentModule {}
