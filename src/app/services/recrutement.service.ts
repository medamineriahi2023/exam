import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offer} from "../models/Offer";

@Injectable({
  providedIn: 'root'
})
export class RecrutementService {

  constructor(private http:HttpClient) { }


  getAllOffres():Observable<Offer[]> {
    return this.http.get<Offer[]>("http://localhost:3000/posts");
  }


  updateOffer(id:any, offer:Offer):Observable<any> {
    return this.http.put<Offer>("http://localhost:3000/posts/"+id ,offer);
  }

  getById(id:any):Observable<Offer> {
    return this.http.get<Offer>("http://localhost:3000/posts/"+id);
  }


}
