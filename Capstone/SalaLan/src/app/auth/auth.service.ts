import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterData } from '../interfaces/iregister-data';
import { ILoginData } from '../interfaces/ilogin-data';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from 'src/app/environment/environment.development';
import { IAuthData } from '../interfaces/iauth-data';
import { IUser } from '../interfaces/iuser';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  jwtHelper: JwtHelperService = new JwtHelperService();
  private authSubject = new BehaviorSubject<null | Object>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((data: any) => Boolean(data)));


  constructor(private http: HttpClient, private router: Router) { this.isAuth(); }

  register(user: IRegisterData) {
    return this.http.post(environment.urlRegister, user);
  }

  login(user: ILoginData) {
    return this.http.post<IAuthData>(environment.urlLogin, user)
      .pipe(tap((data: any) => this.authSubject.next(data)));
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    console.log('LogOut Effettuato');
    this.router.navigate(['/login']);
  }
  //serve per visualizzare sempre lo usurname dell'utente loggato
  getUsername(): string {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      console.log(userData.username);
      return userData.username;
    } else {
      return '';
    }
  }

  getAccesToken(): string {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      return userData.accessToken;
    } else {
      return '';
    }
  }

  isAuth() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return;
    }
    const user = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      console.log(user.accessToken);
      this.router.navigate(['/login']);
      localStorage.clear();
      return;
    } else {
      this.authSubject.next(user);
      this.router.navigate(['/home']);
      return;
    }
  }

}
