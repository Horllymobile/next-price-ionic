import { ProductService } from 'src/app/core/services/product.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IProductPayload } from '../../shared/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  isLoading = false;
  createProductForm: FormGroup;
  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  get createProductFormData() {
    return this.createProductForm.controls;
  }

  initForm() {
    this.createProductForm = this.fb.group({
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      uom: [null, [Validators.required]],
      company: [null, [Validators.required]],
      description: [null, [Validators.required]],
      address: [null],
    });
  }

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

  async onSubmit(payload: { [key: string]: AbstractControl }) {
    this.isLoading = true;

    const product: IProductPayload = {
      title: payload.title.value,
      price: payload.price.value,
      company: payload.company.value,
      uom: payload.uom.value,
      address: payload.address.value,
      description: payload.description.value,
    };

    this.productService.createProduct(product).subscribe({
      next: async (res) => {
        //console.log(res);
        this.isLoading = false;
        const alert = await this.alertController.create({
          header: 'Success',
          message: res.message,
          buttons: ['Okay'],
        });

        await alert.present();
        await this.modalController.dismiss();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
