import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';
import { LanguageComponent } from 'src/app/core/modals/language/language.component';
import { EditProfileComponent } from 'src/app/core/modals/edit-profile/edit-profile.component';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  dark = false;

  languageModalComponent = LanguageComponent;
  editProfileModalComponent = EditProfileComponent;
  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  toggleDarkMode() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDark.media) {
      this.darkTheme(prefersDark);
    }
  }

  // toggleLightMode() {
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  //   if (prefersDark.media) {
  //     this.lightTheme(prefersDark);
  //   }
  // }

  darkTheme(shouldAdd) {
    // Add or remove the "dark" class based on if the media query matches
    document.body.classList.toggle('dark', shouldAdd);
    this.dark = true;
  }

  lightTheme() {
    document.body.classList.remove('dark');
    this.dark = false;
  }

  async openModal(modal: ComponentRef) {
    const modalCont = await this.modalController.create({
      component: modal,
    });

    await modalCont.present();
  }

  logout() {
    if (this.authService.logout()) {
      this.router.navigate(['', 'auth', 'login']);
    }
  }
}
