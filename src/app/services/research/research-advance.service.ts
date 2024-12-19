import { inject, Injectable } from '@angular/core';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class ResearchAdvanceService {

  private env = inject(EnvService);


  constructor() { }

  update(data: Object, id: number) {
    return this.env.putQuery(`/research/advance/${id}`, data)
  }

}
