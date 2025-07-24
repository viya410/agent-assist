import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from '@abacritt/angularx-social-login';

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
      "admin": [
        { email: "example@gmail.com", phone: 1234567890, firstName: 'Jitendra', lastName: 'Thakur', username: 'jitendra789', password: 'jitendra789' },
        { email: "example@gmail.com", phone: 1234567890, firstName: 'Jay', lastName: 'Sana', username: 'jay234', password: 'jay234' }
      ],
      "agent": [
        { email: "example@gmail.com", phone: 1234567890, firstName: 'Sarah', lastName: 'Miller', username: 'sarah890', password: 'sarah890' },
        { email: "example@gmail.com", phone: 1234567890, firstName: 'Sunny', lastName: 'Mawani', username: 'sunny123', password: 'sunny123' },
        { email: "example@gmail.com", phone: 1234567890, firstName: 'Vishnu', lastName: 'Priya', username: 'vishnu456', password: 'vishnu456' },
      ]
    };
    this.storeUsersData();
  }

  getAllAgents():any{
     const value = this.getUsersData(); 
    return (value['agent'])
  }
  addAgent(agent: any): void {
    const storedData = this.getUsersData();
  
    // Check if an agent with the same email already exists
    const isAgentExist = storedData['agent'].some((val: { email: any; }) => val.email === agent.email);
  
    if (!isAgentExist) {
      // If the agent doesn't exist, add it to the array
      storedData['agent'].push(agent);
      this.storeUsersData(storedData);
    } else {
      // If the agent already exists, show an alert or handle the error accordingly
      alert("User Already Exists!!");
    }
  
  }
  

updateAgent(agent:any):void{
    let value = this.getUsersData();
    const indexToUpdate = value['agent'].findIndex((val: { email: any; }) => val.email === agent.email);
    if (indexToUpdate !== -1) {
      value['agent'][indexToUpdate] = agent;
    }
    this.storeUsersData(value);
  }

  private storeUsersData(data?: any): void {
    localStorage.setItem('usersData', JSON.stringify(data || this.usersData));
  }

isAdmin():boolean{
return this.userRole=="admin";
}

isUser():boolean{
  return this.userRole=="agent";
}

  // Retrieve users data from local storage
  private getUsersData(): any {
    const usersDataString = localStorage.getItem('usersData');
    if (usersDataString) {
      return JSON.parse(usersDataString);
    }
    return null;
  }
  deleteAgent(index:number){
    let value = this.getUsersData();
    if (index >= 0 && index < value['agent'].length) {
      // Use splice to remove the element at the specified index
     value['agent'].splice(index, 1);
    }
    this.storeUsersData(value);
  }

  // Update users data and store in local storage
  private updateUsersData(updatedUsers: any): void {
    this.usersData = updatedUsers;
    this.storeUsersData();
  }

  login(username: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const data = this.getUsersData();
      this.username = username;

      if (data) {
        const isAdmin = !!data['admin'].find((user: any) =>
          user.username.toLowerCase() === username.toLowerCase());
        const isAgent = !!data['agent'].find((user: any) =>
          user.username.toLowerCase() === username.toLowerCase());
        
        if (isAdmin || isAgent) {
          const userCategory = isAdmin ? 'admin' : 'agent';
          const matchedUser = data[userCategory].find((user: any) =>
            user.username.toLowerCase() === username.toLowerCase() && user.password === password);
          
          if (matchedUser) {
            this.isAuthenticated = true;
            this.userRole = userCategory;
            this.router.navigate(userCategory === 'admin' ? ['/profiles/admin'] : ['/profiles/user']);
            resolve();
          } else {
            reject('Invalid username or password');
          }
        } else {
          reject('User does not exist');
        }
      } else {
        reject('User data not found');
      }
    });
  }

  handleGoogleLogin(user: SocialUser): Promise<void> {
    return new Promise((resolve, reject) => {
      const data = this.getUsersData();
      const existingUser = data['admin'].find((u: any) => u.email === user.email);
      
      if (existingUser) {
        // User already exists, just log them in
        this.isAuthenticated = true;
        this.username = existingUser.username;
        this.userRole = 'admin';
      } else {
        // New user, add them to the admin array
        const newUser = {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.email, // Using email as username for Google users
          password: 'google-auth', // Set a placeholder password
          phone: 0, // Set a default phone number
          photoUrl: user.photoUrl
        };
        data['admin'].push(newUser);
        this.storeUsersData(data);
        
        this.isAuthenticated = true;
        this.username = newUser.username;
        this.userRole = 'admin';
      }
      
      this.router.navigate(['/profiles/admin']); // Navigate to admin profile
      resolve();
    });
  }

  getUsername(): string {
    return this.username;
  }

  getUserrole(): string {
    return this.userRole;
  }

  getUser():any{
    const data = this.getUsersData();
    if (this.userRole === 'admin') {
      return data['admin'].find((user: any) => user.username === this.username);
    } else if (this.userRole === 'agent') {
      return data['agent'].find((user: any) => user.username === this.username);
    }
    return null;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  signup(form: any): void {
    console.log('form data received', form);
    const existingUsers = this.getUsersData();
    const userExists = existingUsers['admin'].some((user: any) =>
      user.username.toLowerCase() === form.username.toLowerCase()) ||
      existingUsers['agent'].some((user: any) =>
        user.username.toLowerCase() === form.username.toLowerCase());
    if (userExists) {
      alert('User already exists');
      this.router.navigate(['/justlogin']);
    }
    else {

      // Add the new user data to the existing data
      existingUsers["agent"].push(form);

      // Store updated users data back to local storage
      this.updateUsersData(existingUsers);
      console.log('Data', existingUsers);
      this.router.navigate(['/justlogin']);
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.username = '';
    this.userRole = '';
    this.router.navigate(['/justlogin']);
  }
}