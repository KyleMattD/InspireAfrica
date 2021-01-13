import { Component, OnInit, ViewChild} from '@angular/core';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PostSubjects, Subjects} from '../Models/Subjects';
import {Learner} from '../Models/Learner';
import { user } from '../Login/login.component';
import { StudentService } from './student.service';

export interface Element {
  Value:number;
  Text: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public displayedColumns =['Subject Name','Centre Name','Learner Mark','Actions'];
  public dataSource: any;
  public settings: Settings;
  show: boolean = false;
  showAdd: boolean = false;
  showF: boolean = false;
  showFAdd: boolean = false;
  form:FormGroup;
  EmailAddress!:string;
  @ViewChild(MatPaginator)
    paginator!: MatPaginator;

  Learner: Learner [] = [];
  Subjects: Subjects []= [];
  active: Element[] = [{Value: 1, Text: "True"},{Value: 0, Text: "False"}];
  data : Subjects[] = []; 
  ops:any;
  currentEdit!:number;
  SubjectAdd: PostSubjects = new PostSubjects;
  SubjectEdit: PostSubjects = new PostSubjects;
  AdminPriv!: string;
  showtable: boolean = true;
  currentUser!: user;
 

  constructor(public appSettings:AppSettings, private router: Router,private formbuilder: FormBuilder, public dialog: MatDialog, private http : HttpClient, private StudentService: StudentService) { 
    this.settings = this.appSettings.settings; 
    console.log("debug");
    this.form = this.formbuilder.group({

      'Size':['', Validators.compose([Validators.required,Validators.maxLength(30)])],
      'Address':['', Validators.compose([Validators.required,Validators.maxLength(150)])],
      'Name':['', Validators.compose([Validators.required,Validators.maxLength(100)])],
      'Email':['', Validators.compose([Validators.required,Validators.maxLength(150)])],
      'Number':['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      Types: new FormControl,
      Prov: new FormControl
    })
  }

  ngOnInit(): void {
   this.currentUser = localStorage.getItem("currentUser");
       if(localStorage.getItem("jwtToken") == null){
        this.router.navigateByUrl("login");
    }else{
      this.AdminPriv = localStorage.getItem("PrivelageLevel");

     this.getData();
    } 
  }

  data1:any;
  getData(){
    this.StudentService.getLearners().subscribe(
      (response: any) => {
        this.data1=response;
        console.log(this.data1["learnerList"]);
        this.dataSource = new MatTableDataSource<Learner>(this.data1["learnerList"]);  
        this.dataSource.paginator = this.paginator;
      },
        (      error: any)=>{
       
      }
    );


    this.StudentService.getSubjects().subscribe(
      (response: any) => {
        this.data1 = response;
        console.log(this.data1);
        this.Subjects = this.data1;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeform(){
    if(this.show == false){
      this.show =true;
      this.showAdd = false;
      this.showtable = false;
    }
  }
  
  addSubject(){
    if(this.show == true){
      this.show = false;
    } 
    this.SubjectAdd = new PostSubjects;
    this.showAdd = true;
    this.showtable = false;
    this.showF = false;
    this.showFAdd = false;
  }

  putSubjects(){
    this.StudentService.updateSubject(this.SubjectEdit).subscribe(
        (      success: any)=>{
        console.log(success);
        //window.location.reload();
        this.getData();
      },
        (      error: any)=>{
        console.log(error)
      }
    );
  }
    

  postSubjects(){
    
    this.ops = {   
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.StudentService.postFarm(this.SubjectAdd).subscribe( 
        (      success: any) =>  {
          console.log(success);
          window.location.reload();
      },
        (      error: any)=>{

      }
    );
  }

  addSubjects() { 
    this.postSubjects();  
    this.showTable(); 
  }


  deregisterSubjects(id:number){
    this.StudentService.deregisterSubject(id).subscribe();
    this.getData();
  }


  showTable(){
    this.showtable = true;
    this.showAdd = false;
    this.show = false;
    this.showF = false;    
  }
  
}
