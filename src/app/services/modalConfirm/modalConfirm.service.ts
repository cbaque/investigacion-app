import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalConfirmService {

  #openModalConfirm = signal<boolean>(false);
  #titleModalConfirm = signal<string>('');
  #messageModalConfirm = signal<string>('');

  currentModalConfirm = computed( () => this.#openModalConfirm );
  currentTitleModalConfirm = computed( () => this.#titleModalConfirm );
  currentMessageModalConfirm = computed( () => this.#messageModalConfirm );
  private confirmCallback: () => void = () => {};


  setOpenModalConfirm(title: string, message: string, onConfirm: () => void) {
    this.#openModalConfirm.set(true);
    this.#titleModalConfirm.set(title);
    this.#messageModalConfirm.set(message);
    this.confirmCallback = onConfirm;

  }

  setCloseModalConfirm() {
    this.#openModalConfirm.set(false);
  }


  public confirmAction( ) {
    this.confirmCallback();
  }

}
