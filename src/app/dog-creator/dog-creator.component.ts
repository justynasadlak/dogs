import { Component, OnInit } from '@angular/core';
import { DogDataService } from '../services/dog-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { Dog } from '../model/dog';

@Component({
  selector: 'app-dog-creator',
  templateUrl: './dog-creator.component.html',
  styleUrls: ['./dog-creator.component.scss']
})
export class DogCreatorComponent implements OnInit {
  dogForm = new FormGroup({
    name: new FormControl(''),
    breed: new FormControl(''),
    subbreed: new FormControl(''),
    owner: new FormControl('')
  });
  public DogDataService: any;

  dogURL = '';

  constructor(private dogDataService: DogDataService, private userDataService: UserDataService) {
    this.dogDataService.getAllDogs();
  }

  dogs = this.dogDataService.dogsList;
  users = this.userDataService.getAllUsers().map(u => u.name);

  onSubmit() {
    const dog = new Dog();
    dog.name = this.dogForm.value.name;
    dog.breed = this.dogForm.value.breed;
    dog.subbreed = this.dogForm.value.subbreed;
    dog.owner = this.dogForm.value.owner;
    dog.url = `https://dog.ceo/api/breed/${dog.breed}/images/random`;
    this.dogDataService.addDog(dog);

  }

  ngOnInit() {
  }

}
