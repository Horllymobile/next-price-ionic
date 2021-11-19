import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  createPriceForm: FormGroup;
  isLoading = false;
  constructor() {}

  get createPriceFormData() {
    return this.createPriceForm.controls;
  }
  ngOnInit() {}
}
