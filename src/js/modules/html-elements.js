import { onButtonClick } from '../modules/utils'

export function createDialog({ id, text }, index) {
  const dialog = document.createElement('dialog')
  dialog.classList.add('dialog')
  dialog.setAttribute('open', '')
  dialog.setAttribute('data-dialog-id', id)
  dialog.setAttribute('data-dialog-index', index)
  const imageUrl = new URL('/images/alert-shadow.svg', import.meta.url)

  const wrapper = document.createElement('div')
  wrapper.classList.add('dialog__wrapper')

  dialog.append(wrapper)

  const header = document.createElement('div')

  dialog.innerHTML = `
        <div class="dialog__wrapper">
          <div class="dialog__header">
            <h1 class="h5 dialog__title">Vaporwave ${id}</h1>
            <button class="dialog__close icon icon--x-mark">
              <span class="visually-hidden">Close window</span>
            </button>
          </div>
          <div class="dialog__body">
            <div class="dialog__content">
              <img
                src="${imageUrl}"
                alt="alert"
                class="dialog__alert"
              />
              <p class="dialog__text">
                ${text}
              </p>
            </div>
            <div class="dialog__buttons">
              <button class="dialog__ok">
                <div class="button-wrapper">OK</div>
              </button>
            </div>
          </div>
        </div>`

  return dialog
}
