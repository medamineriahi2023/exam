import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login:string;
  public password:string;
  public alert:string = "";

  constructor(private route : Router) {
  }


  public auth(): void{
    if (this.login === "admin" && this.password==="root"){
      this.route.navigate(['/home']);
    }else {
      this.alert = "Username or password is incorrect";
    }
  }

}
