import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from '@interfaces/UserI';
import { AuthService } from '@services/auth/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    NzButtonModule,
  ],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css'],
})
export class UnauthorizedComponent implements OnInit { 

  currentYear: number = new Date().getFullYear();
  private formBuilder = inject(FormBuilder)
  public authSrv = inject(AuthService)
  private router = inject(Router)

  isLoading: boolean = false;

  authForm = this.formBuilder.group({
    email: [ 'cbaque@controlg.com', [Validators.required,Validators.email] ],
    password: [ 'admin', Validators.required],
  });
  
  ngOnInit(): void {
    this.authSrv.removeCurrentUserLocalStorage();
  }

  get f() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.isLoading = true;
    this.authSrv.login(this.f.email.value, this.f.password.value)
    .subscribe( 
      ( res: UserI ) => {

        this.authSrv.setCurrentUserLocalStorage(res.data);
        this.authSrv.setCurrentUserValue(res.data);
        this.isLoading = false
        this.router.navigate(["/dashboard"]);
      }
      ,() => { this.isLoading = false }
    );
  }
  
}
