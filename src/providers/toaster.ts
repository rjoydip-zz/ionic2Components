import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";

@Injectable()
export class ToasterProvider {

  constructor(private toastCtrl: ToastController) {
    console.log('Hello Toaster Provider');
  }

  show(message: string = 'Default toaster message',position: string = 'bottom'){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present();
  }

}
