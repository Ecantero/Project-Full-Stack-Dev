import { FormControl, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(){}
  ngOnInit() {
      
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
