import { Component,OnInit } from '@angular/core';
import { Agent } from '../admin/agent.model';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
constructor(private auth:AuthenticationService){}
public isEditing = false;
user=new Agent();
ngOnInit(): void {
this.user = this.auth.getUser();}
  toggleEdit(val:any) {
    if (this.isEditing) {
      // Save changes if currently in edit mode
      this.saveChanges();
    }

    // Toggle edit mode for the specified field
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    console.log('Changes saved:', this.user);

    // After saving the changes, exit edit mode
    this.isEditing = false;
    }

  
}
