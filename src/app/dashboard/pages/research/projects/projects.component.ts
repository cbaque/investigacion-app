import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ResearchService } from '@services/research/research.service';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { ResearchDataI, ResearchI } from '@interfaces/ResearchI';
import { ModalMembersComponent } from '../modalMembers/modalMembers.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule,
    NzTableModule,
    NzToolTipModule,
    NzTagModule,
    NzModalModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit{ 
  private router = inject(Router);
  private researchSrv = inject(ResearchService);
  public Researchs: ResearchDataI[] = [];
  public loadingResearch: boolean = false;
  private modalService: NzModalService = inject(NzModalService);

  newInvestigation(): void {
    this.router.navigate(["/dashboard/investigation-new"]);
  }

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

  toggleExpand(data: any) {
    console.log(data)
    data.expanded = !data.expanded;
  }

  showIntegrantes(data: ResearchDataI) {

    this.modalService.create({
      nzContent: ModalMembersComponent,
      nzData: { data }
    })

  }
}
