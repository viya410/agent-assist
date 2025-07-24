import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsignupComponent } from './authentication/signup/loginsignup.component';
import { JustloginComponent } from './authentication/login/justlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication/authentication.service';
import { ChatService } from './core/chat.service';
import { NavComponent } from './nav/nav.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  GoogleSigninButtonModule
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    LoginsignupComponent,
    HomepageComponent,
    JustloginComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    AuthenticationService, 
    ChatService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1063782161758-4da1fi2g2jru3m85lmrae151l6pss2cu.apps.googleusercontent.com' // Replace with your Google Client ID
            )
          }
        ],
        onError: (err) => console.error('Auth Error:', err)
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }