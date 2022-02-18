import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  Users: any = [];
  pageNum = 1;
  count = 0;
  dataSize = 10;

  constructor(private frontEndService: FrontEndService) {}

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.frontEndService.getUsers().subscribe({
      next: (data: any) => {
        this.Users = data;
        console.log(this.Users);
      },
      error: (err) => console.log(err),
      complete: () => console.log('users have been reterieved'),
    });
  }

  nextUserPage(event: any) {
    this.pageNum = event;
    this.retrieveUser();
  }

  deleteUser(userID: string) {
    console.log(userID);
    this.frontEndService.deleteUser(userID).subscribe({
      error: (err) => console.log(err),
      complete: () => console.log('the user has been deleted'),
    });
  }
}
