import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  isClicked = false;
  toggleDropdown(){
    console.log('hello')
    this.isClicked=!this.isClicked ;
  }
  constructor(public authenticationService: AuthenticationService, private router: Router){    
  }
  isAdmin():boolean{
    return false;
  }

  navigateToChat(){
    this.router.navigate(['/profiles/chat']);
  }
}