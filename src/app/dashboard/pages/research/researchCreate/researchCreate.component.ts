import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

interface PresupuestoData {
  id: number,
  date: number;
  value: string;
}

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
    FormsModule,
    NzTableModule,
    NzDatePickerModule
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
  
  public presupuesto: PresupuestoData[] = [];
  editId: number | null = null;
  
  public members: UserDataI[] = [];
  editIdMember : number | null = null;

  researchForm = this.formBuilder.group({
    code: [ '', [Validators.required] ],
    name_project: [ '', [ Validators.required] ],
    faculty: [ '', [ Validators.required] ],
    rcu: [ '', [ Validators.required] ],
    duration: [ '', [ Validators.required] ],
    impact: [ '' ],
    status: [ 'E', [ Validators.required] ],
    date_ini: [ '' ],
    date_end: [ '' ],
    budgets : this.formBuilder.array([]),
    members: this.formBuilder.array([])
  });

  get presupuestoFormArray(): FormArray {
    return this.researchForm.get('budgets') as FormArray;
  }

  get memberFormArray(): FormArray {
    return this.researchForm.get('members') as FormArray;
  }

  onBackInvestigation() {
    this.router.navigate(["/dashboard/investigation"]);
  }

  onIndexChange(index: number): void {
    this.currentStep = index;
  }

  ngOnInit(): void {
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

  //#region PRESUPUESTO
  public addPresupuesto(): void {
    const dateIni = this.researchForm.get('date_ini')?.value;
    
    if (dateIni){

      const baseYear = new Date(dateIni).getFullYear();

      const nextYear = this.presupuestoFormArray.length === 0
      ? baseYear
      : baseYear + this.presupuestoFormArray.length;

      this.presupuestoFormArray.push(
        this.formBuilder.group({
          id: [this.presupuestoFormArray.length + 1],
          date: [nextYear],
          value: ['', Validators.required]
        })
      );
    
    } else {
      this.alertSrv.showError("Seleccione una fecha de inicio");
    }
  }

  startEdit(id: number): void {
    this.editId = id;
  }

  saveEdit(id: number): void {
    const control = this.presupuestoFormArray.at(id - 1);
    if (control) {
      console.log('Presupuesto actualizado:', control.value);
    }
    this.editId = null;
  }

  deletePresupuesto(index: number) {

    this.presupuestoFormArray.removeAt(index);
    this.recalculateIds();

  }

  private recalculateIds(): void {
    this.presupuestoFormArray.controls.forEach((control, i) => {
      control.get('id')?.setValue(i + 1);
    });
  }
  //#endregion

  //#region INTEGRANTES
  public addIntegrante(): void {
    this.memberFormArray.push(
      this.formBuilder.group(
        {
          id : [this.memberFormArray.length + 1],
          name: ['', Validators.required],
          dni: ['', Validators.required],
          departament: [''],
          email: ['', Validators.required]

        }
      )
    );
  }

  startEditMember(id: number): void {
    this.editIdMember = id;
  }

  saveEditMember(id: number): void {
    const control = this.memberFormArray.at(id - 1);
    if (control) {
      console.log('Integrante actualizado:', control.value);
    }
    this.editIdMember = null;
  }

  deleteMember(index: number) {

    this.memberFormArray.removeAt(index);
    this.recalculateIdsMembers();
  }

  private recalculateIdsMembers(): void {
    this.memberFormArray.controls.forEach((control, i) => {
      control.get('id')?.setValue(i + 1);
    });
  }
  //#endregion
}




