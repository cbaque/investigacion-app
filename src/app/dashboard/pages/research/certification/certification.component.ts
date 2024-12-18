import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResearchDataI, ResearchI } from '@interfaces/ResearchI';
import { ResearchService } from '@services/research/research.service';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule,
    NzTableModule,
    NzToolTipModule,
    NzTagModule,
    NzModalModule
  ],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css',
})
export class CertificationComponent implements OnInit {
  private router = inject(Router);
  private researchSrv = inject(ResearchService);
  public Researchs: ResearchDataI[] = [];
  public loadingResearch: boolean = false;
  private modalService: NzModalService = inject(NzModalService);

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
 }
