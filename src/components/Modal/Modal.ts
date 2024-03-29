import './Modal.css';

interface Props {
  child: HTMLElement;
}

class Modal {
  #modal = document.createElement('div');

  constructor({ child }: Props) {
    this.render(child);
  }

  render(child: HTMLElement) {
    const backdrop = document.createElement('div');
    const container = document.createElement('div');

    this.#modal.classList.add('modal', 'modal--open');
    backdrop.classList.add('modal-backdrop');
    container.classList.add('modal-container');

    container.append(child);
    this.#modal.appendChild(backdrop);
    this.#modal.appendChild(container);

    backdrop.addEventListener('click', () => this.toggle.bind(this)());

    this.mount();
  }

  mount() {
    const mainContainer = document.querySelector('main');
    if (!mainContainer) return;
    mainContainer.append(this.#modal);
  }

  get element() {
    return this.#modal;
  }

  toggle() {
    if (this.#modal.classList.contains('modal--open')) {
      this.#modal.classList.remove('modal--open');
    } else this.#modal.classList.add('modal--open');
  }
}

export default Modal;
