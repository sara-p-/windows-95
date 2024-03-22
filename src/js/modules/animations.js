import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
// import simpleParallax from 'simple-parallax-js'

export default function animations() {
  // variables
  const bgImage = document.querySelector('img.vaporwave-text__image')
  const roadBackground = document.querySelector('.road-stripes')
  const sun = document.querySelector('.sun')
  const mountainLeft = document.querySelector('.mountain.back-left')
  const mountainRight = document.querySelector('.mountain.back-right')
  const titleSection = document.querySelector('#title-section')
  const section4 = document.getElementById('section--4')

  // Background Movement
  gsap.from(bgImage, {
    scrollTrigger: {
      trigger: titleSection,
      scrub: 1,
    },
    yPercent: -25,
    ease: 'none',
  })
  // Sunset ground movement
  gsap.from(roadBackground, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    yPercent: -60,
    ease: 'none',
  })
  // Sun movement
  gsap.to(sun, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    yPercent: 50,
    scale: 2,
    ease: 'none',
  })
  // mountain-left movement
  gsap.to(mountainLeft, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    scale: 2,
    xPercent: -20,
    yPercent: -50,
    ease: 'none',
  })
  // mountain-right movement
  gsap.to(mountainRight, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    scale: 2,
    xPercent: 25,
    yPercent: -50,
    ease: 'none',
  })

  // new simpleParallax(bgImage, {
  //   orientation: 'down',
  //   overflow: true,
  // })
  // new simpleParallax(roadBackground, {
  //   orientation: 'down',
  // })
}
