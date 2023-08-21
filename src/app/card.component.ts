import { Input, Component, Output, EventEmitter } from "@angular/core";

import { AppService } from "./services/app.service";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"],
})
export class CardComponent {
    @Input() index: number = 0;
    @Input() product: any;
    @Output() scrollToOrder = new EventEmitter<any>();

    cardScrollTo() {
        this.scrollToOrder.emit(this.product);
    }

    constructor(private appService: AppService) { }
    productsData = this.appService.productsData;

    get currency(): string {
        return this.appService.currency;
    }

    get price(): string {
        return (this.product["basePrice"] * this.appService.currencyCoef).toFixed(1);
    }



}