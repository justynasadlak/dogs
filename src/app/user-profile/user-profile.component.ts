import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { DogDataService } from '../services/dog-data.service';
import { Dog } from '../model/dog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  private user: User;
  private userDogs: Dog[];
  dogs = [];

  constructor(private userDataService: UserDataService, private router: Router, private dogDataService: DogDataService) {
  }

  ngOnInit() {
    this.user = this.userDataService.getUserData();
    this.dogDataService.getUserDogs(this.user.name).subscribe((data: Dog[]) => {
      this.userDogs = data;
    });
  }

  logout() {
    this.userDataService.logout().subscribe(data => this.router.navigate(['login']));
  }


}
