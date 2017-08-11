import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoaderProvider {
  loading: any;
  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello Loader Provider');
  }

  showLoading(type: string, option?: object) {
    switch (type) {
      case 'default':
        this.loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        this.loading.present();
        break;
      case 'custom':
        this.loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: `<div class="custom-spinner-container">
                      <div class="custom-spinner-box"></div>
                    </div>`,
          duration: 5000
        });
        this.loading.present();
        break;
      case 'bubbles':
        this.loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: `<ion-spinner name="bubbles"></ion-spinner>`,
          duration: 5000
        });
        this.loading.present();
        break;
      case 'text':
        this.loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: 'Loading Please Wait...'
        });
        this.loading.present();
        break;
    }
  }

  hideLoading() {
    this.loading.dismiss();
  }

}
