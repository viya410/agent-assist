import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

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
  constructor(public authenticationService: AuthenticationService){    
  }
  isAdmin():boolean{
    return false;
  }
}