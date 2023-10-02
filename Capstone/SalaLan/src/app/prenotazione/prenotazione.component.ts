import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { PcService } from '../services/pc.service';
import { SaleService } from '../services/sale.service';
import { ISala } from '../interfaces/isala';
import { IPc } from '../interfaces/ipc';
import { PrenotazioneService } from '../services/prenotazione.service';
import { IPrenotazione } from '../interfaces/iprenotazione';
import { NgForm } from '@angular/forms';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.scss']
})
export class PrenotazioneComponent implements OnInit {
  sale: ISala[] = [];
  pcs: IPc[] = [];
  prenotazioni: IPrenotazione[] = [];
  per: any[] = [];
  prenotazioneCorrente: IPrenotazione = {};
  dataZone: boolean = false;
  data: Date = new Date();
  spazioZone: boolean = false;
  pcZone: boolean = false;
  salaZone: boolean = false;
  prenotaAltro: boolean = false;
  @ViewChild('f') dataForm!: NgForm;
  @ViewChild('z') pcForm!: NgForm;
  @ViewChild('y') salaForm!: NgForm;
  error: undefined | string;

  constructor(private authService: AuthService, private router: Router, private p: PcService,
    private s: SaleService, private u: PrenotazioneService) { }

  ngOnInit(): void {
    this.getByUsers();
    this.getAllSaleDisponibili();
    this.getAllPcDisponibili();
  }
  // wafdawfaw
  getPcName(per: any): string {
    if (per.pc) {
      return per.pc.nomeColore;
    }
    return 'Nessuna sala prenotata!'; // Se né PC né Sala sono presenti
  }
  getSalaName(per: any): string {
    if (per.sale) {
      return per.sale.nome;
    }
    return 'Nessun pc prenotato!'; // Se né PC né Sala sono presenti
  }

  logout() {
    this.authService.logout();
  }

  getByUsers() {
    this.u.getByUser().subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.prenotazioni = resp;
      }, err => {
        console.log(err.error.message);
        this.error = err.error.message;
      }
    );
  }

  getAllPc() {
    this.p.getAllPc().subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.pcs = resp;
      }, err => {
        console.log(err.error.message);
        this.error = err.error.message;
      }
    );
  }
  getAllSale() {
    this.s.getAllSale().subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.sale = resp;
      }, err => {
        console.log(err.error.message);
        this.error = err.error.message;
      }
    );
  }

  startPrenotazione() {
    this.dataZone = true;
  }

  selectDate() {
    this.spazioZone = true;
    this.dataZone = false;
    this.data = this.dataForm.value.dateStandard;
    this.addPrenotazione();
  }

  selectPc() {
    this.pcZone = true;
    this.salaZone = false;
  }

  selectSala() {
    this.salaZone = true;
    this.pcZone = false;
  }
  // POSTAZIONE PC
  selectPostazionePc() {
    this.spazioZone = false;
    this.prenotaAltro = true;
    const idP = this.pcForm.value.pc;
    this.u.prenotaPc(this.prenotazioneCorrente.idPrenotazione!, idP).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.prenotazioneCorrente = resp;
        this.getByUsers();
      }, err => {
        console.log(err.error.message);
        this.error = err.error.message;
      }
    );

  }
  // POSTAZIONE SALA
  selectPostazioneSala() {
    this.spazioZone = false;
    this.prenotaAltro = true;
    const idS = this.salaForm.value.sale;
    console.log(this.prenotazioneCorrente);

    this.u.prenotaSala(this.prenotazioneCorrente.idPrenotazione!, idS).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.prenotazioneCorrente = resp;
        this.getByUsers();
      }, err => {
        console.log(err.error.message);
        this.error = err.error.message;
      }
    );
  }

  addPrenotazione() {
    this.u.addPrenotazione(this.data).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.prenotazioneCorrente = resp;
      }, err => {
        console.log(err.error.message);
        this.error = err.error.message;
      }
    );
  }

  getAllSaleDisponibili() {
    this.s.findSalaDisponibili().subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.sale = resp;
      }, err => {
        console.log(err.error.message);
        this.error = err.error.message;
      }
    )
  }
  getAllPcDisponibili() {
    this.p.findPcDisponibili().subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.pcs = resp;
      }, err => {
        console.log(err.error.message);
        this.error = err.error.message;
      }
    )
  }
  deletePrenotazione(idPrenotazione: number) {
    this.u.deletePrenotazione(idPrenotazione).subscribe(
      () => {
        // La prenotazione è stata eliminata con successo
        // Ora aggiorna la lista di prenotazioni e le disponibilità di PC e sale
        this.getByUsers();
        this.getAllSaleDisponibili();
        this.getAllPcDisponibili();
      },
      (err) => {
        console.log(err);
        // Gestisci eventuali errori
      }
    );
  }



}