import { Component, OnInit } from '@angular/core';

export interface IAuthConfig {
    TITLE: string,
    FIREBASE: boolean,
    LOGIN_TITLE: string,
    SIGNUP_TITLE: string,
    COUNTRY_LIST: object,
    PASSWORD_LENGTH: number,
    LOGIN_FORM_ERRORS: object,
    SIGNUP_FORM_ERRORS: object,
    FORGOT_FORM_ERRORS: object,
    LOGIN_VALIDATION_MESSAGE: object,
    SIGNUP_VALIDATION_MESSAGE: object,
    FORGOT_VALIDATION_MESSAGE: object,
    MOCK_COUNTRIES: boolean,
}

export interface IAuthClass {
    initializeValue();
    onSubmit(data: any);
    showErrorOrValidate();
}
