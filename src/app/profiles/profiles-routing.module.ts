import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthGuard } from './admin/admin-auth.guard';
import { UserAuthGuard } from './user/user-auth.guard';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [{
  path: '', component: ProfilesComponent,
  children:
    [
      {
        path: '', redirectTo: 'user', pathMatch: 'full'
      },
      {
        path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard]
      },
      {
        path: 'user', component: UserComponent, canActivate: [UserAuthGuard]
      },
      {
        path: 'chat', component: ChatComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
