import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideopenService {

  #openSide = signal<boolean>(false);
  currentSide = computed(() => this.#openSide() )

  constructor() { }

  setOpenSideMenu() {
    this.#openSide.set(true);
  }

  setCloseSideMenu() {
    this.#openSide.set(false);
  }

}
