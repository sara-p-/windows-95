// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)
import simpleParallax from 'simple-parallax-js'

export default function titleAnimation() {
  // variables
  const bgImage = document.querySelector('img.vaporwave-text__image')
  const titleMask = document.querySelector('.mask.mask--1')
  const titleSection = document.querySelector('#title-section')
  const theBody = document.getElementById('body')
  const section1 = document.getElementById('section--1')
  const section2 = document.getElementById('section--2')

  // Background Movement
  // gsap.from(bgImage, {
  //   scrollTrigger: {
  //     trigger: titleSection,
  //     scrub: 1,
  //     // toggleActions: 'restart pause resume pause',
  //   },
  //   yPercent: -25,
  //   ease: 'none',
  // })

  new simpleParallax(bgImage, {
    orientation: down,
  })
}
