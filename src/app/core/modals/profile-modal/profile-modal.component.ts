import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {
  @Input() user: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async cancel() {
    await this.modalController.dismiss();
  }
}
