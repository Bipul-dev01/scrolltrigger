const bars = document.querySelector(".bar");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");


bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity : 0,
        duration : .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active");
});


// ScrollTrigger Animation

function animateContent(selector){
    selector.forEach((selextor)=>{
        gsap.to(selector,{
            y  : 30,
            duration : 0.3,
            opacity : 1,
            delay : 0.2,
            stagger : 0.2,
            ease : "power2.out",
        });
    });
}

animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);


function scrollTriggerAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger : {
            trigger : triggerSelector,
            start : "top 50%",
            end : "top 80%",
            scrub : 1,
        },
    });

    boxSelectors.forEach((boxSelector) =>{
        timeline.to(boxSelector, {
            y : 0,
            duration : 1,
            opacity : 1,
        });
    })
}

scrollTriggerAnimation(".travel", [".travel .box1",".travel .box2",".travel .box3"]);
scrollTriggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);
scrollTriggerAnimation(".article", [".article .label", ".article .heading"]);



function swipeAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger : {
            trigger : triggerSelector,
            start : "top 50%",
            end : "top 100%",
            scrub : 1,
        },
    });

    boxSelectors.forEach((boxSelector)=>{
        timeline.to(boxSelector, {
            x : 0,
            duration : 1,
            opacity : 1,
        });
    });
}

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"]);
swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"]);


function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}


galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])
