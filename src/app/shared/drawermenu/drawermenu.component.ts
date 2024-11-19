import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { SideopenService } from '@services/sideMenu/sideopen.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-drawermenu',
  standalone: true,
  imports: [
    CommonModule,
    NzDrawerModule,
    NzIconModule,
    NzDividerModule,
    RouterModule
  ],
  templateUrl: './drawermenu.component.html',
  styles: ``,
})
export class DrawermenuComponent { 

  public sideSrv = inject(SideopenService);
  public authSrv = inject(AuthService);

  close(): void {
    this.sideSrv.setCloseSideMenu();
  }

  menu() {
    let menu = this.authSrv.currentUser()?.menu;
    return menu;
  }

}
