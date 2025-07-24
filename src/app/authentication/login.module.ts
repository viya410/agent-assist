import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { JustloginComponent } from './login/justlogin.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    JustloginComponent
  ],
  imports: [
    CommonModule,
    NgModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
