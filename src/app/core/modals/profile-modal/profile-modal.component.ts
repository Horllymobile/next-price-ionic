import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/core/services/storage.service';
import { Constants } from '../../shared/emuns/constants';
import { IUserData } from '../../shared/models/user';
@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {
  @Input() user: IUserData;

  constructor(
    private modalController: ModalController,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user = this.storageService.get(Constants.USER.USER_PROFILE);
    // console.log(this.user);
  }

  async cancel() {
    await this.modalController.dismiss();
  }
}
