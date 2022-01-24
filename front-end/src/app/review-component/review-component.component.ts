import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css'],
  styles:[`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class ReviewComponentComponent implements OnInit {
  currentRate = 6;


  constructor() { 
  }

  ngOnInit(): void {
  }

}
