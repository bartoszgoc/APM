import {Component} from "@angular/core";

@Component({
    selector: "pm-products",
    template: "./product-list.component.html"
})
export class ProductListComponent {
    pageTitle: string = "Product List";
}