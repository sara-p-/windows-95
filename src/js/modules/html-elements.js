import { wikiClickHandler } from './wiki-click'

export function createDialog({ id, text }, index) {
  const dialog = document.createElement('dialog')
  dialog.classList.add('dialog')
  dialog.setAttribute('open', '')
  dialog.setAttribute('data-dialog-id', id)
  dialog.setAttribute('data-dialog-index', index)
  dialog.setAttribute('data-dialog-active', 'inactive')
  const imageUrl = new URL('/images/alert-shadow.svg', import.meta.url)

  const wrapper = document.createElement('div')
  wrapper.classList.add('dialog__wrapper')

  dialog.append(wrapper)

  const header = document.createElement('div')
  header.classList.add('dialog__header')

  wrapper.append(header)

  const title = document.createElement('h1')
  title.classList.add('dialog__title', 'h5')
  title.innerHTML = `Vaporwave ${id}`

  header.append(title)

  const closeButton = document.createElement('button')
  closeButton.classList.add('dialog__close', 'icon', 'icon--x-mark')
  closeButton.innerHTML = `<span class="visually-hidden">Close window</span>`
  closeButton.onclick = wikiClickHandler

  header.append(closeButton)

  const body = document.createElement('div')
  body.classList.add('dialog__body')

  wrapper.append(body)

  const content = document.createElement('div')
  content.classList.add('dialog__content')

  body.append(content)

  const alert = document.createElement('img')
  alert.classList.add('dialog__alert')
  alert.setAttribute('src', imageUrl)
  alert.setAttribute('alt', 'alert')

  content.append(alert)

  const textP = document.createElement('p')
  textP.classList.add('dialog__text')
  textP.innerHTML = text

  content.append(textP)

  const buttonsBox = document.createElement('div')
  buttonsBox.classList.add('dialog__buttons')

  body.append(buttonsBox)

  const okButton = document.createElement('button')
  okButton.classList.add('dialog__ok')
  okButton.onclick = wikiClickHandler
  okButton.innerHTML = `<div class="button-wrapper">OK</div>`

  buttonsBox.append(okButton)

  return dialog
}
