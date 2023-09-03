import { Component } from '@angular/core';
import { Agent } from '../admin/agent.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

public isEditing = false;
user=new Agent();

  toggleEdit(val:any) {

  }

  saveChanges() {
return 
    }

  
}
