import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  logout() {
    this.authService.logout();
  }

}
