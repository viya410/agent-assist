import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private usersData: any;
  private username: string = '';
  private userRole: string = '';

  constructor(private router: Router) {
    this.usersData = this.getUsersData() || {
      "admin": [{ email: "example@gmail.com", phone: 1234567890, firstName: 'Jitendra', lastName: 'Thakur', username: 'jitendra789', password: 'jitendra789' },
      { email: "example@gmail.com", phone: 1234567890, firstName: 'Jay', lastName: 'Sana', username: 'jay234', password: 'jay234' }
      ],
      "agent": [
        { email: "example@gmail.com", phone: 1234567890, firstName: 'Sarah', lastName: 'Miller', username: 'sarah890', password: 'sarah890' },
        { email: "example@gmail.com", phone: 1234567890, firstName: 'Sunny', lastName: 'Mawani', username: 'sunny123', password: 'sunny123' },
        { email: "example@gmail.com", phone: 1234567890, firstName: 'Vishnu', lastName: 'Priya', username: 'vishnu456', password: 'vishnu456' },
      ]
    };
    }

    private storeUsersData(): void {
    localStorage.setItem('user', JSON.stringify(this.usersData));
  }

  // Retrieve users data from local storage
  private getUsersData(): any {
    const usersDataString = localStorage.getItem('usersData');
    if (usersDataString) {
      return JSON.parse(usersDataString);
    }
    return null;
  }

  // Update users data and store in local storage
  private updateUsersData(updatedUsers: any): void {
    this.usersData = updatedUsers;
    this.storeUsersData();
  }

  login(username: string, password: string): void {
    const data = this.getUsersData();
    console.log(data)
    this.username = username;

    if (data) {
      const isAdmin = !!data['admin'].find((user: any) =>
        user.username.toLowerCase() === username.toLowerCase());
      const isAgent = !!data['agent'].find((user: any) =>
        user.username.toLowerCase() === username.toLowerCase());
      if (isAdmin || isAgent) {
        const userCategory = isAdmin ? 'admin' : 'agent';

        const matchedUser = data[userCategory].find((user: any) =>
          user.username.toLowerCase() === username.toLowerCase()
          && user.password.toLowerCase() === password.toLowerCase());
        if (matchedUser) {
          this.isAuthenticated = true;
          this.userRole= userCategory;
          if(isAdmin){
            this.router.navigate(['/profiles/admin']);
          }
          else{
            this.router.navigate(['/profiles/user']);
          }
          alert("matched!");
        }
        else {
          this.isAuthenticated = false;
          this.router.navigate(['/justlogin']);
          alert('wrong username or password')
        }
      }
      else {
        this.isAuthenticated = false;
        this.router.navigate(['/justlogin'])
        alert('user does not exist')
      }
    }
    else {
      this.isAuthenticated = false;
      alert("not exist");
    }
  }

  getUsername(): string{
    return this.username;
  }

getUserrole(): string{
  return this.userRole;
}

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  signup(form: any): void {
    console.log('form data received', form);
    const existingUsers = this.getUsersData();
    const userExists = existingUsers['admin'].some((user:any)=>
    user.username.toLowerCase()===form.username.toLowerCase()) ||
    existingUsers['agent'].some((user:any)=>
    user.username.toLowerCase()===form.username.toLowerCase());
    if(userExists){
      alert('User already exists');
      this.router.navigate(['/justlogin']);
    }
    else{

    // Add the new user data to the existing data
    existingUsers["agent"].push(form);

    // Store updated users data back to local storage
    this.updateUsersData(existingUsers);
    console.log('Data', existingUsers);
    this.router.navigate(['/justlogin']);
  }
}
}
