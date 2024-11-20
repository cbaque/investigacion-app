import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule
  ],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css',
})
export class ResearchComponent { 
  private router = inject(Router)


  newInvestigation(): void {
    this.router.navigate(["/dashboard/investigation-new"]);
  }
}

