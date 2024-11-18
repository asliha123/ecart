import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  userId: any = ""
  products: any = []

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    if (localStorage.getItem("currentUserId")) {
      this.userId = localStorage.getItem("currentUserId")
      this.ps.getWishlist(this.userId).subscribe({
        next: (result: any) => {
          this.products = result
          console.log(this.products);
          
        }
      })
    }
  }

}
