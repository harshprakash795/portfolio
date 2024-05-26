const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.from(".container-nav",{
    opacity:0,
    delay:0.4,
    duration:1,
    y:-60
})
gsap.from(".hero-text",{
    opacity:0,
    delay:0.4,
    duration:1,
    x:-60
}
)
gsap.from(".float1",{
    opacity:0,
    delay:0.8,
    duration:1,
    x:60
}
)
gsap.from(".float2",{
    opacity:0,
    delay:0.8,
    duration:1,
    x:-60
}
)
gsap.from(".codeicon img",{
    opacity:0,
    delay:1,
    duration:1,
    y:-60
}
)
gsap.from(".blur0",{
    opacity:0,
    delay:1,
    duration:1,
    y:-60
}
)

gsap.from(".heroimg",{
    opacity:0,
    delay:0.4,
    duration:1,
    x:60
})
gsap.from(".aboutheading",{
    opacity:0,
    delay:0.4,
    duration:1,
    y:-60,
    scrollTrigger:{
    trigger: ".aboutheading",
        }
})
gsap.from(".about-img",{
    opacity:0,
    delay:0.4,
    duration:1,
    x:-60,
    scrollTrigger:{
    trigger: ".about-img",
        }
})
gsap.from(".about-text",{
    opacity:0,
    delay:0.4,
    duration:1,
    x:60,
    scrollTrigger:{
    trigger: ".about-text",
        }
})
gsap.from(".myskills",{
    opacity:0,
    delay:0.4,
    duration:1,
    y:-60,
    scrollTrigger:{
    trigger: ".myskills",
        }
})
gsap.from(".skills, .professionalskills",{
    opacity:0,
    delay:0.4,
    duration:1,
    y:60,
    scrollTrigger:{
    trigger: ".skills, .professionalskills",
        }
})
gsap.from(".project",{
    opacity:0,
    delay:0.4,
    duration:1,
    y:-60,
    scrollTrigger:{
    trigger: ".project",
        }
})
gsap.from(".p1",{
    opacity:0,
    delay:0.4,
    duration:1,
    x:-60,
    scrollTrigger:{
    trigger: ".p1",
        }
})
gsap.from(".p2",{
    opacity:0,
    delay:0.8,
    duration:1,
    x:60,
    scrollTrigger:{
    trigger: ".p2",
        }
})
gsap.from(".p3",{
    opacity:0,
    delay:1.2,
    duration:1,
    x:-60,
    scrollTrigger:{
    trigger: ".p3",
        }
})
gsap.from(".p4",{
    opacity:0,
    delay:1.6,
    duration:1,
    x:60,
    scrollTrigger:{
    trigger: ".p4",
        }
})
gsap.from(".contactme",{
    opacity:0,
    delay:1.6,
    duration:1,
    y:-60,
    scrollTrigger:{
    trigger: ".contactme",
        }
})