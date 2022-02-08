import { Component, OnInit, Input } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css'],

})
export class ReviewComponentComponent implements OnInit {
  @Input() movieTitle:any;
  stars = [1,2,3,4,5]
  rating=0;
  hoverState=0;
  reviewString = "";
  currentUser = sessionStorage.getItem("currentUser");


  constructor(private frontEndService: FrontEndService) { 
    
  }

  ngOnInit(): void {
    console.log(`User logged in: ${this.currentUser}`);
  }

  enter(i:number){
    this.hoverState = i
  }

  leave(){
    this.hoverState = 0;
  }
  
  updateRating(i:number){
    this.rating = i;
  }

  sumbitReview() {
    console.log(`Title: ${this.movieTitle} rating: ${this.rating}, review: ${this.reviewString}`);
    let item = {
      username: this.currentUser,
      title: this.movieTitle,
      rating: this.rating,
      review: this.reviewString
    };
    this.frontEndService.postReview(item).subscribe({
      error: (e) => console.log(e),
      complete: () => {
        console.log("review has been sent");
        window.location.reload();
      },
    });
  }

}
