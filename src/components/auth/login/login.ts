import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
// Rxjs
import 'rxjs/add/operator/debounceTime';
// Config
import { AUTH } from '../auth.config';
// Interface
import { IAuthClass } from '../auth.interface';
// Provider
import { AuthProvider } from '../auth.provider';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html'
})
export class LoginComponent implements OnInit, IAuthClass {

  private title: string;
  private loginForm: FormGroup;
  private password_length: number;
  private formErrors: object = {};
  private validationMessages: object = {};

  constructor(
    private auth: AuthProvider,
    private navCtrl: NavController,
  ) {
    console.log('Hello LoginComponent Component');
  }

  ngOnInit() {
    this.initializeValue();
  }

  public onValueChanged(data?: any) {
    this.showErrorOrValidate();
  }

  public initializeValue(): void {
    this.title = AUTH.LOGIN_TITLE;
    this.formErrors = AUTH.LOGIN_FORM_ERRORS;
    this.password_length = AUTH.PASSWORD_LENGTH;
    this.validationMessages = AUTH.LOGIN_VALIDATION_MESSAGE;

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]+$'),
        Validators.minLength(this.password_length),
      ]))
    });

    this.loginForm.valueChanges
      .debounceTime(400)
      .subscribe(data => this.onValueChanged(data));
  }

  public showErrorOrValidate(): void {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.loginForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
  }

  public onSubmit(values: any): void {
    console.log(values);
  }

}
