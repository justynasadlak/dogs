import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { SidenavOverviewComponent } from './member/sidenav-overview/sidenav-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sidenav', component: SidenavOverviewComponent, canActivate: [AuthGuard] },
  {
    path: 'my-profile',
    loadChildren: './member/member/member-routing.module#MemberRoutingModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
