import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

const routes: Routes = [
  { path: 'my-profile', component: UserProfileComponent }
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MemberRoutingModule { }
