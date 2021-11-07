import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
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
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.min(5), Validators.max(16)]]
    });
  }

  get loginFormData() {
    return this.loginForm.controls;
  }

  funShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(formPayload: FormGroup) {
    this.isLoading = true;
    setTimeout(() => {
      console.log(formPayload.value);
      this.isLoading = false;
    }, 2000);
  }

}
