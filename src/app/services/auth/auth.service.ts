import { computed, inject, Injectable, signal } from '@angular/core';
import { EnvService } from '../env.service';
import { User, UserI } from '@interfaces/UserI';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public env = inject(EnvService)
  
  #sigesUser = signal<User | null>(null);
  currentUser = computed(() => this.#sigesUser() )

  constructor() {
    const user = localStorage.getItem('sigesuser');
    if (user) {
      this.#sigesUser.set(JSON.parse(user));
    }
  }

  login(email: string | null, password: string | null) {
    return this.env.postQuery(`/auth`, {email, password  })
  }

  public setCurrentUserValue(data: User) {
    this.#sigesUser.set(data);
  }

  public setCurrentUserLocalStorage(data: User) {
    localStorage.setItem('sigesuser', JSON.stringify(data));
  }

  public removeCurrentUserLocalStorage(){
    localStorage.removeItem('sigesuser');
  }

}
