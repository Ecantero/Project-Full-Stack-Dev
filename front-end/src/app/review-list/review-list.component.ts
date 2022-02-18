import { Component, Input, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent implements OnInit {
  @Input() movieTitle: any;
  reviews: any = [];
  pageNum = 1;
  count = 0;
  dataSize = 10;

  constructor(private FrontEndService: FrontEndService) {}

  ngOnInit(): void {
    this.retrieveReviews();
  }

  nextPage(event: any) {
    this.pageNum = event;
    this.retrieveReviews();
  }

  retrieveReviews(): void {
    this.FrontEndService.getReviews().subscribe({
      next: (data: any) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          const review = data[i];
          if (data[i].title == this.movieTitle) {
            this.reviews.push(review);
          }
        }
      },
      error: (e) => console.log(e),
      complete: () => console.log('reviews have been retrieved'),
    });
  }
}
