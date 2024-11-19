import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SideopenService } from '@services/sideMenu/sideopen.service';
import { AuthService } from '@services/auth/auth.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Router, RouterModule } from '@angular/router';
import { ModalConfirmService } from '@app/app/services/modalConfirm/modalConfirm.service';

@Component({
  selector: 'app-headermenu',
  standalone: true,
  imports: [
    CommonModule, 
    NzIconModule,
    NzBreadCrumbModule,
    NzToolTipModule,
    RouterModule
  ],
  templateUrl: './headermenu.component.html',
  styles: ``,
})
export class HeadermenuComponent { 
  public authSrv = inject(AuthService);
  public sideSrv = inject(SideopenService)
  private router = inject(Router)
  public confirmSrv = inject(ModalConfirmService);
  
  menu() {
    let menu = this.authSrv.currentUser()?.menu;
    menu = menu?.filter( a => a.tab);
    
    return menu;
  }

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  logout() {
    this.confirmSrv.setOpenModalConfirm('¿Salir?', '¿Está seguro de salir del sistema?', ()=> {
      localStorage.removeItem('sigdepartaments');
      localStorage.removeItem('sigesmodes');
      localStorage.removeItem('sigestates');
      localStorage.removeItem('sigesuser');
      localStorage.removeItem('sigroles');
      this.confirmSrv.setCloseModalConfirm();
      this.router.navigate(["/auth"]);
    })
  }
  
}
