import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ISala } from '../interfaces/isala';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient, private usvc: AuthService) { }

  getAllSale() {
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.usvc.getAccesToken()
    );
    const apiUrl = 'http://localhost:8080/api/sala/all';
    return this.http.get<ISala[]>(apiUrl, { headers: this.headers })
  }

  findSalaDisponibili() {
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.usvc.getAccesToken()
    );
    const apiUrl = 'http://localhost:8080/api/sala/allSalaDisponibile/' + true;
    return this.http.get<ISala[]>(apiUrl, { headers: this.headers })
  }
}
