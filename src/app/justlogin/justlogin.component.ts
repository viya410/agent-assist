import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-justlogin',
  templateUrl: './justlogin.component.html',
  styleUrls: ['./justlogin.component.scss']
})
export class JustloginComponent {
constructor(private auth:AuthenticationService){}
  submitForm(form: any) {
    if (form.valid) {
      // Access the form data
      const formData = form.value;
      
      // Call your desired function with the form data
      this.auth.login(formData.username,formData.password);
    }
  }
  
}
