

// Testimonial data
const testimonials = [
  {
        text: `“Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”`,

    name: "Resky Fernanda ",
    title: "Product Designer at Tokopedia",
    avatar: "./images/avater.png"
  },
  {
        text: `“Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”`,

    name: " Fernanda",
    title: "Product Designer at Tokopedia",
    avatar: "./images/avater.png"
  },
  {
        text: `“Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”`,

    name: "Resky ",
    title: "Product Designer at Tokopedia",
    avatar: "./images/avater.png"
  },
  {
        text: `“Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”`,

    name: " Fernanda",
    title: "Product Designer at Tokopedia",
    avatar: "./images/avater.png"
  },
  {
    text: `“Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”`,
    name: "Resky Fernanda",
    title: "Product Designer at Tokopedia",
    avatar: "./images/avater.png"
  }
];

let currentIndex = 0;

// DOM Elements
const textEl = document.querySelector(".testimonials-content p");
const nameEl = document.querySelector(".testimonials-name h6");
const titleEl = document.querySelector(".testimonials-name p");
const avatarEl = document.querySelector(".testimonials-avatar img");
const dotsEl = document.querySelectorAll(".testimonial-dots li");

// Update testimonial content
function updateTestimonial(index) {
  const testimonial = testimonials[index];
  textEl.innerText = testimonial.text;
  nameEl.innerText = testimonial.name;
  titleEl.innerText = testimonial.title;
  avatarEl.src = testimonial.avatar;

  // Update active dot
  dotsEl.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Arrow controls (assumes left = index 0, right = index 1)
document.querySelectorAll(".control").forEach((control, i) => {
  control.addEventListener("click", () => {
    if (i === 0) {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    } else {
      currentIndex = (currentIndex + 1) % testimonials.length;
    }
    updateTestimonial(currentIndex);
  });
});

// Dots click control
dotsEl.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateTestimonial(currentIndex);
  });
});

// Initialize first testimonial
updateTestimonial(currentIndex);


// JavaScript for Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('navbarToggle');
  const menu = document.getElementById('navbarMenu');
  const contact = document.getElementById('navbarContact');
  
  toggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    this.classList.toggle('active');
    menu.classList.toggle('active');
    contact.classList.toggle('active');
  });
});