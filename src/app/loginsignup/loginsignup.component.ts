import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss']
})
export class LoginsignupComponent {
  constructor(private router: Router,private auth:AuthenticationService){

  }
  
  submitForm(form: any) {
    if (form.valid) {
      // Access the form data
      const formData = form.value;
      console.log('Form Data:', formData);
      this.auth.signup(formData);

      if(form.password!==form.rpassword){
        alert('passwords do not match');
        return;
      }
      
      // Call your desired function with the form data
      // this.auth.signup(formData);
    }
  }
  
  
  redirect(): void{
    this.router.navigate(['/justlogin']);
  }
}
