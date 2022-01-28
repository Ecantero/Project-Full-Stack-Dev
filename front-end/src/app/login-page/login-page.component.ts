import { FormControl, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FrontEndService } from '../services/front-end.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {



  constructor(private frontEndService:FrontEndService) { }
  
  ngOnInit() {
    this.frontEndService.getUsers().subscribe((response) => {
      console.log('response: ', response)
    }, (error) =>{
      console.log("error: ", error)
    })
  
 
    
  }
  

 onSubmit(f: NgForm){
   console.log(f.value);
   console.log(f.valid);
    this.frontEndService.userLogin(f.value).subscribe((response) => {
      console.log('response: ', response)
    }, (error) =>{
      console.log("error: ", error)
    })
  
    
 }

}
