import { gsap } from 'gsap';
const staggerEls = document.querySelectorAll('.stagger-load');
if (staggerEls.length > 0) {
  gsap.fromTo('.stagger-load', {
  opacity: 0, 
    y: (_, target) => target.classList.contains('stagger-load-from-top') ? -25 : 25
  }, 
  { 
    opacity: 1, 
    y: 0, 
    duration: .5, 
    ease: 'power4.out',
    stagger: { 
      each: .1,
    },
  })
}