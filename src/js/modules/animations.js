import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// import simpleParallax from 'simple-parallax-js'

export default function animations() {
  // variables
  const body = document.getElementById('body')
  const bgImage = document.querySelector('img.vaporwave-text__image')
  const roadBackground = document.querySelector('.road-stripes')
  const sun = document.querySelector('.sun')
  const mountainLeft = document.querySelector('.mountain.back-left')
  const mountainRight = document.querySelector('.mountain.back-right')
  const mountainFrontLeft = document.querySelector('.mountain.front-left')
  const mountainFrontRight = document.querySelector('.mountain.front-right')
  const titleSection = document.querySelector('#title-section')
  const section4 = document.getElementById('section--4')

  // Smooth Scrolling
  ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    // effects: true, // looks for data-speed and data-lag attributes on elements
    // smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  })

  // Text Background Movement
  // gsap.from(bgImage, {
  //   scrollTrigger: {
  //     trigger: body,
  //     scrub: 1,
  //   },
  //   yPercent: -25,
  //   ease: 'none',
  // })
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
      end: 'bottom 60%',
      scrub: 1,
    },
    yPercent: 100,
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
    xPercent: -30,
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
    xPercent: 30,
    yPercent: -50,
    ease: 'none',
  })
  // mountain-front-left movement
  gsap.to(mountainFrontLeft, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    scale: 2.5,
    xPercent: -100,
    yPercent: -50,
    ease: 'none',
  })
  // mountain-right movement
  gsap.to(mountainFrontRight, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    scale: 2.5,
    xPercent: 100,
    yPercent: -50,
    ease: 'none',
  })

  // Mobile animations
  let mm = gsap.matchMedia()
  mm.add('(min-width: 900px)', () => {
    // Text Background Movement
    gsap.from(bgImage, {
      scrollTrigger: {
        trigger: body,
        scrub: 1,
      },
      yPercent: -10,
      ease: 'none',
    })
  })
}
