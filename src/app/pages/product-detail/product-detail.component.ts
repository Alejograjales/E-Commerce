import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
})
export class ProductDetailComponent {
  productData: Product | any;
  productQuantity: number = 1;
  removeCart = false;
  cartData: Product | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get("id");
    productId &&
      this.http.get(`https://fakestoreapi.com/products/${productId}`).subscribe((result) => {
        this.productData = result;
        console.log('result',result);
        // //if (productId && cartData) {
        //   let items = JSON.parse(cartData);
        //   items = items.filter(
        //     (item: product) => productId === item.id.toString()
        //   );
        //   if (items.length) {
        //     this.removeCart = true;
        //   } else {
        //     this.removeCart = false;
        //   }
        // }

      });
  }
  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === "plus") {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === "min") {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.productData) {
      const productToAdd = { ...this.productData, quantity: this.productQuantity };
      this.cartService.addToCart(productToAdd);
      this.removeCart = true;
    }
  }
  
  //addToCart() {
    // if (this.productData) {
    //   this.productData.quantity = this.productQuantity;
    //   if (!localStorage.getItem("user")) {
    //     this.product.localAddToCart(this.productData);
    //     this.removeCart = true;
    //   } else {
    //     let user = localStorage.getItem("user");
    //     let userId = user && JSON.parse(user).id;
    //     let cartData: cart = {
    //       ...this.productData,
    //       productId: this.productData.id,
    //       userId,
    //     };
    //     delete cartData.id;
    //     this.product.addToCart(cartData).subscribe((result) => {
    //       if (result) {
    //         this.product.getCartList(userId);
    //         this.removeCart = true;
    //       }
    //     });
    //   }
    // }
  //}
  
  removeToCart(productId: number) {
    // if (!localStorage.getItem("user")) {
    //   this.product.removeItemFromCart(productId);
    // } else {
    //   console.warn("cartData", this.cartData);

    //   this.cartData &&
    //     this.product.removeToCart(this.cartData.id).subscribe((result) => {
    //       let user = localStorage.getItem("user");
    //       let userId = user && JSON.parse(user).id;
    //       this.product.getCartList(userId);
    //     });
    // }
    // this.removeCart = false;
  }
}
