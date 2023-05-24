import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offer} from "../models/Offer";

@Injectable({
  providedIn: 'root'
})
export class RecrutementService {

  constructor(private http:HttpClient) { }


  getAllOffres():Observable<Offer[]>{
    return this.http.get<Offer[]>("http://localhost:3000/posts");
  }

  update(data: Offer, id:number):Observable<Offer>{
    return this.http.put<Offer>("http://localhost:3000/posts/"+ id, data);
  }

  getById(id:number):Observable<Offer>{
    return this.http.get<Offer>("http://localhost:3000/posts/"+ id);
  }


  save(offer:Offer):Observable<Offer>{
    return this.http.post<Offer>("http://localhost:3000/posts/", offer);
  }
}
