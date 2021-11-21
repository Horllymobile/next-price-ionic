import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  dark = false;
  constructor() {}

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
}
