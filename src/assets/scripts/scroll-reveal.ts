import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollRevealElements = document.querySelectorAll('.js-scroll-reveal');

scrollRevealElements.forEach((element) => {
  const tl = gsap.fromTo(element, {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: '0',
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom 60%',
      once: true,
    }
  })
})