import { handleMouseDown, handleMouseUp } from './utils'

export default function buttonEvents() {
  const buttons = document.querySelectorAll('button')

  buttons.forEach((button) => {
    button.addEventListener('mousedown', handleMouseDown)
    button.addEventListener('mouseup', handleMouseUp)
  })
}
