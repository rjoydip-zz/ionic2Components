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


@Component({
  selector: 'app-signup',
  templateUrl: 'signup.html'
})
export class SignupComponent implements OnInit, IAuthClass {

  private title: string;
  private termsAgree: boolean;
  private signupForm: FormGroup;
  private password_length: number;
  private countries: Array<object> = [];

  private formErrors: object = {};
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
    this.password_length = AUTH.PASSWORD_LENGTH;
    this.validationMessages = AUTH.SIGNUP_VALIDATION_MESSAGE;

    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      country: new FormControl(this.countries[0], Validators.required),
      gender: new FormControl('male', Validators.required),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(this.password_length),
      ])),
      confirmPassword: new FormControl('', Validators.required),
      agree: new FormControl(false, Validators.required)
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
