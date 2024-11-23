import { inject, Injectable } from '@angular/core';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  private env = inject(EnvService);
  
  constructor() { }

  
  get() {
    return this.env.getQuery(`/research`);
  }

  post(data: Object) {
    return this.env.postQuery(`/research`, data)
  }

}
