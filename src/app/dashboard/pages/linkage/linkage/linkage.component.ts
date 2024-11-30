import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-linkage',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
    NzIconModule
  ],
  templateUrl: './linkage.component.html',
  styleUrl: './linkage.component.css',
})
export class LinkageComponent { 

  states = [ 
    {
      "name" : "Convocatorias",
      "selected" : true,
      "link" : "call/applications",
    },
    {
      "name" : "Propuestas",
      "selected" : false,
      "link" : "proposal",
    },
  ];

}
