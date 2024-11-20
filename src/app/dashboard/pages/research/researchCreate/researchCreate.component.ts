import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'app-research-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    NzPageHeaderModule,
    NzStepsModule,
    NzAlertModule
  ],
  templateUrl: './researchCreate.component.html',
  styleUrl: './researchCreate.component.css',
})
export class ResearchCreateComponent { 

  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  public currentStep = 0;

  researchForm = this.formBuilder.group({
    code: [ '', [Validators.required] ],
    name: [ '', [ Validators.required] ],
    budget_1: [ '' ],
    budget_2: [ '' ],
    budget_3: [ '' ],
  });

  onBackInvestigation() {
    this.router.navigate(["/dashboard/investigation"]);
  }

  onIndexChange(index: number): void {
    this.currentStep = index;
  }

}




