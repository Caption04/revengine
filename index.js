// Script By Rev Engine

// Load Header
const loadedHeader = document.querySelector(".header-drop");

window.addEventListener("load", () => {
    const rect = loadedHeader.getBoundingClientRect();
    if(rect.top < window.innerHeight){
        loadedHeader.classList.add("visible");
    }
})

// Load of introduction icons
const animatedSection = document.querySelector(".animated-sub");

window.addEventListener("load", () => {
    const rect = animatedSection.getBoundingClientRect();
    if(rect.top < window.innerHeight){
        animatedSection.classList.add("visible");
    }
});

// Load View Animated button
const animatedButton = document.querySelector(".animated-btns");

window.addEventListener("load", () => {
    const rect3 = animatedButton.getBoundingClientRect();
    if(rect3.top < window.innerHeight){
        animatedButton.classList.add("visible");
    }
})

// Animated section
const animatedSections = document.querySelectorAll(".animated-section");

window.addEventListener("scroll", () => {
    animatedSections.forEach((section)=>{
        const rect1 = section.getBoundingClientRect();
        if(rect1.top < window.innerHeight){
            section.classList.add("visible");
        }
    })
})

// Back to the top Button
const topButton = document.querySelector(".top-btn");
const trigger = document.querySelector(".trigger");
const serve = document.querySelector(".serve-3");
const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
    const rect2 = trigger.getBoundingClientRect();
    if(rect2.top < window.innerHeight){
        topButton.classList.add("visible");
    }
})

window.addEventListener("scroll", () => {
    const rect4 = serve.getBoundingClientRect();
    if(rect4.bottom > window.innerHeight){
        topButton.classList.remove("visible");
    }
})

topButton.addEventListener("click", () => {
    hero.scrollIntoView({behavior: "smooth"})
});


