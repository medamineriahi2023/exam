import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecrutementService {

  constructor(private http:HttpClient) { }


  getAllOffres():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/posts");
  }
}
