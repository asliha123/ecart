import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../productService/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupModel=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9.!#$%&*+\/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
  })

  constructor(private fb:FormBuilder,private ps:ProductService,private rout:Router) { }

  ngOnInit(): void {
      
  }
  signUp(){
    if(this.signupModel.valid){

      var path=this.signupModel.value


          var userData={
            username:path.username,
            email:path.email,
            password:path.password
          }

          this.ps.signup(userData).subscribe({
            next:(result: any)=>{
            //  console.log(result);
            alert(`${result.username} registered successfully !`)
            this.signupModel.reset()
            this.rout.navigateByUrl('/login')
             
            },
            error:(result: any)=> {
              console.log(result.error);

            }
          })
    }
    else{
      alert("Invalid form")
    }
  }

  
}
