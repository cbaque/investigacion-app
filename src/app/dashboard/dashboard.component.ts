import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadermenuComponent } from '@shared/headermenu/headermenu.component';
import { DrawermenuComponent } from '@shared/drawermenu/drawermenu.component';
import { ModalConfirmComponent } from "@shared/modalConfirm/modalConfirm.component";
import { LoadingComponent } from '@shared/loading/loading.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeadermenuComponent,
    DrawermenuComponent,
    ModalConfirmComponent,
    LoadingComponent
],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  
}

