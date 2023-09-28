import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ISala } from '../interfaces/isala';
import { Router } from '@angular/router';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-info-sale',
  templateUrl: './info-sale.component.html',
  styleUrls: ['./info-sale.component.scss']
})
export class InfoSaleComponent implements OnInit {
  sale: ISala[] = [];
  error: undefined | string;

  constructor(private authService: AuthService, private router: Router, private s: SaleService) { }

  ngOnInit(): void {
    this.getAllSale();
  }

  logout() {
    this.authService.logout();
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

}
