import { Component, OnInit } from '@angular/core';
import { DogDataService } from '../services/dog-data.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  dogs = this.dogDataService.dogsList;

  constructor(private dogDataService: DogDataService) {
  }

  ngOnInit() {
    this.dogDataService.getAllDogs();
  }

}
