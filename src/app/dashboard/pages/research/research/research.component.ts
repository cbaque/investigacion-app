import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
    NzIconModule
  ],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css',
})
export class ResearchComponent { 
  states = [ 
    {
      "name" : "Proyectos",
      "selected" : true,
      "link" : "projects",
    },
    {
      "name" : "Avances",
      "selected" : false,
      "link" : "advances",
    },
    {
      "name" : "Cierres",
      "selected" : false,
      "link" : "closing",
    },
    {
      "name" : "Certificación",
      "selected" : false,
      "link" : "certification",
    },
  ];
}

