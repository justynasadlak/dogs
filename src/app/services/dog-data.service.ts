import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../model/dog';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DogDataService {
  URL = 'https://dog.ceo/api/breeds/list/all';
  dogsList = [];
  dogs = [];

  constructor(private http: HttpClient) {
  }

  getAllDogs() {
    this.http.get(this.URL).subscribe((res: { message }) => {
      Object.keys(res.message).forEach(dog => this.dogsList.push(dog));
    });
  }

  getUserDogs(userName: string): Observable<Dog[]> {
    return of(JSON.parse(localStorage.getItem('dogs')).filter(dog => dog.owner === userName));

  }

  addDog(dog: Dog): Observable<Dog> {
    this.dogs.push(dog);
    localStorage.setItem('dogs', JSON.stringify(this.dogs));
    return of(dog);
  }

}
