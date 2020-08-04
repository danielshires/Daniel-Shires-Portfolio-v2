gsap.registerPlugin(ScrollTrigger);

animationFunc = function () {
    var ani = gsap.timeline();

    ani.from("nav.nav-animation", {
        scrollTrigger: "nav.nav-animation",
        delay: 1,
        duration: 0.5,
        opacity: 0,
        y: -10,
        ease: "power4.out"
    });

    ani.from(".hero-animation", {
        scrollTrigger: ".hero-animation",
        duration: 0.5,
        delay: 0,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    });

    return animationFunc
}


fadeUpFunction = function () {
    var sectionTitle = gsap.timeline();

    gsap.from(".fade-up", {
        scrollTrigger: {
            trigger: ".fade-up",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-cards", {
        scrollTrigger: {
            trigger: ".fade-up-cards",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-portfolio", {
        scrollTrigger: {
            trigger: ".fade-up-portfolio",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-cta", {
        scrollTrigger: {
            trigger: ".fade-up-cta",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
            scrub: true,
        },
        duration: 3,
        opacity: 0,
        x: -30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-tesimonial", {
        scrollTrigger: {
            trigger: ".fade-up-tesimonial",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-services", {
        scrollTrigger: {
            trigger: ".fade-up-services",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-testimonial-made", {
        scrollTrigger: {
            trigger: ".fade-up-testimonial-made",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-job-title", {
        scrollTrigger: {
            trigger: ".fade-up-job-title",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-job-list", {
        scrollTrigger: {
            trigger: ".fade-up-job-list",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-footer", {
        scrollTrigger: {
            trigger: ".fade-up-footer",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

}


window.onload = animationFunc();

window.onload = fadeUpFunction();


// Barba Page Transition

function init(){
    
    const loader = document.querySelector('.loader');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0, 
        rotation: 10, 
        xPercent: -5,
        yPercent: -50, 
        transformOrigin: 'left center', 
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, 
            {
                rotation: 0,
                scaleX: 0,
                xPercent: -5
            },
            { 
                duration: 0.8,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
                ease: 'Power4.inOut', 
                transformOrigin: 'left center'
            });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.to(loader, { 
            duration: 0.8, 
            scaleX: 0,
            xPercent: 5, 
            rotation: 0, 
            transformOrigin: 'right center', 
            ease: 'Power4.inOut'
        });
    }

    // do something before the transition starts
    barba.hooks.before(() => {

        document.querySelector('html').classList.add('is-transitioning');
        barba.wrapper.classList.add('is-animating');

    });

    // do something after the transition finishes
    barba.hooks.after(() => {

        document.querySelector('html').classList.remove('is-transitioning');
        barba.wrapper.classList.remove('is-animating');

    });

    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });

    barba.init({
        transitions: [{
            async leave() {
                await loaderIn();
        
            },
            enter() {
                loaderAway();
            }
        }]
    })

}

window.addEventListener('load', function(){
    init();
});


// Barba 

/*
function pageTransition() {

    var ani = gsap.timeline();

    ani.from("nav.nav-animation", {
        scrollTrigger: "nav.nav-animation",
        delay: 1,
        duration: 0.5,
        opacity: 0,
        y: -10,
        ease: "power4.out"
    });

    ani.from(".hero-animation", {
        scrollTrigger: ".hero-animation",
        duration: 0.5,
        delay: 0,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    });


}


function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        settimeout(() => {
            done();
        }, n);
    });
}

barba.init({

    sync: true,

    transitions: [{

        async leave(data) {

            const done = this.async();

            PageTransitions();
            await delay(1500);
            done();
        },

        async enter(data) {
            contentAnimation();
        },

        async once(data) {
            contentAnimation();
        }
    }


]
})

*/