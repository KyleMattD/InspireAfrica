import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import * as CryptoJS from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import * as jwt_decode from "jwt-decode";

export class User{
  User_Email: string;
  User_Password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  public form:FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router, private httpserv: HttpClient){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({  //<<<< form validation
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }

  username: string = "";
  password: string = ""; 
  newPass: string;
  UserSubmit =  new User;

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
  }

  //=========================================API login POST===================================
  public Login():void {
   this.newPass = this.password;  //<<<< front end encryption(first layer)
   this.UserSubmit.User_Email = this.username;
   this.UserSubmit.User_Password = this.newPass;  //<<<< set new password to post
    this.httpserv.post<User>("http://localhost:4200/api/User/Login",this.UserSubmit).subscribe(   // <<< Post to LOGIN API endpoint
      (data:any) => {
        localStorage.setItem("jwtToken", data.Token);   // <<< fetch and save JWT token

        var decoded = jwt_decode(data.Token);
        var name = <string>decoded.unique_name;
        
        localStorage.setItem("currentUser",name);  //=========================REMOVE ON LIVE


        localStorage.setItem("loggedIn", "Yes");       // <<< set global logged in attribute
        //=======JWT DECODE FOR USER ID HERE localstorage = currentUser======
        
        this.router.navigateByUrl("/onetime");
      },
      error =>{ // <<<<<< Login failed
        alert("Incorrect Username or Password");
      }
      
    );
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }

 openForgot(){
   this.router.navigateByUrl("submitForgot");
 }

}