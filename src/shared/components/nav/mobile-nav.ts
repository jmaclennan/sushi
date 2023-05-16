import { gsap } from 'gsap'
const app = {
  elements: {
    trigger: document.getElementById('nav-trigger') as HTMLButtonElement,
    drawer: document.getElementById('nav-mobile') as HTMLElement,
  },
  state: {
    isOpen: false,
    drawerWidth: 0,
  },
  close: function () {
    gsap.to(this.elements.drawer, {
      duration: 0.25,
      x: this.state.drawerWidth,
      ease: 'power2.inOut',
    });
    this.elements.trigger.classList.remove('tham-active')
    this.state.isOpen = false;
  
  },
  toggle: function () {
    this.state.isOpen = !this.state.isOpen;

    if (this.state.isOpen) {
      gsap.set('#nav-mobile-overlay', { width: '100%'})
    }

    gsap.to(this.elements.drawer, {
      duration: 0.25,
      x: !this.state.isOpen ? this.state.drawerWidth : 0,
      ease: 'power2.inOut',
    });

    gsap.to('#nav-mobile-overlay', {
      duration: 0.25,
      opacity: !this.state.isOpen ? 0 : 1,
      onComplete: () => {
        gsap.set('#nav-mobile-overlay', { width: !this.state.isOpen ? '0' : '100%', pointerEvents: !this.state.isOpen ? 'none' : 'auto' })
      }
    })

    this.elements.trigger.classList.toggle('tham-active')
  },
  init: function () {
    if (!this.elements.trigger && !this.elements.drawer) {
      console.error('missing nav elements');
      return;
    }

    // set initial state
    this.state.drawerWidth = app.elements.drawer.offsetWidth;
    // this.elements.drawer.style.translate = `translateX(${this.state.drawerWidth}px)`
    
    this.elements.trigger.addEventListener('click', () => app.toggle());
    
    // close if user clicks outside drawer
    document.addEventListener('click', (e) => {
      if (this.state.isOpen && !this.elements.drawer.contains(e.target as Node) && !this.elements.trigger.contains(e.target as Node)) {
        this.toggle();
      }
    });
    
    // close nav drawer on resize
    window.addEventListener('resize', () => {
      if (this.state.isOpen) {
        this.close()
      } else {
        this.state.drawerWidth = app.elements.drawer.offsetWidth;
        this.elements.drawer.style.transform = `translateX(${this.state.drawerWidth}px)`;
      }
    });
    
    this.elements.drawer.classList.remove('pointer-events-none', 'opacity-0');
    this.elements.drawer.style.transform = `translateX(${this.state.drawerWidth}px)`
  }
}

app.init();