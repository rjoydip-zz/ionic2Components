import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginComponent } from './login';
import { AuthProvider } from '../auth.provider';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AuthProvider,
    IonicPageModule.forChild(LoginComponent),
  ],
  exports: [
    LoginComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LoginComponentModule { }
