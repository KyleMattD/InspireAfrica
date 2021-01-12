import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator, matchingPasswords } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { Register } from '../Models/Register';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage'; 
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
      'grade': [null, Validators.compose([Validators.required, Validators.minLength(13)])],
      'school': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }


 SubmitData = new Register(); 
 PostData = new Register();   

file: any; 
progressValue: Observable<number>; 

//=================================Initial submit for image upload to firebase========================
  public async onSubmit() {

    if (this.file) {
       const filePath = `${this.basePath}/${this.SubmitData.Email}`;  
       this.data =  this.fireStorage.upload(filePath, this.file);    
 
       this.progressValue = this.data.percentageChanges();
       (await this.data).ref.getDownloadURL().then(url => 
        {
          this.downloadableURL = url;
          this.postData(); 
        });  
     } else {  
       this.downloadableURL = ''; 
       this.postData();
      }
   }

  postData(){
    this.PostData = this.SubmitData; 
    this.http.post<Register>("http://localhost:4200/api/User/Register", this.PostData).subscribe(
      success=> {
        alert("Registration succesfull!");
        this.router.navigateByUrl("/login");
      }
    );
  }

  onSelectedFile(event){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.DocSrc = reader.result as string;
     
        this.form.patchValue({
          fileSource: reader.result
        });
      };
   
    }
       this.file = event.target.files[0];
       this.file.name = this.SubmitData.Email;
     
    
  }

data:any;
  //==================================Post to Api to check if ID exists=============================
  checkEmail(){

    if(this.SubmitData.Email.length >= 10){
    this.http.post("http://localhost:4200/api/UserExists", this.SubmitData.Email).subscribe(  
      success => {
        this.submit1 = true; 
      },

      error =>{
        alert("Email number is already in use");
        this.SubmitData.Email = null;
        this.submit1 = false;  
      }
    );
    }else{
      this.submit1 = false;  
    }
  }


  CheckEmail(){
    this.http.post("http://localhost:4200/api/UserExists", this.SubmitData.Email).subscribe( 
      success => {
        this.submit2 = true; 
        if (this.SubmitData.Email.length == 0){
          this.submit2 = false;  
        }
      },
      error =>{
        alert("Email is already in use");
        this.SubmitData.Email = null;
        console.log(error);
        this.submit2 = false; 
      }
    );
  }


  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }

  omit_special_char(event)
  {   
   var k;  
   k = event.charCode;  
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
  }
  omit_special_char_Let(event)
  {   
   var k;  
   k = event.charCode;  
   return( (k >= 48 && k <= 57)); 
  }
}