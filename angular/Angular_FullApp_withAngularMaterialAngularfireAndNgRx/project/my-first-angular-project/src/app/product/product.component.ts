import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  @Input()
  productName!: string;

  @Output()
  productClicked = new EventEmitter();

  constructor(private productsService: ProductService) {
  }

  ngOnInit() {
  }

  onClicked() {
    //this.productClicked.emit();
    this.productsService.deleteProduct(this.productName);
  }

}
