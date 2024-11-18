import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts:any=[]
  searchData=""

  constructor(private ps:ProductService,private rout:Router) { }


  ngOnInit(): void {
    this.ps.searchString.subscribe((data:any)=>{
      this.searchData=data
    
      this.ps.getProducts(this.searchData).subscribe({
        next:(result:any)=>{
        this.allProducts=result
        },
        error:(result:any)=>{
              alert(result)
        }
      })

    })
  }
 isLoggedIn(){
  if( localStorage.getItem("currentUser")){
    return true
  }
  else{
    return false
  }
 }
  addToCart(){
       if(this.isLoggedIn()){
        alert("add to cart work")
       }
       else{
        alert("please login first")
        this.rout.navigateByUrl("login")
       }
  }
  addToWishlist(id:any,title:any,description:any,price:any,category:any,image:any,rating:any){
    if(this.isLoggedIn()){
      if(localStorage.getItem("currentUserId")){
            var userId=localStorage.getItem("currentUserId")
            const bodyData={  
            userId,id,title,price,description,category,image,rating
            }
            this.ps.addtoWishlist(bodyData).subscribe({
              next:(result:any)=>{
                alert(result)
              },
              error:(result:any)=>{
                alert(result.error)
              }
            })
      }
     }
     else{
      alert("please login first")
      this.rout.navigateByUrl("login")

     }
  }
}
