import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  #openLoading = signal<boolean>(false);
  currentLoading = computed( () => this.#openLoading );

  setOpenLoading() {
    this.#openLoading.set(true);
  }

  setCloseLoading() {
    this.#openLoading.set(false);
  }

}
