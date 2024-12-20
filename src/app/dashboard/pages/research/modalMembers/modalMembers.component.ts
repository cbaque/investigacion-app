import { Component, inject, Input, OnInit } from '@angular/core';
import { Member, ResearchDataI } from '@interfaces/ResearchI';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { UploadDocumentComponent } from './uploadDocument/uploadDocument.component';
import { SideDocumentService } from '@services/research/sideDocument.service';
import { NzDrawerModule, NzDrawerService } from 'ng-zorro-antd/drawer';
import { UserDataI } from '@interfaces/UsersI';

@Component({
  selector: 'app-modal-members',
  standalone: true,
  imports: [
    NzTableModule,
    NzIconModule,
    NzToolTipModule,
    NzDrawerModule
  ],
  templateUrl: './modalMembers.component.html',
  styleUrl: './modalMembers.component.css',
})
export class ModalMembersComponent implements OnInit { 
  data!: ResearchDataI;
  public sideDocSrv = inject(SideDocumentService);
  public drawerSrv = inject(NzDrawerService);

  constructor(private modalRef: NzModalRef) {
    this.data = this.modalRef.getConfig().nzData.data;

  }

  ngOnInit(): void {
    console.log(this.data)
  }

  // openUploadDocument() : void {
  //   this.sideDocSrv.setOpenSideDoc();
  // }

  openUploadDocument(member: Member) : void {

    const drawerRef = this.drawerSrv.create<UploadDocumentComponent, { value: Member }, Member>({
      nzTitle: 'Carga de Documentos',
      nzContent: UploadDocumentComponent,
      nzData: {
        value: member
      }
    });

    // drawerRef.afterOpen.subscribe(() => {
    //   console.log('Drawer(Component) abierto');
    // });
  
    // drawerRef.afterClose.subscribe((result) => {
    //   console.log('Drawer(Component) cerrado', result);
    // });

    
  }


}
