import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-review-list-admin',
  templateUrl: './review-list-admin.component.html',
  styleUrls: ['./review-list-admin.component.css'],
})
export class ReviewListAdminComponent implements OnInit {
  reviews: any = [];
  userPageNum = 1;
  count = 0;
  dataSize = 10;

  constructor(private FrontEndService: FrontEndService) {}

  ngOnInit(): void {
    this.retrieveReviews();
  }

  retrieveReviews(): void {
    this.FrontEndService.getReviews().subscribe({
      next: (data: any) => {
        console.log(data);
        this.reviews = data;
      },
      error: (e) => console.log(e),
      complete: () => console.log('all reviews have been retrieved'),
    });
  }

  nextPage(event: any) {
    this.userPageNum = event;
    this.retrieveReviews();
  }

  deleteReview(movieId: any): void {
    // let movieId = document.getElementById("id")?.innerText;
    console.log(`here is the id of the review to be delete: ${movieId}`);
    this.FrontEndService.deleteReview(movieId).subscribe({
      error: (e) => console.log(e),
      complete: () => console.log('review deleted'),
    });
  }
}
