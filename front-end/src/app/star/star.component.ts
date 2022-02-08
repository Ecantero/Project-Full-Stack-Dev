import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  starClass ='blank_star';
  @Input() starID:any;
  @Input() rating:any;

  @Output() leave: EventEmitter<number> = new EventEmitter();
  @Output() enter: EventEmitter<number> = new EventEmitter();
  @Output() bigClick: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    // console.log(this.starID);
    // console.log(this.rating);

    if (this.rating >= this.starID) {
      this.starClass = "filled_star";
    }
  }

  onenter() {
    // console.log("enter" +this.starID)
    this.enter.emit(this.starID);
  }

  onleave() {
    // console.log("leave"+this.starID)
    this.leave.emit(this.starID);
  }

  starClicked() {
    // console.log("clicked" + this.starID)
    this.bigClick.emit(this.starID);
  }
}
