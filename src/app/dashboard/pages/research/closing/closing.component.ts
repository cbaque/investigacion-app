import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResearchClosingService } from '@services/research/research-closing.service';
import { ResearchDataI, ResearchI } from '@interfaces/ResearchI';
import { ResearchService } from '@services/research/research.service';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AlertsService } from '@services/notification/alerts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-closing',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule,
    NzTableModule,
    NzToolTipModule,
    NzTagModule,
    NzModalModule,
    NzSelectModule,
    FormsModule,
  ],
  templateUrl: './closing.component.html',
  styleUrl: './closing.component.css',
})
export class ClosingComponent implements OnInit { 
  private router = inject(Router);
  private researchSrv = inject(ResearchService);
  private researchClosingSrv = inject(ResearchClosingService);
  public Researchs: ResearchDataI[] = [];
  public loadingResearch: boolean = false;
  private modalService: NzModalService = inject(NzModalService);
  editId : number | null = null;
    private alertSrv = inject(AlertsService);

  ngOnInit(): void {
    this.loadResearchs();
  }

  public loadResearchs() {
    this.loadingResearch = true;
    this.researchSrv.get()
    .subscribe(  
      (res: ResearchI) => { 
        this.Researchs = res.data
        this.loadingResearch = false
      }
      ,() => { this.loadingResearch = false }
    )
  }

  startEdit(id: number) :void {
    this.editId = id
  }

  saveEdit(id: number, status: string): void {
    this.loadingResearch = true;
    this.researchClosingSrv.update({status: status}, id)
    .subscribe(  
      (res: ResearchI) => { 
        this.alertSrv.showSuccess(res.message || "");

        this.loadResearchs();
        this.editId = null;
      }
      ,() => { this.loadingResearch = false }
    )

  }
}
