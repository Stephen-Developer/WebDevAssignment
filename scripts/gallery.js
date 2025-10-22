(() => {
  if (typeof units === "undefined") {
    console.error("Units data not found");
    return;
  }

  const mainImage = document.getElementById("mainImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbnailBar = document.getElementById("thumbnail-bar");

  if (!mainImage || !thumbnailBar) return;

  const images = units.map(u => ({
    src: u.image,
    alt: u.name
  }));

  let currentIndex = 0;

  // Setup Thumbnails
  images.forEach((img, i) => {
    const thumb = document.createElement("img");
    thumb.src = img.src;
    thumb.alt = img.alt;
    if (i === currentIndex) thumb.classList.add("selected");
    thumb.addEventListener("click", () =>
      changeImage(i, i > currentIndex ? "right" : "left")
    );
    thumbnailBar.appendChild(thumb);
  });

  function changeImage(newIndex, direction) {
    if (newIndex === currentIndex) return;

    const oldImage = mainImage.cloneNode();
    oldImage.src = mainImage.src;
    mainImage.parentNode.appendChild(oldImage);

    const inAnim = direction === "right" ? "slideInRight" : "slideInLeft";
    const outAnim = direction === "right" ? "slideOutLeft" : "slideOutRight";

    oldImage.style.animation = `${outAnim} 0.5s forwards`;
    mainImage.style.animation = "none";
    mainImage.src = images[newIndex].src;
    mainImage.alt = images[newIndex].alt;
    void mainImage.offsetWidth; // reflow
    mainImage.style.animation = `${inAnim} 0.5s forwards`;
    setTimeout(() => oldImage.remove(), 500);

    document
      .querySelectorAll(".thumbnail-bar img")
      .forEach((img, idx) => img.classList.toggle("selected", idx === newIndex));

    scrollThumbnailIntoView(newIndex);
    currentIndex = newIndex;
  }

  function scrollThumbnailIntoView(index) {
    const thumbnails = thumbnailBar.querySelectorAll("img");
    const selected = thumbnails[index];
    if (!selected) return;

    const barRect = thumbnailBar.getBoundingClientRect();
    const thumbRect = selected.getBoundingClientRect();
    const offset =
      thumbRect.left - barRect.left - barRect.width / 2 + thumbRect.width / 2;

    thumbnailBar.scrollBy({ left: offset, behavior: "smooth" });
  }

  prevBtn?.addEventListener("click", () =>
    changeImage((currentIndex - 1 + images.length) % images.length, "left")
  );
  nextBtn?.addEventListener("click", () =>
    changeImage((currentIndex + 1) % images.length, "right")
  );

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") prevBtn?.click();
    if (e.key === "ArrowRight") nextBtn?.click();
  });

  // Draggable thumbnails
  let isDown = false, startX = 0, scrollLeft = 0;
  thumbnailBar.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - thumbnailBar.offsetLeft;
    scrollLeft = thumbnailBar.scrollLeft;
    e.preventDefault();
  });
  ["mouseleave", "mouseup"].forEach(ev =>
    thumbnailBar.addEventListener(ev, () => (isDown = false))
  );
  thumbnailBar.addEventListener("mousemove", e => {
    if (!isDown) return;
    const x = e.pageX - thumbnailBar.offsetLeft;
    const walk = (x - startX) * 2;
    thumbnailBar.scrollLeft = scrollLeft - walk;
  });
})();