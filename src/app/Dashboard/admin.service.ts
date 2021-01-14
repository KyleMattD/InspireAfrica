import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import {Subjects, PostSubjects} from '../Models/Subjects';
import {Course} from '../Models/Courses';

@Injectable({
    providedIn: 'root'
})

export class AdminService{
    
    constructor(private http: HttpClient) { }

     baseURL= "http://localhost:4200/api/";
     
    getSubjects():any{
      const ops = {     
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
         })
      };
        return this.http.get<Subjects>(this.baseURL + "Subjects/" + localStorage.getItem("currentUser"),ops);
    }

    getCourses(id:number):any{
        const ops = {
            headers: new HttpHeaders({
                'Authorization':'Bearer' + localStorage.getItem("jwtToken")
            })
        };
        return this.http.get<Course>(this.baseURL + "Courses/" + id.toString(),ops)
    }

    putSubjects(Subject:PostSubjects, id:number){
        const ops = {    
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
       return this.http.put(this.baseURL + "Subject/Put/" + id.toString(),Subject,ops);
    }

    postSubject(Subject: PostSubjects){
        const ops = {    
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
       return this.http.post(this.baseURL + "Subject/Add/"+ localStorage.getItem("currentUser"),Subject,ops);
    }

    deregisterSubject(id:number):any{
        const ops = {     
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
          return this.http.delete(this.baseURL + "Subject/deregister/" + id.toString(),ops);
    }

}