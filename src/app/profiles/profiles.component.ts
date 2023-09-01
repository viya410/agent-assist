import { Component } from '@angular/core';

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
}