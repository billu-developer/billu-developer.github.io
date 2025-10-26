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

// Reveal a single image by ID
function reveal(id) {
  const img = document.getElementById(id);
  if (img) {
    img.classList.add('show');
  }

  // Check if all revealable images are shown
  const allImages = document.querySelectorAll('.revealable');
  const allShown = Array.from(allImages).every(img => img.classList.contains('show'));
  if (allShown) {
    document.getElementById('finalPopup').style.display = 'flex';
  }
}

// Show the "yay" popup
function yayPopup() {
  document.getElementById('finalPopup').style.display = 'none';
  document.getElementById('yayPopupBox').style.display = 'flex';
}

// Show the "sad" popup
function sadPopup() {
  document.getElementById('finalPopup').style.display = 'none';
  document.getElementById('sadPopupBox').style.display = 'flex';
}

// Show the scroll prompt popup
function scrollPrompt() {
  document.getElementById('scrollPopup').style.display = 'flex';
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

// Close popup when clicking outside the content box
window.addEventListener('click', function(event) {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    const content = popup.querySelector('.popup-content');
    if (
      popup.style.display === 'flex' &&
      !content.contains(event.target) &&
      !event.target.closest('.popup-content')
    ) {
      popup.style.display = 'none';
    }
  });
});



  

