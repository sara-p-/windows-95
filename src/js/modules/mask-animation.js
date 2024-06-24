import { getIntegers } from './utils'

export default function maskAnimation() {
  const bodyHeight = document.body.offsetHeight
  const windowHeight = window.innerHeight
  const maskImage = document.getElementById('mask-image')
  const startBottomAmount = bodyHeight - windowHeight

  // Set the maskImage CSS bottom property so that the top of the maskImage is at the top of the window
  maskImage.style.height = `${bodyHeight}px`
  maskImage.style.bottom = `-${startBottomAmount}px`
  maskImage.style.transition = `300ms ease-out`

  // Okay, first we need to set the values initial values for the parallax function
  let oldCount = window.scrollY
  let currentImagePosition = getIntegers(maskImage.style.bottom)
  // Now we need to set our lag amount
  const lag = 10
  const moveAmount = 5

  function imageLagScroll(newCount) {
    const downTrigger = oldCount + lag
    const upTrigger = oldCount - lag

    // if scrolling down:
    if (newCount >= oldCount) {
      // trigger the position change to hit at the old scroll position + the lag amount:
      if (newCount >= downTrigger) {
        maskImage.style.bottom = `-${currentImagePosition - moveAmount}px`
        oldCount = newCount
      }
      // If scrolling up:
    } else if (newCount < oldCount) {
      // trigger the position change to hit at the old scroll position - the lag amount:
      if (newCount <= upTrigger) {
        maskImage.style.bottom = `-${currentImagePosition + moveAmount}px`
        oldCount = newCount
      }
    }
    currentImagePosition = getIntegers(maskImage.style.bottom)
  }

  // Trigger everything on scroll
  document.addEventListener('scroll', (e) => {
    imageLagScroll(window.scrollY)
  })
}
