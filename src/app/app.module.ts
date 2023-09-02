import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { JustloginComponent } from './justlogin/justlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginsignupComponent,
    JustloginComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthenticationService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
