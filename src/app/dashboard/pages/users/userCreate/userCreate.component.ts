import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStepsModule } from 'ng-zorro-antd/steps';

import { RoleService } from '@services/roles/role.service';
import { DepartamentDataI, DepartamentI } from '@interfaces/DepartamentI';
import { RoleDataI, RoleI } from '@interfaces/RoleI';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { DepartamentService } from '@services/departament/departament.service';
import { ModalConfirmService } from '@services/modalConfirm/modalConfirm.service';
import { UsersService } from '@services/users/users.service';
import { LoadingService } from '@app/app/services/loading/loading.service';
import { UsersI } from '@interfaces/UsersI';
import { AlertsService } from '@services/notification/alerts.service';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    BreadcrumbComponent,
    NzPageHeaderModule,
    NzAffixModule,
    NzDividerModule,
    NzStepsModule,
    NzIconModule,
  ],
  templateUrl: './userCreate.component.html'
})
export class UserCreateComponent implements OnInit { 
  private router = inject(Router)
  private roleSrv = inject(RoleService)
  private departamentSrv = inject(DepartamentService)
  private formBuilder = inject(FormBuilder)
  public confirmSrv = inject(ModalConfirmService);
  private userSrv = inject(UsersService);
  private loadingSrv = inject(LoadingService);
  private alertSrv = inject(AlertsService);

  public currentStep = 0;
  public roles: RoleI[] | null = this.roleSrv.currentRoles();
  public departaments: DepartamentI[] | null = this.departamentSrv.currentDepartament();

  userForm = this.formBuilder.group({
    name: [ '', [Validators.required] ],
    email: [ '', [ Validators.required, Validators.email] ],
    password: [ '', [ Validators.required] ],
    role: [ null, [ Validators.required] ],
    position: [ '', [ Validators.required] ],
    departament: [ null, [ Validators.required] ],
  });


  onBackusers() {
    this.router.navigate(["/dashboard/users"]);
  }

  onIndexChange(index: number): void {
    this.currentStep = index;
  }

  ngOnInit(): void {
    if (this.roles?.length == 0 || !this.roles) {
      this.loadRoles();
    }

    if (this.departaments?.length == 0 || !this.departaments) {
      this.loadDepartaments();
    }
  }

  private loadRoles() {
    this.roleSrv.get()
    .subscribe(  
      (res: RoleDataI) => { 
        this.roleSrv.setCurrentRolesValue(res.data);
        this.roles = res.data;
        localStorage.setItem('sigroles', JSON.stringify(res.data));
      }
    ) 
  }

  private loadDepartaments() {
    this.departamentSrv.get()
    .subscribe(  
      (res: DepartamentDataI) => { 
        this.departamentSrv.setCurrentDepartamentsValue(res.data);
        this.departaments = res.data;
        localStorage.setItem('sigdepartaments', JSON.stringify(res.data));
      }
    ) 
  }

  onSubmit() {  
    this.confirmSrv.setOpenModalConfirm('¿Crear Usuario?', '¿Está seguro crear el siguiente usuario?', ()=> {

      const userData = {
        ...this.userForm.value,
        role: Number(this.userForm.value.role) || null,
        departament : Number(this.userForm.value.departament) || null
      };

      this.confirmSrv.setCloseModalConfirm();
      this.loadingSrv.setOpenLoading();

      this.userSrv.post(userData)
      .subscribe(
        (res: UsersI) => {
          this.alertSrv.showSuccess(res.message || "");
          this.loadingSrv.setCloseLoading();
          this.onBackusers();
        },
        () => this.loadingSrv.setCloseLoading()

      )

    });
  }

}
