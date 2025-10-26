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

function reveal(id) {
  const img = document.getElementById(id);
  if (img) {
    img.classList.add('show');
  }

  // Check if all revealable images are shown
  const allImages = document.querySelectorAll('.revealable');
  const allShown = Array.from(allImages).every(img => img.classList.contains('show'));
  if (allShown) {
    document.getElementById('finalPopup').style.display = 'block';
  }
}

function yayPopup() {
  document.getElementById('finalPopup').style.display = 'none';
  document.getElementById('yayPopupBox').style.display = 'block';
}

function sadPopup() {
  document.getElementById('finalPopup').style.display = 'none';
  document.getElementById('sadPopupBox').style.display = 'block';
}

function scrollPrompt() {
  document.getElementById('scrollPopup').style.display = 'block';
}
