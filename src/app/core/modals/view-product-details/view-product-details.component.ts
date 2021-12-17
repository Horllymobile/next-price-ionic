import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IProduct } from 'src/app/core/shared/models/product';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss'],
})
export class ViewProductDetailsComponent implements OnInit {
  @Input() product: IProduct;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async back() {
    await this.modalController.dismiss();
  }
}
