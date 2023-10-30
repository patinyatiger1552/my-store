import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product , products } from 'src/app/Api/products';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}

  // Methods ngOnInit
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // Methods addToCart
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!')
  }
}