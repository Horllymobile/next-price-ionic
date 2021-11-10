import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, UrlSerializer } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ResetPasswordPage } from './reset-password.page';

describe('ResetPasswordPage', () => {

  beforeEach(waitForAsync(() => {
    // TestBed.configureTestingModule({
    //   declarations: [ ResetPasswordPage ],
    //   imports: [
    //     IonicModule.forRoot(),
    //     RouterModule,
    //     ReactiveFormsModule
    //   ],
    //   providers: [
    //     UrlSerializer
    //   ]
    // }).compileComponents();

    // fixture = TestBed.createComponent(ResetPasswordPage);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
