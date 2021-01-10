import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Register,  } from '../Models/Register';
import {StudentService} from '../Student/Student.service'
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public personalForm:FormGroup;
 
 
  constructor(private formBuilder: FormBuilder,
    public appSettings:AppSettings, 
    private router:Router,
    private http:HttpClient, 
    private fireStorage: AngularFireStorage) { }

  public settings: Settings;  
  file: any;
  progressValue: Observable<number>;
  AdminPriv:string;
  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      'firstname': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      'lastname': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      'id': [null, Validators.compose([Validators.required, Validators.minLength(13),Validators.maxLength(13)])],
      'number': [null, Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
      //'city': [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      'address': [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
      //'postalCode': [null, Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(4)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'dateofbirth':[null, Validators.compose([Validators.required])]
    }
  )

  if(localStorage.getItem("jwtToken") === null){
    this.router.navigateByUrl("login");
 }else{
  this.AdminPriv = localStorage.getItem("PrivelageLevel");
 // localStorage.setItem("currentUser","1"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
  this.getStudentDetails();
}
  }

  // public onSubmit(values:Object):void {
  //     if (this.personalForm.valid) {
  //         // this.router.navigate(['pages/dashboard']);
  //     }
  // }
  
  UserEdit:Student=new Student;
  ops:any;

  data2:any;
  getStudentDetails(){
    
    //Implement function to pupulate edit field and populate edit\
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.StudentService.getStudentDetails().subscribe( // <<<< get specific skill
      success => {
        this.data2 = success;
        console.log(this.data2);
        this.UserEdit=this.data2;
      }
    );
    
  }

  PutStudent(){
    
    this.StudentService.PutStudent(this.UserEdit).subscribe( //<<<<<<<< update skill
      (response) =>  {
          console.log(response);
          window.location.reload();
      }
    );
  }
}

export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
  if (control.value && !emailRegexp.test(control.value)) {
      return {invalidEmail: true};
  }

 
}



