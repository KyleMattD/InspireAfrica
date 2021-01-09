import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../../../pages/ui/dialog/dialog.component';
import { FarmUserServiceService } from '../../../pages/profile/farm-user-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FarmUser } from '../../../Models/register';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/user.jpg';
  constructor(public dialog:MatDialog, public farmUserService:FarmUserServiceService,private router:Router) { }

  AdminPriv:string;
  ngOnInit() {
    if(localStorage.getItem("jwtToken") === null){
     // this.router.navigateByUrl("login");
   }else{
    this.AdminPriv = localStorage.getItem("PrivelageLevel");
    //localStorage.setItem("currentUser","1"); //<<<<<< Remove when done!!!!!!!!!!!!!!!!!!!!
    this.getFarmUserDetails();
  }
  }
  removeProfile(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  UserEdit:FarmUser=new FarmUser;
  ops:any;

  data2:any;
  
  getFarmUserDetails(){
    //Implement function to pupulate edit field and populate edit\
    this.ops = {     // <<<<<< Initialize header with token
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      })
    };
    this.farmUserService.getUserDetails().subscribe( // <<<< get specific skill
      success => {
        this.data2 = success;
        console.log(this.data2);
        this.UserEdit=this.data2;
        
      }
    );
    
  }

  //deactivates the farm user profile
  removeFarmUser(){
    if(confirm("Are you sure to delete?")) {
      this.ops = {     // <<<<<< Initialize header with token
        headers: new HttpHeaders({
          
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        })
      };
      this.farmUserService.removeFarmUser().subscribe( //<<<<<<<< delete task
        (response) =>  {
            console.log(response);
           
        }
      ); 
      window.location.reload();
  }
}
}
