const searchInput = document.getElementById("resource-search");
const resourceCards = Array.from(document.querySelectorAll(".resource-card"));

if (searchInput && resourceCards.length) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();

    resourceCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const tags = (card.dataset.tags || "").toLowerCase();
      const matched = !term || text.includes(term) || tags.includes(term);

      card.classList.toggle("is-hidden", !matched);
    });
  });
}
