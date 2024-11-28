import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-scientist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
    NzIconModule
  ],
  templateUrl: './scientist.component.html',
})
export class ScientistComponent { 

  states = [ 
    {
      "name" : "Artículos",
      "selected" : true,
      "link" : "articles",
    },
    {
      "name" : "Libros",
      "selected" : false,
      "link" : "books",
    },
    // {
    //   "name" : "Cartas de Aceptación",
    //   "selected" : false,
    //   "link" : "letters",
    // },
    // {
    //   "name" : "Manuscritos",
    //   "selected" : false,
    //   "link" : "manuscripts",
    // },
  ];


}
