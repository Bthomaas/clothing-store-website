document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("product-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalPrice = document.getElementById("modal-price");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close-button");

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalPrice.textContent = card.dataset.price;
      modalImage.src = card.dataset.image;
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
