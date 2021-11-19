import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private popOverController: PopoverController
  ) {}

  ngOnInit() {}

  async logout() {
    if (this.authService.logout()) {
      await this.popOverController.dismiss(null, '', 'logout');
      this.router.navigate(['', 'auth', 'login']);
    }
  }
}
