import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "src/app/authentication.service";

// user-auth.guard.ts
@Injectable({
    providedIn: 'root',
  })
  export class UserAuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}
  
    canActivate(): boolean {
      if (this.authService.isUser()) {
        return true; // Allow navigation to the user route
      } else {
        this.router.navigate(['/admin']); // Redirect to the admin route if not a user
        return false;
      }
    }
  }
  