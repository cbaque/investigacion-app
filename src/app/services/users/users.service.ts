import { inject, Injectable } from '@angular/core';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private env = inject(EnvService)
  constructor() { }

  get() {
    return this.env.getQuery(`/user`);
  }

  post(data: Object) {
    return this.env.postQuery(`/user`, data)
  }

}
