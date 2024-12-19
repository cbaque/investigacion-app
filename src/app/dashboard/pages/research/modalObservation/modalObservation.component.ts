import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ResearchDataI } from '@interfaces/ResearchI';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-observation',
  standalone: true,
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzFormModule
  ],
  templateUrl: './modalObservation.component.html',
  styleUrl: './modalObservation.component.css',
})
export class ModalObservationComponent { 
  
  private formBuilder = inject(FormBuilder);
  
  data!: ResearchDataI;

  constructor(private modalRef: NzModalRef) {
    this.data = this.modalRef.getConfig().nzData.data;
  }

  observationForm = this.formBuilder.group({
    observation: [ '', [Validators.maxLength(520)] ]
  });


}
