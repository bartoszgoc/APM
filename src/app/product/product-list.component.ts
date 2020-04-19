import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from './ProductService';

@Component({
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {


    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    item: any;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {
    }

    onRatingClicked(message: string): void {
        this.pageTitle = message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    productsFireBase;

    ngOnInit() {
        this.getProducts();
        console.log(this.productsFireBase);
    }

    getProducts = () =>
        this.productService
        .getProductsList()
        .subscribe(res => (this.productsFireBase = res));

    // ngOnInit(): void {
    //     this.productService.getProductsList().subscribe({
    //         next: products => {
    //             this.products = products;
    //             //this.filteredProducts = this.products;
    //         },
    //         error: err => this.errorMessage = err
    //     });
    // }

    deleteProduct = data => this.productService.deleteProduct(data);
}