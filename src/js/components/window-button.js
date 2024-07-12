import { handleMouseDown, handleMouseUp } from '../modules/utils'

export default function windowButton(
  altText,
  buttonClasses = [],
  onClickFunction
) {
  // console.log(altText)
  const button = document.createElement('button')

  const newButtonClasses = [...buttonClasses, 'icon']
  newButtonClasses.forEach((buttonClass) => {
    button.classList.add(buttonClass)
  })
  button.innerHTML = `<span class="visually-hidden">${altText}</span>`
  button.onmousedown = handleMouseDown
  button.onmouseup = handleMouseUp
  button.onclick = onClickFunction

  return button
}
