import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { ModeData, ModeI } from '@interfaces/ModeI';
import { ModesService } from '@services/modes/modes.service';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-provision',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    ReactiveFormsModule,
    NzPageHeaderModule,
    NzStepsModule,
    NzButtonModule,
    NzSelectModule,
    NzIconModule,
    NzDatePickerModule,
    FormsModule
  ],
  templateUrl: './provision.component.html',
  styleUrl: './provision.component.css',
})
export class ProvisionComponent implements OnInit { 

  private router = inject(Router)
  public modeSrv = inject(ModesService);
  private formBuilder = inject(FormBuilder)

  public currentStep = 0;
  public modes: ModeI[] | null = this.modeSrv.currentModes();

  provisionForm = this.formBuilder.group({
    mode: [ '', [Validators.required] ],
    name: [ '', [Validators.required] ],
    description: [ '' ],
    antecedent: [ '' ],
    dateIni: [ '' ],
  });

  date = null;


  ngOnInit(): void {
    
    if (this.modes?.length == 0 || !this.modes) {
      this.loadModes();
    }

  }

  get f() {
    return this.provisionForm.controls;
  }

  private loadModes() {
    this.modeSrv.get()
    .subscribe(  
      (res: ModeData) => { 
        this.modeSrv.setCurrentModesValue(res.data);
        this.modes = res.data;
        localStorage.setItem('sigesmodes', JSON.stringify(res.data));
      }
    ) 
  }
  
  onBackHome() {
    this.router.navigate(["/dashboard"]);
  }

  onIndexChange(index: number): void {
    this.currentStep = index;
  }

}
