import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CallApplicationI } from '@interfaces/CallApplicationI';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { CallApplicationCreateComponent } from '../callApplicationCreate/callApplicationCreate.component';

@Component({
  selector: 'app-call-application-index',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule,
    NzTableModule,
    NzToolTipModule,
    NzModalModule
  ],
  templateUrl: './callApplicationIndex.component.html',
  styleUrl: './callApplicationIndex.component.css',
})
export class CallApplicationIndexComponent { 

  public CallApplications: CallApplicationI[] = [];
  public loadingCallApplication: boolean = false;
  private modalService: NzModalService = inject(NzModalService);

  createCallApp() {
    this.modalService.create({
      nzContent: CallApplicationCreateComponent
    })
  }

}
