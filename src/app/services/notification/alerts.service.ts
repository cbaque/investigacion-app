import { inject, Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  public alertSrv = inject(NzNotificationService)

  showError(sms: string) {
    this.alertSrv.error("Error", sms);
  }

  showSuccess(sms: string) {
    this.alertSrv.success("", sms);
  }

}
