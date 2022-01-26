import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css'],

})
export class ReviewComponentComponent implements OnInit {
  stars = [1,2,3,4,5]
  rating=0;
  hoverState=0;


  constructor() { 
    
  }

  ngOnInit(): void {
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

}
