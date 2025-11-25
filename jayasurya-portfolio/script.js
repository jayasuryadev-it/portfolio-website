// Typing effect for "And I'm a Web Developer"
const typingTarget = document.querySelector(".typing-text");
const typingText = "Web Developer";
let index = 0;
let typingForward = true;

function typeLoop() {
  if (!typingTarget) return;

  if (typingForward) {
    typingTarget.textContent = typingText.slice(0, index);
    index++;
    if (index > typingText.length) {
      typingForward = false;
      setTimeout(typeLoop, 800);
      return;
    }
  } else {
    typingTarget.textContent = typingText.slice(0, index);
    index--;
    if (index < 0) {
      typingForward = true;
      index = 0;
    }
  }

  setTimeout(typeLoop, 120);
}

typeLoop();

// Smooth scroll for internal links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 70,
          behavior: "smooth",
        });
      }
    }
  });
});

// Reveal skill rows on scroll
const skillItems = document.querySelectorAll(".skills-group li");

function revealSkills() {
  skillItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSkills);
revealSkills();

// Prevent real submit in demo form
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! (Form is in demo mode for now.)");
  });
}
