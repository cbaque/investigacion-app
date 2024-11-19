import { computed, inject, Injectable, signal } from '@angular/core';
import { EnvService } from '../env.service';
import { RoleI } from '@app/app/interfaces/RoleI';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private env = inject(EnvService);

  #rolesSiges = signal<RoleI[] | null>(null);
  currentRoles = computed(() => this.#rolesSiges() )

  constructor() {
    const roles = localStorage.getItem('sigroles');
    if (roles) {
      this.#rolesSiges.set(JSON.parse(roles));
    }
  }

  get() {
    return this.env.getQuery(`/role`);
  }

  public setCurrentRolesValue(data: RoleI[]) {
    this.#rolesSiges.set(data);
  }

}
