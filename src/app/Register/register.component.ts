import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator, matchingPasswords } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { Register } from '../Models/Register';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';   //   import <<<<
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public form:FormGroup;
  public settings: Settings;

  DocSrc: string;
  basePath = '/docs';                       
  downloadableURL = '';                      

  submit1: boolean = false;
  submit2: boolean = false;






  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,private fireStorage: AngularFireStorage,private http: HttpClient){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'surname': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'id': [null, Validators.compose([Validators.required, Validators.minLength(13)])],
      'number': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      'city': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'postalCode': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }


 SubmitData = new Register(); //  <<< Submitted from the form
 PostData = new Register();   //  <<< To be Submitted to the API

file: any; // <<< Photo placeholder to be sent to firebase
progressValue: Observable<number>; //   <<<  Progress bar for image upload

//=================================Initial submit for image upload to firebase========================
  public async onSubmit() {

     
    if (this.file) {
      
      
       const filePath = `${this.basePath}/${this.SubmitData.IDNum}`;  // path at which image will be stored in the firebase storage
       this.task =  this.fireStorage.upload(filePath, this.file);    // upload task
 
       // this.progress = this.snapTask.percentageChanges();
 
       this.progressValue = this.task.percentageChanges();
       (await this.task).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;// <<< url is found here
          this.postData(); //This is calling your final post for the rest of the info
        });  
     } else {  
       this.downloadableURL = ''; //IF no picture is uploaded
       this.postData();
      }
 
 
       
   }

   //=================================Secondary functio to submit to API===========================
  postData(){
    
    this.PostData = this.SubmitData;
    this.PostData.Image = this.downloadableURL;   //   <<< Set firebase URl for database
    this.http.post<Register>("http://localhost:4200/api/User/Register", this.PostData).subscribe(
      success=> {
        alert("Registration succesfull!");
        this.router.navigateByUrl("/login");

      }
    );
  }
//=================================================================================================
  onSelectedFile(event){
    
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.form.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
    
       this.file = event.target.files[0];
       this.file.name = this.SubmitData.IDNum;
     
    
  }

data:any;
  //==================================Post to Api to check if ID exists=============================
  checkEmail(){

    if(this.SubmitData.Email.length >= 10){
    this.http.post("http://localhost:4200/api/UserExists", this.SubmitData.Email).subscribe(  //  <<< Post for ID exists check
      success => {
        this.submit1 = true; // <<< Button shows if ID not found
      },

      error =>{
        alert("Email number is already in use");
        this.SubmitData.Email = null;
        this.submit1 = false;   // <<< Button hides when ID found
      }
      
    );
    }else{
      this.submit1 = false;   // <<< Button hide
    }
  }

//==================================Post to api to see if email exists=============================
  CheckEmail(){

    
    this.http.post("http://localhost:4200/api/UserExists", this.SubmitData.Email).subscribe( //  <<< Post for Email exists check
      success => {
        this.submit2 = true; // <<< Button shows if ID not found
        if (this.SubmitData.Email.length == 0){
          this.submit2 = false; // <<< Button hides 
        }
      },

      error =>{
        alert("Email is already in use");
        this.SubmitData.Email = null;
        console.log(error);
        this.submit2 = false; // <<< Button hides when ID found
      }
      
    );

  }


  //====================================Loading bar for file upload===============================
  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
  //===========================================REGEX to avoid SQL injection=======================
  omit_special_char(event)
  {   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
  }

  //============================================REGEX only to allow numbers=======================
  omit_special_char_Let(event)
  {   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return( (k >= 48 && k <= 57)); 
  }
}