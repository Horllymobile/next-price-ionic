import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/core/shared/models/user';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  showPassword = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  get loginFormData() {
    return this.loginForm.controls;
  }

  funShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(formPayload) {
    this.isLoading = true;
    console.log(formPayload);
    this.login({
      email: formPayload.email.value,
      password: formPayload.password.value,
    });
  }

  login(payload: { email: string; password: string }) {
    const user = new LoginRequest(payload.email, payload.password);
    const login = this.authService.login(user);
    setTimeout(() => {
      if (login) {
        this.isLoading = false;
        this.router.navigate(['']);
        this.resetForm(this.loginForm);
      }
    }, 1000);
  }

  resetForm(form: FormGroup) {
    form.reset();
  }
}
