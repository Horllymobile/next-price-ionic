import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { CreateProductComponent } from 'src/app/core/modals/create-product/create-product.component';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.page.scss'],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  constructor(
    private modalController: ModalController,
    private actionSheetCont: ActionSheetController,
    private router: Router
  ) {}

  async createProduct() {
    const modal = await this.modalController.create({
      component: CreateProductComponent,
    });

    await modal.present();
  }

  async settings() {
    const actionSheet = await this.actionSheetCont.create({
      header: 'Menu',
      buttons: [
        {
          text: 'Profile',
          role: 'profile',
          icon: 'person',
          handler: () => {
            console.log('Profile click');
          },
        },
        {
          text: 'Logout',
          role: 'logout',
          icon: 'log-out-outline',
          handler: () => {
            console.log('Profile click');
          },
        },
        {
          text: 'Notifications',
          role: 'notifications',
          icon: 'notifications-outline',
          handler: () => {
            console.log('Profile click');
          },
        },
        {
          text: 'Settings',
          role: 'settings',
          icon: 'settings-outline',
          handler: () => {
            this.router.navigate(['', 'dashboard', 'tab', 'settings']);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
