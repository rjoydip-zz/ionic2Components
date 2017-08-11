import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// SplashScreen and StatusBar
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// Components
import { MyApp } from './app.component';
import { LoginComponent } from '../components/auth/login/login';
import { SignupComponent } from '../components/auth/signup/signup';
import { ForgotPasswordComponent } from '../components/auth/forgotPass/forgotPass';
import { SocialLoginComponent } from '../components/auth/social-login/social-login';
// Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/auth/login/login';
import { SignupPage } from '../pages/auth/signup/signup';
import { ForgotPasswordPage } from '../pages/auth/forgot-password/forgot-password';
// providers
import { AuthProvider } from '../components/auth/auth.provider';
// Directives
import { EqualValidator } from "../components/auth/directives/equal-validators.directive";
// Custom Directives
import { FilterMenuComponentModule } from '../components/filter-menu/filter-menu.module';
// Native module provider
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { InAppBrowserProvider } from '../providers/in-app-browser';
import { LoaderProvider } from '../providers/loader';
import { ToasterProvider } from '../providers/toaster';

import { FilterMenuComponent } from "../components/filter-menu/filter-menu";
import { FilterDataService } from '../components/filter-menu/filter-data.services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    LoginComponent,
    SignupComponent,
    SocialLoginComponent,
    ForgotPasswordComponent,
    EqualValidator,
    FilterMenuComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    GooglePlus,
    Facebook,
    InAppBrowserProvider,
    LoaderProvider,
    ToasterProvider,
    FilterDataService,
    FilterMenuComponentModule
  ]
})
export class AppModule { }
