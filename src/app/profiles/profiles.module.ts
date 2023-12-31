import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './profiles.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfilesComponent,
    UserComponent,
    AdminComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    FormsModule
  ]
})
export class ProfilesModule { }
