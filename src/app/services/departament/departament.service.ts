import { computed, inject, Injectable, signal } from '@angular/core';
import { EnvService } from '../env.service';
import { DepartamentI } from '@app/app/interfaces/DepartamentI';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private env = inject(EnvService);

  #departamentSiges = signal<DepartamentI[] | null>(null);
  currentDepartament = computed(() => this.#departamentSiges() )

  constructor() {
    const departaments = localStorage.getItem('sigdepartaments');
    if (departaments) {
      this.#departamentSiges.set(JSON.parse(departaments));
    }
  }

  get() {
    return this.env.getQuery(`/departament`);
  }

  public setCurrentDepartamentsValue(data: DepartamentI[]) {
    this.#departamentSiges.set(data);
  }

}
