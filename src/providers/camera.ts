import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import 'rxjs/add/operator/map';

@Injectable()
export class CameraProvider {
  public base64Image: string;

  constructor(private camera: Camera) {console.log('Hello Camera Provider');}

  takePicture() {
    console.log("inside take picture function");
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      console.log(this.base64Image,imageData);
    }, (err) => {
      console.log(err);
    });
  }

  selectPicture() {
    console.log("inside select picture function");
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      console.log(this.base64Image,imageData);
    }, (err) => {
      console.log(err);
    });
  }
}
