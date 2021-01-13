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
import { Register, User } from '../Models/Register';
import {StudentService} from '../Student/student.service';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';
import {Learner} from '../Models/Learner'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public personalForm!:FormGroup;
 
 
  constructor(private formBuilder: FormBuilder,
    public appSettings:AppSettings, 
    private router:Router,
    private http:HttpClient, 
    private fireStorage: AngularFireStorage) { }

  public settings!: Settings;  
  file: any;
  progressValue!: Observable<number>;
  AdminPriv!: string;
  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      'firstname': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      'lastname': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      'grade': [null, Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
      'school': [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
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

  UserEdit:Learner=new Learner;
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
      (      success: any) => {
        this.data2 = success;
        console.log(this.data2);
        this.UserEdit=this.data2;
      }
    );
    
  }

  PutStudent(){
    
    this.StudentService.PutStudent(this.UserEdit).subscribe( //<<<<<<<< update skill
      (response: any) =>  {
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



