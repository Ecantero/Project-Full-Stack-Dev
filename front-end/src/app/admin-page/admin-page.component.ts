import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  

  constructor(private frontEndService:FrontEndService) { }

  ngOnInit() {
  

    this.frontEndService.getUsers().subscribe((response) => {
      let userDatabase = Object.values(response);
      console.log(userDatabase);
      //fill users table with database
      userDatabase.forEach(user =>{
        let fullName = user.fname + " " + user.lname;
        this.fillUserTable(fullName, user.email);
        let deleteButton = document.getElementById('deleteButton');
        deleteButton!.id = user._id;
      
      })
     
    }, (error) =>{
      console.log("error: ", error)
    })
   
  }


  fillUserTable(name: string, email: string){
    const table = document.querySelector('.userTable');

    let tableBodyRow = document.createElement('tr');
    tableBodyRow.className = "tableBodyRow";

    let userName = document.createElement('td');
    userName.innerText = name;

    let userEmail = document.createElement('td');
    userEmail.innerText = email;

    let userDelete = document.createElement('td');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    userDelete.append(deleteButton);
    //userDelete.addEventListener('click', this.deleteUser);
    deleteButton.id = "deleteButton";
    

    tableBodyRow.append(userName,userEmail, userDelete);
    table?.append(tableBodyRow);
  
  }
  deleteUser(){
    console.log();
  }
  
  

}
