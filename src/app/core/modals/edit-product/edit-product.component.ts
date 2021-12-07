import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController, ModalOptions } from '@ionic/angular';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  isLoading = false;
  constructor(
    private alertController: AlertController,
    private router: Router,
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
