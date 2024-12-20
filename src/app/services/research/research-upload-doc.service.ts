import { inject, Injectable } from '@angular/core';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class ResearchUploadDocService {

  private env = inject(EnvService);

  post(data: Object) {
    return this.env.postQuery(`/research/upload`, data)
  }

}
