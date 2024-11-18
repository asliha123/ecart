import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements  OnInit {

  id:any=""
 product:any={}
  constructor(private ar:ActivatedRoute,private ps:ProductService) { }

   ngOnInit(): void {
       this.ar.params.subscribe((data:any)=>{
        // console.log(data);
        
         this.id=data.id
         this.ps.getProduct(this.id).subscribe({
          next:(result:any)=>{
            this.product=result
            console.log(this.product);
            
            
          },
          error:(result:any)=>{
            alert(result.error.message)
          }
         })


       })

      
      
   }
}
