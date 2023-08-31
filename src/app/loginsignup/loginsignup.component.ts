import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss']
})
export class LoginsignupComponent {
  constructor(private router: Router){

  }
  redirect(): void{
    this.router.navigate(['/justlogin']);
  }
}
