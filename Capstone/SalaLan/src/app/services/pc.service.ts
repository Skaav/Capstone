import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IPc } from '../interfaces/ipc';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient, private usvc: AuthService) { }

  getAllPc() {
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.usvc.getAccesToken()
    );
    const apiUrl = 'http://localhost:8080/api/pc/all';
    return this.http.get<IPc[]>(apiUrl, { headers: this.headers })
  }

  findPcDisponibili() {
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.usvc.getAccesToken()
    );
    const apiUrl = 'http://localhost:8080/api/pc/allPcDisponibile/' + true;
    return this.http.get<IPc[]>(apiUrl, { headers: this.headers })
  }
}
