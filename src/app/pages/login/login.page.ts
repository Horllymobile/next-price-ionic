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
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  get loginFormData() {
    return this.loginForm.controls;
  }

  onSubmit(formPayload: FormGroup) {
    this.isLoading = true;
    setTimeout(() => {
      console.log(formPayload.value);
      this.isLoading = false;
    }, 2000);
  }

}
