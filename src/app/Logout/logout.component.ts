import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router) { }
 //===============Logout user and route to Login========================
  ngOnInit(): void {
    localStorage.removeItem("jwtToken"); //<<< delete JWT token
    localStorage.removeItem("currentUser");
    this.router.navigateByUrl("login");  //<<< ReRoute
  }

}