import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  testData: any;
  userData: any;

  constructor(private service: FrontEndService) {}

  ngOnInit(): void {
    this.service.testCallback().subscribe({
      next: (data) => (this.testData = data),
      error: (e) => console.error(e),
      complete: () =>
        console.info(
          `connection to the backend is working, data recieved: ${this.testData.name}`
        ),
    });

    this.service.getUsers().subscribe({
      next: (userData) => (this.userData = userData),
      error: (e) => console.error(e),
      complete: () => console.log('user data by first name: ' + this.userData[0].fname),
    });
  }
}
