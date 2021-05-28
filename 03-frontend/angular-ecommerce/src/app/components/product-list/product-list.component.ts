import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  
  constructor(private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }
/* added to bag button */
toggle = true;
status = 'Add to cart'; 

enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Add to cart' : 'Added to Bag';
/* */
}

addToCart(theProduct : Product){

  console.log(`Adding to Cart: ${theProduct.name},${theProduct.unitPrice}`)

  const theCartItem = new CartItem(theProduct);

  this.cartService.addToCart(theCartItem);
}

}
