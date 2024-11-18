import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../productService/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9.!#$%&*+\/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]+')]]
  })

  constructor( private fb:FormBuilder,private ps:ProductService,private rout:Router) { }

  ngOnInit(): void {
    
      
  }
            login(){
              if(this.loginForm.valid){
                  var path=this.loginForm.value
                  var loginData={
                    email:path.email,
                    password:path.psw
                  }
                  this.ps.signIn(loginData).subscribe({
                    next:(result:any)=>{
                      alert(`${result.username} login success`)
                      this.loginForm.reset()

                      localStorage.setItem("currentUser",result.username)
                      localStorage.setItem("currentUserId",result._id)

                      this.rout.navigateByUrl("")

                    },
                    error:(result:any)=>{
                      alert(result.error)

                    }
                  })
                
              }
              else{
                alert("Invalid form")
              }
            }
}
