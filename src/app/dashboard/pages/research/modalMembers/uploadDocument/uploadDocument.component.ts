import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResearchUploadDocService } from '@services/research/research-upload-doc.service';
import { Member, ResearchDataI, ResearchI } from '@interfaces/ResearchI';
import { SideDocumentService } from '@services/research/sideDocument.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NZ_DRAWER_DATA, NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { LoadingService } from '@services/loading/loading.service';
import { AlertsService } from '@services/notification/alerts.service';

@Component({
  selector: 'app-upload-document',
  standalone: true,
  imports: [
    CommonModule,
    NzDrawerModule,
    NzIconModule,
    NzDividerModule,
    RouterModule,
    NzUploadModule,
    NzButtonModule
  ],
  templateUrl: './uploadDocument.component.html',
})
export class UploadDocumentComponent { 

  public sideDocSrv = inject(SideDocumentService);
  public uploadDocSrv = inject(ResearchUploadDocService);
    private loadingSrv = inject(LoadingService);
    private alertSrv = inject(AlertsService);

  nzData: { value: Member } = inject(NZ_DRAWER_DATA);
  fileList: NzUploadFile[] = [];


  constructor() {
    console.log(this.nzData)
  }

  close(): void {
    this.sideDocSrv.setCloseSideDoc();
  }

  handleRemove = (event: NzUploadFile): boolean => {
    const file = event as unknown as NzUploadFile;
    this.fileList = this.fileList.filter(item => item.uid !== file.uid);
    return true;
  };

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = [...this.fileList, file];    
    return false;
  };

  uploadFiles(): void { 

    this.loadingSrv.setOpenLoading();

    const formData = new FormData();
    this.fileList.forEach((file) => {
      formData.append('files[]', file as any);
    });

    this.uploadDocSrv.post(formData)
    .subscribe(
      (res: ResearchI) => {
        this.alertSrv.showSuccess(res.message || "");
        this.loadingSrv.setCloseLoading();
      },
      () => this.loadingSrv.setCloseLoading()

    )
  }


}
