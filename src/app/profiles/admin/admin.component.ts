import { Component,AfterViewInit } from '@angular/core';
import { Agent } from './agent.model';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  implements AfterViewInit{
 
  
  agents: Agent[] = [];
  selectedAgent: Agent = new Agent();
  isAdding = false;
  isEditing = false;

  constructor(public AgentService: AuthenticationService) {}

  ngOnInit() {
    this.agents = this.AgentService.getAllAgents();
  }
    // ...

    ngAfterViewInit() {
      // Call the openModal method in ngAfterViewInit
      this.openModal();
    }

  addAgent() {
    this.selectedAgent = new Agent();
    this.isAdding = true;
    
  }

  editAgent(Agent: Agent) {
    this.selectedAgent = {...Agent};
    this.isEditing = true;
  }

  saveAgent() {
    if (this.isAdding) {
      this.AgentService.addAgent(this.selectedAgent);
    } else if (this.isEditing) {
    this.AgentService.updateAgent(this.selectedAgent);
    
    }

    this.cancel();
  }

  cancel() {
    this.selectedAgent = new Agent();
    this.isAdding = false;
    this.isEditing = false;
  }

  deleteAgent(id:number) {
   this.AgentService.deleteAgent(id);
  }
  openModal() {
//    myModal.show();
  }
}
