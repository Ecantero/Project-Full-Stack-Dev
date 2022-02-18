import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrontEndService } from '../services/front-end.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  currentUser = sessionStorage.getItem('currentUser');
  isVisible = false;
  userLoggedIn = false;

  constructor(private FEService: FrontEndService, private router: Router) {}

  ngOnInit(): void {
    console.log(`user loggedin: ${this.currentUser}`);
    this.FEService.getOneUser(this.currentUser).subscribe({
      next: (data: any) => {
        if (data.admin == undefined || data.admin == null) {
          this.isVisible = false;
          this.userLoggedIn = true;
        } else {
          this.userLoggedIn = true;
          // console.log(data.admin);
          if (data.admin == true) {
            this.isVisible = true;
            console.log(`value of boolean inside the condition: ${this.isVisible}`);
          }
        }
      },
      error: (e) => console.log(e),
      complete: () => console.log('user is retrieved.'),
    });
  }

  Logout(): void {
    sessionStorage.clear();
    // this.router.navigate(["login"]);
    window.location.reload();
  }
}
