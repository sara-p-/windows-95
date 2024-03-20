import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
// import simpleParallax from 'simple-parallax-js'

export default function animations() {
  // variables
  const bgImage = document.querySelector('img.vaporwave-text__image')
  const roadBackground = document.querySelector('img.road--stripe-background')
  const titleMask = document.querySelector('.mask.mask--1')
  const titleSection = document.querySelector('#title-section')
  const theBody = document.getElementById('body')
  const section1 = document.getElementById('section--1')
  const section2 = document.getElementById('section--2')
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
  // Background Movement
  gsap.from(roadBackground, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    yPercent: -25,
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
