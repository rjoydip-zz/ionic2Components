import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
// Rxjs
import 'rxjs/add/operator/debounceTime';

// Config
import { AUTH } from '../auth.config';
// Interface
import { IAuthClass } from '../auth.interface';
// Provider
import { AuthProvider } from '../auth.provider';
// Validators
import { EmailValidator, PasswordValidator, PhoneValidator } from '../validators';


@Component({
  selector: 'app-signup',
  templateUrl: 'signup.html'
})
export class SignupComponent implements OnInit, IAuthClass {

  private title: string;
  private termsAgree: boolean;
  private signupForm: FormGroup;
  private countries: Array<object> = [];

  private formErrors: any;
  private validationMessages: object = {};

  constructor(
    private navCtrl: NavController,
    private auth: AuthProvider,
  ) {
    console.log('Hello SignupComponent Component');
  }

  ngOnInit() {
    this.initializeValue();
  }

  public onValueChanged(data?: any) {
    this.showErrorOrValidate();
  }

  initializeValue(): void {
    if(Object.keys(AUTH.COUNTRY_LIST).length){
      this.countries = [AUTH.COUNTRY_LIST];
    }else{
        this.auth.getCountryList()
        .subscribe(
          data => this.countries = data,
          err => console.log(err)
        );
    }

    this.termsAgree = true;
    this.title = AUTH.SIGNUP_TITLE;
    this.formErrors = AUTH.SIGNUP_FORM_ERRORS;
    this.validationMessages = AUTH.SIGNUP_VALIDATION_MESSAGE;

    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', EmailValidator()),
      country: new FormControl(this.countries[0], Validators.required),
      gender: new FormControl('male', Validators.required),
      password: new FormControl('', PasswordValidator()),
      confirmPassword: new FormControl('', Validators.required),
      phone: new FormControl('', PhoneValidator()),
      agree: new FormControl(false, Validators.required),
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
    });

    this.signupForm.valueChanges
      .debounceTime(400)
      .subscribe(data => this.onValueChanged(data));
  }

  public showErrorOrValidate(): void {
    if (!this.signupForm) { return; }
    const form = this.signupForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.signupForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
  }

  public onSubmit(values?: any):void {
    if (values.agree) {
      this.termsAgree = true;
    } else {
      this.termsAgree = false;
    }
    console.log(values);
  }


}
