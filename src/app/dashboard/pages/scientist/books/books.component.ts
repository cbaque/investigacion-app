import { Component } from '@angular/core';
import { BreadcrumbComponent } from '@app/app/shared/breadcrumb/breadcrumb.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NzIconModule,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent { }
