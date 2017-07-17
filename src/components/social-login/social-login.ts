import { Component } from '@angular/core';

/**
 * Generated class for the SocialLoginComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'social-login',
  templateUrl: 'social-login.html'
})
export class SocialLoginComponent {

  text: string;

  constructor() {
    console.log('Hello SocialLoginComponent Component');
    this.text = 'Hello World';
  }

}
