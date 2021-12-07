import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  isLoading = false;
  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  async cancel() {
    const alert = await this.alertController.create({
      header: 'Cancel Action',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.modalController.dismiss();
          },
        },
        'Cancel',
      ],
    });

    await alert.present();
  }
}
