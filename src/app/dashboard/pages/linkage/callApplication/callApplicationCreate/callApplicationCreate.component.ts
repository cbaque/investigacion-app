import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-call-application-create',
  standalone: true,
  imports: [
    FormsModule,
    NzInputModule,
    CommonModule,
    ReactiveFormsModule,
    NzUploadModule
  ],
  templateUrl: './callApplicationCreate.component.html',
  styleUrl: './callApplicationCreate.component.css',
})
export class CallApplicationCreateComponent { }
