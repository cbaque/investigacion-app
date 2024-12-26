import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-call-application-create',
  standalone: true,
  imports: [
    FormsModule,
    NzInputModule,
    CommonModule,
    ReactiveFormsModule,
    NzUploadModule,
    NzButtonModule,
    NzModalModule
  ],
  templateUrl: './callApplicationCreate.component.html',
  styleUrl: './callApplicationCreate.component.css',
})
export class CallApplicationCreateComponent { }
