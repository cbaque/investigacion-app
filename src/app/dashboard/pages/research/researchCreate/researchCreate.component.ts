import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UsersService } from '@services/users/users.service';
import { UserDataI, UsersI } from '@interfaces/UsersI';
import { ResearchService } from '@services/research/research.service';
import { ModalConfirmService } from '@services/modalConfirm/modalConfirm.service';
import { LoadingService } from '@services/loading/loading.service';
import { AlertsService } from '@services/notification/alerts.service';
import { ResearchI } from '@app/app/interfaces/ResearchI';

@Component({
  selector: 'app-research-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    NzPageHeaderModule,
    NzStepsModule,
    NzAlertModule,
    NzSliderModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    FormsModule
  ],
  templateUrl: './researchCreate.component.html',
  styleUrl: './researchCreate.component.css',
})
export class ResearchCreateComponent implements OnInit { 

  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private userSrv = inject(UsersService);
  private researchSrv = inject(ResearchService);
  public confirmSrv = inject(ModalConfirmService);
  private loadingSrv = inject(LoadingService);
  private alertSrv = inject(AlertsService);

  public currentStep = 0;
  public members: UserDataI[] | null = null;

  researchForm = this.formBuilder.group({
    code: [ '', [Validators.required] ],
    name_project: [ '', [ Validators.required] ],
    faculty: [ '', [ Validators.required] ],
    rcu: [ '', [ Validators.required] ],
    duration: [ '', [ Validators.required] ],
    advance: [ 0, [ Validators.required]  ],
    impact: [ '' ],
    members: [ [] ],
    observation: [ '' ],
    budget_one: [ '' ],
    budget_two: [ '' ],
    budget_three: [ '' ],
    status: [ 'E', [ Validators.required] ],
  });

  onBackInvestigation() {
    this.router.navigate(["/dashboard/investigation"]);
  }

  onIndexChange(index: number): void {
    this.currentStep = index;
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  public loadMembers() {
    this.userSrv.get()
    .subscribe(  
      (res: UsersI) => { 
        const users = res.data;
        this.members =  users.filter(user => user.roles.some(role => role.name === 'researcher'));
      }
    )
  }


  get advanceControl(): FormControl {
    return this.researchForm.get('advance') as FormControl;
  }

  submitNewResearch() {
    this.confirmSrv.setOpenModalConfirm('¿Crear Archivo de Investigación?', '¿Está seguro crear el siguiente arhivo?', ()=> {

      const data = this.researchForm.value

      this.confirmSrv.setCloseModalConfirm();
      this.loadingSrv.setOpenLoading();

      this.researchSrv.post(data)
      .subscribe(
        (res: ResearchI) => {
          this.alertSrv.showSuccess(res.message || "");
          this.loadingSrv.setCloseLoading();
          this.onBackInvestigation();
        },
        () => this.loadingSrv.setCloseLoading()

      )

    });
  }

}




