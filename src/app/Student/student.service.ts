import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { Learner } from '../Models/Learner'

@Injectable()
export class StudentService {
    public url = "api/users";
    constructor(public http:HttpClient) { }
    apiURL:string="http://localhost:4200/api/"

    getStaff(): any{
        const ops = {     // <<<<<< Initialize header with token
            headers: new HttpHeaders({
              
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            })
          };
        return this.http.get(this.apiURL+"Student/" + localStorage.getItem("currentCourse"),ops);
    }
    
    
    getUsers(): Observable<Learner[]> {
        return this.http.get<Learner[]>(this.url);
    }

    addUser(user:Learner){	    
        return this.http.post(this.url, user);
    }

    updateUser(user:Learner){
        return this.http.put(this.url, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
} 