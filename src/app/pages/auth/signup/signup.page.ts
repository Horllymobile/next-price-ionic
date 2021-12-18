import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup;
  isLoading = false;
  showPassword = false;

  REG_EXP = {
    number: /^[\+]?[0-9]{11,13}$/,
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alerCtrl: AlertController
  ) {}

  get signupFormData() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [
        null,
        [Validators.required, Validators.pattern(this.REG_EXP.number)],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  funShowPassword() {
    this.showPassword = !this.showPassword;
  }

  signUp(payload: any) {
    this.isLoading = true;
    const p: tPayload = {
      firstName: payload.firstName.value.trim(),
      lastName: payload.lastName.value.trim(),
      email: payload.email.value.trim(),
      phoneNumber: payload.phoneNumber.value.trim(),
      password: payload.password.value.trim(),
    };

    this.authService.register(p).subscribe({
      next: async (res) => {
        console.log(res);
        const alert = await this.alerCtrl.create({
          header: 'Sign up',
          message: 'Account as been created, check your email to verify',
          animated: true,
          buttons: ['OK'],
        });
        await alert.present();
        this.isLoading = false;
        this.clearForm(this.signUpForm);
      },
      error: async ({ error }) => {
        console.log(error);
        const alert = await this.alerCtrl.create({
          header: 'Error',
          message: error.metaData.error,
          animated: true,
          buttons: ['OK'],
        });
        await alert.present();
        this.isLoading = false;
      },
    });
  }

  clearForm(form: FormGroup) {
    form.reset();
  }
}

type tPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
};
