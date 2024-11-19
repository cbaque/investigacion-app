import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzIconModule
  ],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit { 
  activateRoute = inject(ActivatedRoute)
  breadcrumb: string = '';

  ngOnInit(): void {
    this.breadcrumb = this.activateRoute.snapshot.data['breadcrumb'];
  }

}
