import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private isAuthenticated: boolean = false;
  constructor(private router: Router) {
    this.storeUsersData();
  }
  // Store users data in local storage
  private users = {
    "admin": [{ email: "example@gmail.com", phone: 1234567890, firstName: 'Jitendra', lastName: 'Thakur', username: 'jitendra789', password: 'jitendra789' },
    { email: "example@gmail.com", phone: 1234567890, firstName: 'Jay', lastName: 'Sana', username: 'jay234', password: 'jay234' }
    ],
    "agent": [
      { email: "example@gmail.com", phone: 1234567890, firstName: 'Sarah', lastName: 'Miller', username: 'sarah890', password: 'sarah890' },
      { email: "example@gmail.com", phone: 1234567890, firstName: 'Sunny', lastName: 'Mawani', username: 'sunny123', password: 'sunny123' },
      { email: "example@gmail.com", phone: 1234567890, firstName: 'Vishnu', lastName: 'Priya', username: 'vishnu456', password: 'vishnu456' },
    ]
  };
  storeUsersData(users = this.users): void {
    localStorage.setItem('usersData', JSON.stringify(users));
  }

  // Retrieve users data from local storage
  getUsersData(): any {
    const usersDataString = localStorage.getItem('usersData');
    if (usersDataString) {
      return JSON.parse(usersDataString);
    }
    return null;
  }

  // Update users data and store in local storage
  updateUsersData(updatedUsers: any): void {
    this.users = updatedUsers;
    this.storeUsersData();
  }



  login(username: any, password: any): void {
    let data = this.getUsersData();
    console.log(data)
    if (data.some((user: { username: string; }) => user.username.toLowerCase() === username) && data.some((user: { password: string; }) => user.password.toLowerCase() === password)) {
      this.isAuthenticated = true;
      this.router.navigate(['']);
      alert("i ;ove you rasna")
    }
    else {
      this.isAuthenticated = false;
      this.router.navigate(['/justlogin'])
    }
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  signup(form: any): void {
    const existingUsers = this.getUsersData();

    // Add the new user data to the existing data
    existingUsers["agent"].push(form);

    // Store updated users data back to local storage
    this.storeUsersData(existingUsers);
    this.router.navigate(['/justlogin'])

  }
}
