function revealImage() {
  document.getElementById("surprise").classList.add("show");
}

function revealAllImages() {
  const images = document.querySelectorAll('.revealable');
  images.forEach(img => {
    img.classList.add('show');
  });
}

function reveal(id) {
  const img = document.getElementById(id);
  if (img) {
    img.classList.add('show');
  }
}

function reveal(id) {
  const img = document.getElementById(id);
  if (img) {
    img.classList.add('show');
  }
}

// Fade-in sections on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});
