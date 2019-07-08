import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of, throwError } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private users: User[] = [];
  private currentUser: User;

  register(user: User): Observable<User> {
    this.users.push(user);
    localStorage.setItem('member-data', JSON.stringify(this.users));
    return of(user).pipe(delay(2000));
  }

  login(email: string, password: string): Observable<User> {
    this.currentUser = JSON.parse(localStorage.getItem('member-data')).find(user => user.email === email && user.password === password)
    return of(this.currentUser).pipe(
      () => !this.currentUser ? throwError('This is an error!') : of(this.currentUser),
      delay(1000)
    );
  }

  logout(): Observable<User> {
    this.currentUser = null;
    return of(this.currentUser).pipe(delay(1000));
  }

  getUserData() {
    return this.currentUser;
  }

  getAllUsers() {
    return JSON.parse(localStorage.getItem('member-data'));
  }

}
