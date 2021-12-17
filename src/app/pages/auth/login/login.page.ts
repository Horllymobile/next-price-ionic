import { Constants } from './../../../core/shared/emuns/constants';
import { StorageService } from './../../../core/services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  returnUrl: string;
  errorMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['horlamidex1@gmail.com', [Validators.required, Validators.email]],
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
    //  console.log(formPayload);
    this.login({
      email: formPayload.email.value,
      password: formPayload.password.value,
    });
  }

  login(payload: { email: string; password: string }) {
    this.authService.login(payload).subscribe({
      next: (res: { success: boolean; metaData: any }) => {
        if (res.success) {
          this.isLoading = false;
          this.resetForm(this.loginForm);
          if (this.returnUrl !== '/') {
            this.goToReturnUrl();
          } else {
            this.goToHome();
          }
          this.storageService.add(Constants.USER.USER_PROFILE, res.metaData);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error.message;
      },
    });
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  goToHome() {
    this.router.navigate(['/dashboard/tab/home']);
  }

  goToReturnUrl() {
    this.router.navigateByUrl(this.returnUrl);
  }
}
