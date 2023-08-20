import { Component } from '@angular/core';

import { SomeDataService } from "./services/some-data-service.service";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: "smooth" });
  }

  scrollToOrder(burger?: any) {
    if (burger) {
      this.form.patchValue({ order: burger.title + ' (' + (burger["basePrice"] * this.someDataService.currencyCoef).toFixed(1) + ' ' + this.currency + ')' });
    }

    let el = document.getElementById("order");
    if (el != null)
      this.scrollTo(el);
  }

  confirmOrder() {
    if (this.form.valid) {
      alert("Спасибо за заказ! Мы с Вами свяжемся!")
      this.form.reset();
    }
  }

  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required]
  })

  constructor(private someDataService: SomeDataService, private fb: FormBuilder) {

  }

  productsData = this.someDataService.productsData;

  changeCurrency() {
    this.someDataService.changeCurrency();
  }

  get currency(): string {
    return this.someDataService.currency;
  }


}
