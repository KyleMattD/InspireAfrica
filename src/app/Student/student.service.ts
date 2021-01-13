import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { Learner } from '../Models/Learner'
import { Subjects } from '../Models/Subjects';

@Injectable()
export class StudentService {
    constructor(public http:HttpClient) { }
    public url="http://localhost:4200/api/"
    
    
    getLearners(): Observable<Learner[]> {
        return this.http.get<Learner[]>(this.url + "Learner");
    }

    getSubjects(): Observable<Learner[]> {
        return this.http.get<Learner[]>(this.url + "Subjects");
    }

    addLearners(user:Learner){	    
        return this.http.post(this.url + "Learner/add", user);
    }

    addSubjects(Subjects:Subjects){	    
        return this.http.post(this.url, Subjects);
    }

    updateLearners(user:Learner){
        return this.http.put(this.url + "Learner/Edit", user);
    }

    updateSubject(Subjects:Subjects){
        return this.http.put(this.url + "Subjects/Edit", Subjects);
    }

    deleteLearners(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
} 

