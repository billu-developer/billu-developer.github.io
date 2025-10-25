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
