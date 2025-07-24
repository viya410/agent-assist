import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-justlogin',
  templateUrl: './justlogin.component.html',
  styleUrls: ['./justlogin.component.scss']
})
export class JustloginComponent implements OnInit {
  errorMessage: string = '';
  submitted: boolean = false;
  user: SocialUser | null = null;

  constructor(
    private auth: AuthenticationService,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        this.auth.handleGoogleLogin(user).then(() => {
          // Navigation is now handled in the AuthenticationService
        }).catch((error) => {
          console.error('Google login error:', error);
          this.errorMessage = 'Failed to login with Google. Please try again.';
        });
      }
    });
  }

  submitForm(form: any) {
    this.submitted = true;
    if (form.valid) {
      const formData = form.value;
      this.auth.login(formData.username, formData.password).then(() => {
        // Navigation is now handled in the AuthenticationService
      }).catch((error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Invalid username or password. Please try again.';
      });
    }
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
}