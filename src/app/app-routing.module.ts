import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JustloginComponent } from './justlogin/justlogin.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './profiles/admin/admin.component';
import { UserComponent } from './profiles/user/user.component';

const routes: Routes = [
  {
    path:"",component:HomepageComponent
  },
  {path:"signup",component:LoginsignupComponent},
  {
  path:'justlogin',component:JustloginComponent
},
  { path: 'profiles', loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
