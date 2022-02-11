import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  currentUser = sessionStorage.getItem('currentUser');
  isVisible = false;

  constructor(private FEService: FrontEndService) {}

  ngOnInit(): void {
    console.log(`user loggedin: ${this.currentUser}`);
    this.FEService.getOneUser(this.currentUser).subscribe({
      next: (data: any) => {
        if (data.admin == null) {
          this.isVisible = false;
        } else {
          // console.log(data.admin);
          if (data.admin == true) {
            this.isVisible = true;
            console.log(`value of boolean inside the condition: ${this.isVisible}`);
          }
        }
        // if (data.admin == undefined) {
        //   console.log('user has no admin value');
        // } else {
        //   console.log(data.admin);
        // }
      },
      error: (e) => console.log(e),
      complete: () => console.log('user is retrieved.'),
    });
  }
}
