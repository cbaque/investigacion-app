import { inject, Injectable } from '@angular/core';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class ResearchClosingService {
  
  private env = inject(EnvService);

  constructor() { }

  update(data: Object, id: number) {
    return this.env.putQuery(`/research/closing/${id}`, data)
  }

}
