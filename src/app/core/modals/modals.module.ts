import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LanguageComponent } from './language/language.component';
import { IonicModule } from '@ionic/angular';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EditProductComponent,
    CreateProductComponent,
    LanguageComponent,
    EditProfileComponent,
    ProfileModalComponent,
  ],
  imports: [CommonModule, IonicModule],
})
export class ModalsModule {}
