import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
AuthenticationService
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(public route:Router,public auth:AuthenticationService){}
  isClicked = false;
  toggleDropdown(){
    console.log('hello')
    this.isClicked=!this.isClicked ;
  }
}
