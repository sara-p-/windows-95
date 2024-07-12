export default function myComputerButton() {
  const screenWrapper = document.querySelector('.screen__wrapper')

  const button = document.createElement('button')
  button.classList.add('my-computer')
  button.innerHTML = 'My Computer'

  screenWrapper.append(button)
  // button.onclick
}
