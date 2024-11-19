import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ModalConfirmService } from '@services/modalConfirm/modalConfirm.service';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './modalConfirm.component.html',
  styleUrl: './modalConfirm.component.css',
})
export class ModalConfirmComponent { 
  public confirmSrv = inject(ModalConfirmService);
  public isVisible = this.confirmSrv.currentModalConfirm();
  public title = this.confirmSrv.currentTitleModalConfirm();
  public message = this.confirmSrv.currentMessageModalConfirm();

  cancelar() {
    this.confirmSrv.setCloseModalConfirm();
  }

  confirmAction() {
    this.confirmSrv.confirmAction();
  }
}
