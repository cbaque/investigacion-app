import { CommonModule } from '@angular/common';
import {  ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from '@app/app/interfaces/UserI';
import { AuthService } from '@services/auth/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    NzButtonModule,
  ],
  providers: [
  ],
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit { 
  currentYear: number = new Date().getFullYear();

  private formBuilder = inject(FormBuilder)
  public authSrv = inject(AuthService)
  private router = inject(Router)

  isLoading: boolean = false;

  authForm = this.formBuilder.group({
    email: [ 'cbaque@gmail.com', [Validators.required,Validators.email] ],
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
