import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { SigninGoalsComponent } from './signin-goals/signin-goals.component';
import { SigninSuccessComponent } from './signin-success/signin-success.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'home', component: HomeComponent },
    { path: 'progress', component: ProgressComponent },
    { path:'signin-goals', component: SigninGoalsComponent },
    { path:'signin-success', component: SigninSuccessComponent}
];