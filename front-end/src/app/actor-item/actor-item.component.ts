import { Component, OnInit,Input } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
  @Input() actorInfo:any;
  @Input() actorID:any;

  imageArray:any;

  actorImage = ''

  constructor(private frontEndService: FrontEndService) { 
    
  }

  ngOnInit(): void {

    
    this.frontEndService.getActorImage(this.actorID).subscribe(
      (data)=>{
        // console.log(data)
        this.imageArray = data
        this.actorImage = 'https://image.tmdb.org/t/p/w500' +this.imageArray.profiles[0].file_path
      }
    )

    
  }

}
