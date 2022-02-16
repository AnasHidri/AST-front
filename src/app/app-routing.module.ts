import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './helpers/auth-user.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomeUserComponent } from './pages/user/home-user/home-user.component';
import { ProfileUserComponent } from './pages/user/profile-user/profile-user.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  {
    path: 'user', component:HomeUserComponent, canActivate: [AuthUserGuard],
    children: [
      {path: 'profile', component:ProfileUserComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
