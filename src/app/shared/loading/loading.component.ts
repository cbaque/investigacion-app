import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadingService } from '@services/loading/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent { 
  private loadingSrv =  inject(LoadingService);

  public isVisibleLoading = this.loadingSrv.currentLoading();
}
