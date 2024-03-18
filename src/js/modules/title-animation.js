import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function titleAnimation() {
  // variables
  const bgImage = document.querySelector('img.vaporwave-text__image')
  const titleMask = document.querySelector('.mask.mask--1')
  const theBody = document.getElementById('body')
  const section1 = document.getElementById('section--1')
  const section2 = document.getElementById('section--2')

  // Background Movement
  gsap.from(bgImage, {
    scrollTrigger: {
      trigger: section2,
      scrub: true,
      // toggleActions: 'restart pause resume pause',
    },
    yPercent: -25,
    ease: 'none',
  })

  // // Text Movement
  // gsap.to(titleMask, {
  //   scrollTrigger: {
  //     trigger: section2,
  //     end: 'middle 50%',
  //     scrub: true,
  //   },
  //   scale: 0,
  //   ease: 'none',
  // })
}
