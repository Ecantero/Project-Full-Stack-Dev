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
    this.frontEndService.getUsers().subscribe((response) => {
      //console.log('response: ', response)
    }, (error) =>{
      console.log("error: ", error)
    })
  }
  

saveSession( email: string, password: string){
  sessionStorage.setItem(email, password);
}

getSession(){
  return sessionStorage.getItem('currentUser');
}

 onSubmit(f: NgForm){
  
  var userInformation = JSON.stringify(f.value);
  
      this.frontEndService.userLogin(f.value).subscribe((response) => 
      {
        console.log(userInformation);
  
          var userCredentials = JSON.stringify(response);

          if(userCredentials.includes('Success')){

            this.saveSession('currentUser',f.controls['email'].value);
            this.getSession(); 
        
            console.log(userCredentials);
            this.router.navigate(['/movies']);
          } else {
          this.errorMessage = 'Incorrect Email/Password credentials';
          }
        
      }, (error) =>{
        console.log("error: ", error)
      })
  }


}