import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "src/app/authentication.service";

// admin-auth.guard.ts
@Injectable({
    providedIn: 'root',
  })
  export class AdminAuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}
  
    canActivate(): boolean {
      if (this.authService.isAdmin()) {
        return true; // Allow navigation to the admin route
      } 
      else {
        this.router.navigate(['/user']); // Redirect to the user route if not admin
        return false;
      }
    }
  }
  