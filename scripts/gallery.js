//Inside this lambda to ensure everything is loaded by the time getElementById is called.
document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbnailBar = document.getElementById("thumbnail-bar");

  const images = units.map(u => u.image);
  let currentIndex = 0;

  // Populate thumbnails
  images.forEach((src, i) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    if (i === currentIndex) thumb.classList.add("selected");
    thumb.addEventListener("click", () => changeImage(i, i > currentIndex ? 'right' : 'left'));
    thumbnailBar.appendChild(thumb);
  });

  function changeImage(newIndex, direction) {
    if (newIndex === currentIndex) return;

    const oldImage = mainImage.cloneNode();
    oldImage.src = mainImage.src;
    mainImage.parentNode.appendChild(oldImage);

    const incomingAnim = direction === 'right' ? 'slideInRight' : 'slideInLeft';
    const outgoingAnim = direction === 'right' ? 'slideOutLeft' : 'slideOutRight';

    // Animate old image out
    oldImage.style.animation = `${outgoingAnim} 0.5s forwards`;

    // Reset any existing animation on mainImage
    mainImage.style.animation = 'none';
    mainImage.src = images[newIndex];

    // Trigger reflow
    void mainImage.offsetWidth;

    // Animate new image in
    mainImage.style.animation = `${incomingAnim} 0.5s forwards`;

    // Remove old image after animation
    setTimeout(() => oldImage.remove(), 500);

    // Update thumbnails
    document.querySelectorAll(".thumbnail-bar img").forEach((img, idx) => {
        img.classList.toggle("selected", idx === newIndex);
    });

    scrollThumbnailIntoView(newIndex);

    currentIndex = newIndex;
  }

  function scrollThumbnailIntoView(index) {
    const thumbnails = document.querySelectorAll(".thumbnail-bar img");
    const selected = thumbnails[index];
    if (!selected) return;

    const barRect = thumbnailBar.getBoundingClientRect();
    const thumbRect = selected.getBoundingClientRect();
    const offset = thumbRect.left - barRect.left - (barRect.width / 2) + (thumbRect.width / 2);

    thumbnailBar.scrollBy({
      left: offset,
      behavior: 'smooth'
    });
  }

  // Arrows
  prevBtn.addEventListener("click", () => changeImage((currentIndex - 1 + images.length) % images.length, 'left'));
  nextBtn.addEventListener("click", () => changeImage((currentIndex + 1) % images.length, 'right'));

  // Keyboard arrows
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });

  // Draggable thumbnail bar
  let isDown = false, startX, scrollLeft;
  thumbnailBar.addEventListener('mousedown', (e) => {
    isDown = true;
    thumbnailBar.classList.add('active');
    startX = e.pageX - thumbnailBar.offsetLeft;
    scrollLeft = thumbnailBar.scrollLeft;
    e.preventDefault();
  });
  thumbnailBar.addEventListener('mouseleave', () => isDown = false);
  thumbnailBar.addEventListener('mouseup', () => isDown = false);
  thumbnailBar.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - thumbnailBar.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    thumbnailBar.scrollLeft = scrollLeft - walk;
  });
});