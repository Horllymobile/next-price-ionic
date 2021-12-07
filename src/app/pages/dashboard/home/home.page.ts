import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DropdownMenuComponent } from '../../../components/dropdown-menu/dropdown-menu.component';
import { ModalController, ModalOptions } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { EditProductComponent } from 'src/app/core/modals/edit-product/edit-product.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: IProduct[];
  constructor(
    private popOverController: PopoverController,
    private router: Router,
    private modalController: ModalController,
    private actionSheetCont: ActionSheetController
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.data = [
        {
          id: 'ID1223',
          title: 'Gas',
          price: 700,
          uom: 'kg',
          company: 'tobic gas station',
          address: '138 Ijegun road Ikotun',
          favourite: false,
        },
        {
          id: 'ID1224',
          title: 'egg roll',
          uom: 'one',
          price: 100,
          address: 'shop 189 address',
          company: 'general',
          favourite: false,
        },
        {
          id: 'ID1225',
          title: 'Kerosine',
          uom: 'ltr',
          price: 200,
          company: 'robine fill station',
          address: 'shop 500 address',
          favourite: false,
        },
        {
          id: 'ID1226',
          title: 'Spagetti',
          uom: 'one',
          price: 250,
          address: 'building 230 address',
          company: 'robine fill station',
          favourite: true,
        },
      ];
    }, 2000);
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

  markAsFavourite(id: string) {
    let item = this.data.find((item) => item.id === id);

    item.favourite = !item.favourite;
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

  async openActionSheet() {
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

interface IProduct {
  id?: string;
  title: string;
  price: number;
  uom: string;
  company: string;
  description?: string;
  address?: string;
  favourite: boolean;
}
