import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [{ path: '', component: ProfilesComponent ,
children:
[
  {
    path: '', redirectTo:'user', pathMatch: 'full'
  },
  {
    path:"user", component: UserComponent
  },
  {
    path:'admin', component: AdminComponent
  },
  {
    path: 'chat', component: ChatComponent
  }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
