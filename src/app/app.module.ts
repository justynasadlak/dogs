import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SidenavOverviewComponent } from './member/sidenav-overview/sidenav-overview.component';
import { DogCreatorComponent } from './dog-creator/dog-creator.component';
import { HttpClientModule } from '@angular/common/http';
import { DogsListComponent } from './dogs-list/dogs-list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, UserProfileComponent, SidenavOverviewComponent, DogCreatorComponent, DogsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
