// App title globally 
export let APP_TITLE = "I2TaxiApp";
// Find driver page title
export let FIND_DRIVER_PAGE_TITLE = "Find your driver";
// Driver page title
export let DRIVER_PAGE_TITLE = "Driver Profile";
// Settings page title
export let SETTING_PAGE_TITLE = 'Settings';
/*
* @params CORDOVA_ENABLE: boolean   production(true) , development(false)
*/
export let CORDOVA_ENABLE = true;
// Login and signup password validation checking length
export let PASSWORD_LENGTH = 6;
// Hire button text which in find driver page
export let HIRE_BUTTON_TEXT = "HIRE NOW";
// Firebase configuration object
export let FIREBASE_CONFIG_OBJ = {
  apiKey: "AIzaSyB18Dnog2OvPR1YA9QuBgwA1ZGn_NB10D8",
  authDomain: "taxi-app-e1a14.firebaseapp.com",
  databaseURL: "https://taxi-app-e1a14.firebaseio.com",
  projectId: "taxi-app-e1a14",
  storageBucket: "taxi-app-e1a14.appspot.com",
  messagingSenderId: "1067668161008"
};
// Push norification sender id
export let PUSH_SENDER_ID = FIREBASE_CONFIG_OBJ.messagingSenderId;
// PICK_UP and DROP_OFF global configuration object
export class ConfigureGlobal {
  PICK_UP: string = '';
  DROP_OFF: string = '';
  constructor() { }
  public setPickup(value: string): void {
    this.PICK_UP = value
  }
  public setDropoff(value: string): void {
    this.DROP_OFF = value
  }
  public getPickup() {
    return this.PICK_UP;
  }
  public getDropoff() {
    return this.DROP_OFF;
  }
}