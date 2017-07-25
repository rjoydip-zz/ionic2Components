import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';

@Injectable()
export class ShareProvider {

  constructor(private socialSharing: SocialSharing) {
    console.log('Hello Share Provider');
  }

  share(
    message: string = 'This is a dummy message',
    subject: string = 'This is a dummy string',
    file?: string, url?: string
  ) {
    this.socialSharing.share(message, subject, file, url).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully");
    }).catch(() => {
      // Sharing via email is not possible
      console.log("Something error in share");
    });
  }

  shareWithOptions(options: object) {
    this.socialSharing.shareWithOptions(options).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully");
    }).catch(() => {
      // Sharing via email is not possible
      console.log("Something error in share");
    });
  }
}
