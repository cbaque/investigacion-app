import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'app-proposal-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BreadcrumbComponent,
    NzPageHeaderModule,
    NzIconModule,
    NzButtonModule,
    NzStepsModule,
  ],
  templateUrl: './proposalCreate.component.html',
  styleUrl: './proposalCreate.component.css',
})
export class ProposalCreateComponent { 

  private router = inject(Router);
  public currentStep = 0;

  onBackProposalIndex() {
    this.router.navigate(["/dashboard/linkage/proposal"]);
  }

  onIndexChange(index: number): void {
    this.currentStep = index;
  }
}
