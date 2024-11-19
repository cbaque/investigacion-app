import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { UserDataI, UsersI } from '@interfaces/UsersI';
import { UsersService } from '@services/users/users.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { UserCreateComponent } from '../userCreate/userCreate.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    BreadcrumbComponent,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzModalModule,
    UserCreateComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent  implements OnInit { 
  private userSrv = inject(UsersService)
  public Users: UserDataI[] = [];
  public loadingUsers: boolean = false;
  private modalSrv = inject(NzModalService);
  private router = inject(Router)

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers() {
    this.loadingUsers = true;
    this.userSrv.get()
    .subscribe(  
      (res: UsersI) => { 
        this.Users = res.data
        this.loadingUsers = false
      }
      ,() => { this.loadingUsers = false }
    )
  }

  newUserModal() : void {
    this.router.navigate(["/dashboard/users-new"]);
  }

  selectRow(data: UserDataI) {

  }

}
