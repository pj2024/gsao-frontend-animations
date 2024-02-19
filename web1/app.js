var tl = gsap.timeline();

tl.from("#nav img, #nav h1, #nav h3, #nav button", {
    y: -100,
    duration:1,
    opacity:0,
    delay:.5,
    stagger:.2 
})

tl.from("#main #content h1", {
    y: 100,
    duration:1,
    opacity:0,
    stagger:.2
})

tl.from("#main #content #left-top", {
    x: -100,
    // scale:0,    
    opacity:0,
    duration:1,
})

tl.from("#main #content #right-botton", {
    x: 100,
    opacity:0,
    // scale:0,
    duration:1,
    
});


tl.from("#main #content h5", {
    y:-100,
    duration:.5,
    opacity:0
});

tl.to("#main #content h5", {
    y:-50,
    duration:.7,
    yoyo:true,
    repeat:-1,
});