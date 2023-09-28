import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') form!: NgForm;
  error: undefined | string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.value.username.trim() !== '' && this.form.value.password.trim() !== '' && this.form.value.name.trim() !== ''
      && this.form.value.email.trim() !== '') {
      this.authService.register(this.form.value).subscribe(
        resp => {
          console.log(resp);
          this.error = undefined;
          this.router.navigate(['/login'])
        }, err => {
          console.log(err.error.message);
          this.error = err.error.message;
          this.router.navigate(['/login']);
        })
      this.error = undefined;
    } else {
      this.error = 'Tutti i campi sono obbligatori';
    }

  }
}
