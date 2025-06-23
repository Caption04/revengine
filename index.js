// Script By Rev Engine


// Ensures the animation loads after the load
window.addEventListener("load", () => {
    document.querySelector("h1").classList.add("animate");
  });

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

window.addEventListener("DOMContentLoaded", () => {
    const certifications = document.querySelectorAll(".certifications-link");

    function revealCerts() {
        let allSeen = true;

        certifications.forEach((cert) => {
            const up = cert.getBoundingClientRect();
            if (up.top < window.innerHeight) {
                cert.classList.add("see");
            } else {
                allSeen = false;
            }
        });

        // If all have been seen, remove scroll listener
        if (allSeen) {
            window.removeEventListener("scroll", revealCerts);
        }
    }

    // Initial check on load
    revealCerts();

    // Only keep scroll listener if needed
    window.addEventListener("scroll", revealCerts);
});


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

// Button Navigation
const services = document.getElementById("our-services");
const servicesBtn = document.querySelector(".services");

servicesBtn.addEventListener("click", () => {
    services.scrollIntoView({behavior: "smooth"})
});

const form = document.getElementById("form");
const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => {
    form.scrollIntoView(
        {behavior: "smooth"}
    )
});


//////////////////////////////////
//Content for the Form  //////////
//////////////////////////////////

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('serviceError').textContent = '';
  let formStatus = document.querySelector(".form-status");
  formStatus.textContent = '';
  formStatus.style.color = '';

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const service = this.service.value;

  let hasError = false;

  if (name === '') {
    document.getElementById('nameError').textContent = 'Please enter your name.';
    hasError = true;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    hasError = true;
  }

  if (!/^\d{7,15}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'Enter a valid phone number.';
    hasError = true;
  }

  if (service === '-- Service --' || service === '') {
    document.getElementById('serviceError').textContent = 'Please select a service.';
    hasError = true;
  }

  if (hasError) {
    formStatus.textContent = '*Fix errors above*';
    formStatus.style.color = 'red';
    return;
  }

  const formData = { name, email, phone, service };

  // Show submitting message
    formStatus.style.color = '#0D47A1';
    formStatus.textContent = 'Submitting... please wait';
  
  fetch('https://revengine.onrender.com/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(data => {
      formStatus.style.color = 'green';
      formStatus.textContent = data.message;
    })
    .catch(() => {
      formStatus.style.color = 'red';
      formStatus.textContent = 'Something went wrong. Please try again.';
    });
});




