import { Component } from '@angular/core';
import { Api } from '../services/api';
import { LoginUser } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private api : Api){}

// stepacc210@gmail.com
// Stepacc210@gmail.com

loginUser : LoginUser = {
  email : "stepacc210@gmail.com",
  password : "Stepacc210@gmail.com"
}

  login(form : any){
      // localStorage.setItem("token", "token")

      console.log(form);
      console.log(form.value);
      console.log(form.valid);
      

      this.api.postObj("auth/login", form.value)
      .subscribe((resp : any) =>{ 
         console.log(resp.data.accessToken);
         console.log(resp.data.refreshToken);
      })
  }


  // auth/login
}




// accessToken

// refreshToken

