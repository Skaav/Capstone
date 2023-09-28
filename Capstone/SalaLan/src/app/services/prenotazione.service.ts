import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IPrenotazione } from '../interfaces/iprenotazione';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient, private usvc: AuthService) { }
  getByUser() {
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.usvc.getAccesToken()
    );
    const apiUrl = 'http://localhost:8080/api/prenotazione/byuser/' + this.usvc.getUsername();
    return this.http.get<IPrenotazione[]>(apiUrl, { headers: this.headers })
  }

  addPrenotazione(data: Date) {
    console.log(data);

    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.usvc.getAccesToken()
    );
    const apiUrl = 'http://localhost:8080/api/prenotazione/post/' + this.usvc.getUsername() + '/' + data;
    return this.http.post<IPrenotazione>(apiUrl, {}, { headers: this.headers })
  }

  prenotaPc(idPrenota: number, idPc: number) {
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.usvc.getAccesToken()
    );
    const apiUrl = 'http://localhost:8080/api/prenotazione/pc/' + idPrenota + '/' + idPc;
    return this.http.put(apiUrl, {}, { headers: this.headers })
  }

  prenotaSala(idPrenota: number, idSala: number) {
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.usvc.getAccesToken()
    );
    const apiUrl = 'http://localhost:8080/api/prenotazione/sala/' + idPrenota + '/' + idSala;
    return this.http.put(apiUrl, {}, { headers: this.headers })
  }


}
