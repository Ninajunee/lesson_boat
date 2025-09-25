gsap.from(".link", {opacity:0,  duration: 2, delay:1, stagger:.6})
gsap.to(".boatjs", {duration: 10, x:400, ease: "expo.out"})
gsap.from(".ctajs", { duration: 2, scale: 0.8, opacity: 0, delay: 0.3, stagger: 0.3, ease: "elastic", repeat: -1, repeatDelay: 0.05})
gsap.from(".linkThree", {duration: 4, scale:0.8, stagger:1.5, repeat: -1 })