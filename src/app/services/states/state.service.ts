import { computed, inject, Injectable, signal } from '@angular/core';
import { EnvService } from '../env.service';
import { StateI } from '@interfaces/StateI';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private env = inject(EnvService)

  #statesSiges = signal<StateI[] | null>(null);
  currentStates = computed(() => this.#statesSiges() )


  constructor() {
    const states = localStorage.getItem('sigestates');
    if (states) {
      this.#statesSiges.set(JSON.parse(states));
    }
  }

  get() {
    return this.env.getQuery(`/state`);
  }

  public setCurrentStatesValue(data: StateI[]) {
    this.#statesSiges.set(data);
  }

}
