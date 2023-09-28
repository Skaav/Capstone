import { Component, OnInit } from '@angular/core';
import { IPc } from '../interfaces/ipc';
import { PcService } from '../services/pc.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-pc',
  templateUrl: './info-pc.component.html',
  styleUrls: ['./info-pc.component.scss']
})
export class InfoPcComponent implements OnInit {
  pcs: IPc[] = [];
  error: undefined | string;

  constructor(private authService: AuthService, private router: Router, private p: PcService) { }

  ngOnInit(): void {
    this.getAllPc();
  }

  logout() {
    this.authService.logout();
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

}
