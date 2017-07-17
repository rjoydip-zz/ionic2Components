import { IAuthConfig } from './auth.interface';

let PASSWORD_LENGTH: 6;

export let AUTH: IAuthConfig = {
  TITLE: 'Login And Signup',
  LOGIN_TITLE: 'Login',
  SIGNUP_TITLE: 'Signup',
  FIREBASE: false,
  GOOGLE_AUTHENTICATION: true,
  FACEBOOK_AUTHENTICATION: true,
  TWITTER_AUTHENTICATION: false,
  GITHUB_AUTHENTICATION: false,
  PASSWORD_LENGTH: PASSWORD_LENGTH,
  LOGIN_FORM_ERRORS: {
    'email': [],
    'password': []
  },
  LOGIN_VALIDATION_MESSAGE: {
    'email': {
      'required': 'Email is required',
      'pattern': 'Enter a valid email.'
    },
    'password': {
      'required': 'Password is required',
      'minlength': `Password must be at least ${PASSWORD_LENGTH} characters long.`,
      'pattern': 'Your password must contain at least one uppercase, one lowercase, and one number.'
    }
  },
  SIGNUP_FORM_ERRORS: {
    'name': [],
    'email': [],
    'password': [],
    'confirmPassword': []
  },
  SIGNUP_VALIDATION_MESSAGE: {
    'name': {
      'required': 'Name is required.'
    },
    'email': {
      'required': 'Email is required',
      'pattern': 'Enter a valid email.'
    },
    'password': {
      'required': 'Password is required',
      'minlength': `Password must be at least ${PASSWORD_LENGTH} characters long.`,
      'pattern': 'Your password must contain at least one uppercase, one lowercase, and one number.'
    },
    'confirmPassword': {
      'required': 'Confirm password is required',
      'minlength': `Confirm password must be at least ${PASSWORD_LENGTH} characters long.`,
      'pattern': 'Your password must contain at least one uppercase, one lowercase, and one number.',
      'validateEqual': 'Password mismatch'
    }
  },
  FORGOT_FORM_ERRORS: {
    'email': []
  },
  FORGOT_VALIDATION_MESSAGE: {
    'email': {
      'required': 'Email is required',
      'pattern': 'Enter a valid email.'
    }
  },
  MOCK_COUNTRIES: true,
  COUNTRY_LIST: {}
}