import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sData:any=""
  login:any=false

  constructor(private ps:ProductService) { }


  ngOnInit(): void {
    if(localStorage.getItem("currentUser")){
      this.login=true
    }
    else{
      this.login=false
    }
      
  }
  sendData(event:any){
    this.sData=event.target.value
    this.ps.searchString.next(this.sData)
         
  }
 }
