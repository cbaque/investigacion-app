import { Component } from '@angular/core';
import { BreadcrumbComponent } from '@app/app/shared/breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent { }
