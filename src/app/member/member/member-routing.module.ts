import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { DogCreatorComponent } from '../../dog-creator/dog-creator.component';
import { DogsListComponent } from '../../dogs-list/dogs-list.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';

const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'dog-creator', component: DogCreatorComponent },
  { path: 'dogs-list', component: DogsListComponent }
];

@NgModule({
  declarations: [UserProfileComponent, DogCreatorComponent, DogsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class MemberRoutingModule {
}
