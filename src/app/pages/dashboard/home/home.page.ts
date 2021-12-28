import { ViewProductDetailsComponent } from './../../../core/modals/view-product-details/view-product-details.component';
import { ProfileModalComponent } from './../../../core/modals/profile-modal/profile-modal.component';
import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { DropdownMenuComponent } from '../../../components/dropdown-menu/dropdown-menu.component';
import { ModalController, ModalOptions } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { EditProductComponent } from 'src/app/core/modals/edit-product/edit-product.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { IApiResponse, IProduct } from 'src/app/core/shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnChanges {
  products: IApiResponse<IProduct>;
  subs: Subscription;
  page = 0;
  size = 20;
  constructor(
    private popOverController: PopoverController,
    private router: Router,
    private modalController: ModalController,
    private actionSheetCont: ActionSheetController,
    private authService: AuthService,
    private productService: ProductService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getProducts({ page: this.page, size: this.size });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts({ page: this.page, size: this.size });
  }

  getProducts(params: {
    page: number;
    size: number;
    start_date?: string;
    end_date?: string;
  }) {
    // console.log(params);
  this.productService.getProducts(params)
    .subscribe({
      next: (res) => {
        console.log(res);
        setTimeout(() => {
          this.products = res
        }, 2000)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  async dropDownMenu(event: any) {
    const popover = await this.popOverController.create({
      component: DropdownMenuComponent,
      event,
      translucent: true,
      id: 'logout',
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  async deleteProduct(id: string) {
    const alert = await this.alertController.create({
      header: 'Delete Product',
      message: 'Are you sure?',

      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.delete(id);
          },
        },
        'No',
      ],
    });

    await alert.present();
  }

  async delete(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: async (res) => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: res.message,

          buttons: ['OK'],
        });
        await alert.present().then(() => {
          this.getProducts({ page: this.page, size: this.size });
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async editProduct(id: string) {
    console.log(id);
    const modal = await this.modalController.create({
      component: EditProductComponent,
      componentProps: { id },
    });
    // this.router.navigate(['', 'dashboard', 'tab', 'edit', id]);

    await modal.present();
  }

  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfileModalComponent,
      //  componentProps: { id },
    });
    // this.router.navigate(['', 'dashboard', 'tab', 'edit', id]);

    await modal.present();
  }

  async viewProduct(product: IProduct) {
    const modal = await this.modalController.create({
      component: ViewProductDetailsComponent,
      componentProps: { product },
    });

    await modal.present();
  }
}
