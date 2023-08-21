import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ----- BACK
  constructor(private fb: FormBuilder, private appService: AppService) { }

  // productsData = this.someDataService.productsData;
  productsData = this.appService.productsData;

  ngOnInit() {
    this.appService.getData().subscribe(data => this.productsData = data);
  }

  // ----- CURRENCY UODATE
  changeCurrency() {
    this.appService.changeCurrency();
  }

  get currency(): string {
    return this.appService.currency;
  }


  //----- WORK WITH THE FORM ORDER
  confirmOrder() {
    if (this.form.valid) {
      this.appService.sendOrder(this.form.value)
        .subscribe(
          {
            next: (response: any) => {
              alert(response.message);
              this.form.reset();
            },
            error: (response) => {
              alert("response error message")
            }
          }
        );
      this.form.reset();
    }
  }

  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required]
  })


  //-----EVENT HADLING
  scrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: "smooth" });
  }

  scrollToOrder(burger?: any) {
    if (burger) {
      this.form.patchValue({ order: burger.title + ' (' + (burger["basePrice"] * this.appService.currencyCoef).toFixed(1) + ' ' + this.currency + ')' });
    }

    let el = document.getElementById("order");
    if (el != null)
      this.scrollTo(el);
  }

}
