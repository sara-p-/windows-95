import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// import simpleParallax from 'simple-parallax-js'

export default function animations() {
  // variables
  const body = document.getElementById('body')
  const bgImage = document.querySelector('img.vaporwave-text__image')
  const roadBackground = document.querySelector('.road__stripes')
  const sun = document.querySelector('.sun__image')
  const mountainLeft = document.querySelector('.mountains-back--left')
  const mountainRight = document.querySelector('.mountains-back--right')
  const mountainFrontLeft = document.querySelector('.mountains-front--left')
  const mountainFrontRight = document.querySelector('.mountains-front--right')
  const titleSection = document.querySelector('#title-section')
  const section4 = document.getElementById('section--4')
  const section5 = document.getElementById('section--5')
  const maskScrollBox = document.getElementById('mask-scroll-box')
  const stars = document.querySelector('.stars__image')
  const miata = document.querySelector('.miata__image')

  // Smooth Scrolling
  ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  })

  // Text Background Movement
  gsap.from(bgImage, {
    scrollTrigger: {
      trigger: maskScrollBox,
      scrub: 1,
    },
    yPercent: -25,
    ease: 'none',
  })
  // Stars movement
  gsap.from(stars, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    rotate: -20,
    // transformOrigin: '35% 45%',
    ease: 'none',
  })
  // Sunset ground movement
  gsap.from(roadBackground, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    yPercent: -100,
    ease: 'none',
  })
  // Sun movement
  gsap.to(sun, {
    scrollTrigger: {
      trigger: section4,
      end: 'bottom 60%',
      scrub: 1,
    },
    yPercent: 60,
    scale: 2,
    ease: 'none',
  })
  // mountain-left movement
  gsap.to(mountainLeft, {
    scrollTrigger: {
      trigger: section5,
      scrub: 1,
    },
    scale: 2,
    xPercent: -40,
    yPercent: -60,
    ease: 'none',
  })

  // mountain-right movement
  gsap.to(mountainRight, {
    scrollTrigger: {
      trigger: section5,
      start: 'top 90%',
      scrub: 1,
    },
    scale: 2,
    xPercent: 40,
    yPercent: -60,
    ease: 'none',
  })
  // mountain-front-left movement
  gsap.to(mountainFrontLeft, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    scale: 3,
    xPercent: 0,
    yPercent: 50,
    transformOrigin: 'right bottom',
    ease: 'none',
  })
  // mountain-right movement
  gsap.to(mountainFrontRight, {
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
    scale: 3,
    xPercent: 0,
    yPercent: 50,
    transformOrigin: 'left bottom',
    ease: 'none',
  })
  // *********************** MIATA ********************* //
  // gsap.to(miata, {
  //   // scrollTrigger: {
  //   //   trigger: section4,
  //   //   scrub: 1,
  //   // },
  //   yPercent: 5,
  //   duration: 1,
  //   repeat: -1,
  // })

  let t1 = gsap.timeline({
    yoyo: true,
    repeat: 10,
    repeatDelay: 1,
    scrollTrigger: {
      trigger: section4,
      scrub: 1,
    },
  })

  // // let t1 = gsap.timeline({ repeat: -1, repeatDelay: 1 })

  t1.from(miata, {
    // rotate: -5,
    yPercent: -10,
    // ease: 'none',
    duration: 1,
  })

  // t1.resume()

  // Mobile animations
  // let mm = gsap.matchMedia()
  // mm.add('(min-width: 900px)', () => {
  //   // Text Background Movement
  //   gsap.from(bgImage, {
  //     scrollTrigger: {
  //       trigger: body,
  //       scrub: 1,
  //     },
  //     yPercent: -10,
  //     ease: 'none',
  //   })
  // })
}
