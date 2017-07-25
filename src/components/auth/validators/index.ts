import { Validators } from '@angular/forms';

// Config
import { AUTH } from '../auth.config';

// Email
export function EmailValidator() {
  return Validators.compose([
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);
}

// Password
export function PasswordValidator() {
  return Validators.compose([
    Validators.required,
    Validators.pattern('[a-zA-Z0-9]+$'),
    Validators.minLength(AUTH.PASSWORD_LENGTH),
  ]);
}

// Phone
export function PhoneValidator() {
  return Validators.compose([
    Validators.required,
    Validators.minLength(AUTH.PHONE_LENGTH),
    Validators.maxLength(AUTH.PHONE_LENGTH),
  ]);
}
