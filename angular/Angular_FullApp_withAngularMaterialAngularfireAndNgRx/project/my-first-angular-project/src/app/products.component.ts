import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductService } from "./products.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy{
    productName = 'A Book';
    isDisabled = true;
    products : string[] = [];
    private productsSubscription: Subscription = new Subscription;

    constructor(private productsService: ProductService) {

        setTimeout(() => {
            //this.productName = 'A Tree';
            this.isDisabled = false; 
           
        }, 3000);

        
    }

    ngOnDestroy() {
        this.productsSubscription.unsubscribe();
    }

    ngOnInit() {
        this.products = this.productsService.getProducts();
        this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
            this.products = this.productsService.getProducts();
        });
    }

    onAddProduct(form: any) {
        //this.products.push(this.productName);
        if(form.valid) {
            //this.products.push(form.value.productName);
            this.productsService.addProduct(form.value.productName)
        }
    }

    onRemoveProduct(productName: string) {
        this.products = this.products.filter( p => p !== productName);
    }
}