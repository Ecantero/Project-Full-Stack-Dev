import { FormControl, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  
  ngOnInit() {
    this.loginService.getAPIData().subscribe((response) =>{
      console.log('response:', response)
    },(error) =>{
      console.log('error: ', error)
    })    
  }
  
  // loginUser(event){
  //   event.preventDefault();
  //   console.log(event)
  // }
 onSubmit(f: NgForm){
   console.log(f.value);
   console.log(f.valid)
 }

}
