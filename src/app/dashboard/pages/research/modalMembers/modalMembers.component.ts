import { Component, Input, OnInit } from '@angular/core';
import { ResearchDataI } from '@interfaces/ResearchI';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-modal-members',
  standalone: true,
  imports: [
    NzTableModule,
    NzIconModule,
    NzToolTipModule,
  ],
  templateUrl: './modalMembers.component.html',
  styleUrl: './modalMembers.component.css',
})
export class ModalMembersComponent implements OnInit { 
  data!: ResearchDataI;

  constructor(private modalRef: NzModalRef) {
    this.data = this.modalRef.getConfig().nzData.data;

  }

  ngOnInit(): void {

    console.log(this.data)
  }


}
