import { Input, Component, Output, EventEmitter } from "@angular/core";

import { SomeDataService } from "./services/some-data-service.service";

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

    constructor(private someDataService: SomeDataService) { }
    productsData = this.someDataService.productsData;

    get currency(): string {
        return this.someDataService.currency;
    }

    get price(): string {
        return (this.product["basePrice"] * this.someDataService.currencyCoef).toFixed(1);
    }



}