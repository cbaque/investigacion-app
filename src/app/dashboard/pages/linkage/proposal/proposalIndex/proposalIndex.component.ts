import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProposalI } from '@app/app/interfaces/ProposalI';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-proposal-index',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule,
    NzTableModule,
    NzToolTipModule
  ],
  templateUrl: './proposalIndex.component.html',
  styleUrl: './proposalIndex.component.css',
})
export class ProposalIndexComponent { 
  public proposalInfo: ProposalI[] = [];
  public loadingProposal: boolean = false;
  private router = inject(Router);

  newProposal() : void {
    this.router.navigate(["/dashboard/linkage/proposal-new"]);
  }
}
