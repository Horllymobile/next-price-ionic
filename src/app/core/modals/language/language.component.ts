import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async cancel() {
    await this.modalController.dismiss();
  }
}
