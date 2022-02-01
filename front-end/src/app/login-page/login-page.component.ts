import { FormControl, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FrontEndService } from '../services/front-end.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorMessage = '';

  constructor(private frontEndService:FrontEndService, private router: Router) { }
  
 
  ngOnInit() {
   //var errorMessage = document.getElementById('errorMsg').innerHTML = '';

  
    this.frontEndService.getUsers().subscribe((response) => {
      //console.log('response: ', response)
   
    }, (error) =>{
      console.log("error: ", error)
    })
  
 
    
  }
  

 onSubmit(f: NgForm){
   console.log(f.value);
   console.log(f.valid);
    this.frontEndService.userLogin(f.value).subscribe((response) => 
    {
      console.log('response: ', response)
       var userCredentials = JSON.stringify(response);
       console.log(userCredentials);

       if(userCredentials.includes('Success')){
          this.router.navigate(['/movies']);
       } else {
        this.errorMessage = 'Incorrect Email/Password credentials';
       }
      
    }, (error) =>{
      console.log("error: ", error)
    })


  
    
 }

}
