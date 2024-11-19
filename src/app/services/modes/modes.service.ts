import { computed, inject, Injectable, signal } from '@angular/core';
import { EnvService } from '../env.service';
import { ModeI } from '@interfaces/ModeI';

@Injectable({
  providedIn: 'root'
})
export class ModesService {
  private env = inject(EnvService)
  
  #modesSiges = signal<ModeI[] | null>(null);
  currentModes = computed(() => this.#modesSiges() )


  constructor() {
    const modes = localStorage.getItem('sigesmodes');
    if (modes) {
      this.#modesSiges.set(JSON.parse(modes));
    }
  }

  get() {
    return this.env.getQuery(`/mode`);
  }

  public setCurrentModesValue(data: ModeI[]) {
    this.#modesSiges.set(data);
  }
}
