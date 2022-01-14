import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  testData: any;

  constructor(private service: FrontEndService) {}

  ngOnInit(): void {
    this.service.getTestData().subscribe({
      next: (data) => this.testData = data,
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}
