import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  sendOrder(data: any) {
    return this.http.post('https://testologia.site/burgers-order', data);
  }

  getData() {
    return this.http.get('https://testologia.site/burgers-data?extra=black');
  }

  productsData: any;


  coeffsCurency = [
    ["$", 1],
    ["₽", 100],
    ["BYN", 2.52],
    ["€", 0.92],
    ["¥", 7.28]
  ];

  numCurrency: number = 0; //set index in coeffsCurency

  currency = "" + this.coeffsCurency[this.numCurrency][0];
  currencyCoef: number = +this.coeffsCurency[this.numCurrency][1];

  changeCurrency(): void {
    this.numCurrency = (this.numCurrency + 1) % this.coeffsCurency.length; //next index in diapason
    this.currency = "" + this.coeffsCurency[this.numCurrency][0];
    this.currencyCoef = +this.coeffsCurency[this.numCurrency][1];
  }

}
