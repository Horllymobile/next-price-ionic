import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  isLoading = false;
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  async cancel() {
    const alert = await this.alertController.create({
      header: 'Cancel Editing',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.router.navigateByUrl('/dashboard/tab/home');
          },
        },
        'Cancel',
      ],
    });

    await alert.present();
  }
}
