import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { SidenavOverviewComponent } from './member/sidenav-overview/sidenav-overview.component';
import { DogCreatorComponent } from './dog-creator/dog-creator.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'my-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  // { path: 'my-profile', loadChildren: './member/member/member-routing.module#MemberRoutingModule', canActivate: [AuthGuard] },
  { path: 'sidenav', component: SidenavOverviewComponent, canActivate: [AuthGuard] },
  { path: 'dog-creator', component: DogCreatorComponent, canActivate: [AuthGuard] },
  { path: 'dogs-list', component: DogsListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
