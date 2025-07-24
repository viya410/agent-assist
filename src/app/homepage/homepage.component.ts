import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(public auth: AuthenticationService, private router: Router) {}

  isClicked = false;
  toggleDropdown(){
    console.log('hello')
    this.isClicked=!this.isClicked ;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/justlogin']);
  }
}