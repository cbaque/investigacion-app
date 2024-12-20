import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideDocumentService {

  #openSideDoc = signal<boolean>(false);
  currentSideDoc = computed(() => this.#openSideDoc() )
  
  setOpenSideDoc() {
    this.#openSideDoc.set(true);
  }

  setCloseSideDoc() {
    this.#openSideDoc.set(false);
  }

}
