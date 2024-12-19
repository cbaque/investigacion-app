import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ResearchAdvanceService } from '@services/research/research-advance.service';
import { ResearchDataI, ResearchI } from '@interfaces/ResearchI';
import { ResearchService } from '@services/research/research.service';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AlertsService } from '@services/notification/alerts.service';
import { ModalObservationComponent } from '../modalObservation/modalObservation.component';

@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule,
    NzTableModule,
    NzToolTipModule,
    NzTagModule,
    NzModalModule,
    NzProgressModule,
    NzSliderModule,
    FormsModule,
  ],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.css',
})
export class AdvancedComponent implements OnInit { 

  private router = inject(Router);
  private researchSrv = inject(ResearchService);
  private researchAdvanceSrv = inject(ResearchAdvanceService);
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

  saveEdit(id: number, e: any): void {
    this.loadingResearch = true;
    this.researchAdvanceSrv.update({advance: e}, id)
    .subscribe(  
      (res: ResearchI) => { 
        this.alertSrv.showSuccess(res.message || "");

        this.loadResearchs();
        this.editId = null;
      }
      ,() => { this.loadingResearch = false }
    )

  }

  showAddObservation(data: ResearchDataI) {

        this.modalService.create({
          nzContent: ModalObservationComponent,
          nzData: { data }
        })

  }
}
