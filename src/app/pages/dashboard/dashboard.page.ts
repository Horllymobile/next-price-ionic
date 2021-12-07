import { Component } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { CreateProductComponent } from 'src/app/core/modals/create-product/create-product.component';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.page.scss'],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  constructor(private modalController: ModalController) {}

  async createProduct() {
    const modal = await this.modalController.create({
      component: CreateProductComponent,
    });

    await modal.present();
  }
}
