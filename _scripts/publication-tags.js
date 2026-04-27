document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".pub-tag-filter").forEach(function (filter) {
    var limit = Number(filter.dataset.tagLimit || 10);
    var chips = Array.from(filter.querySelectorAll(".pub-tag-filter-chip"));
    var next = filter.nextElementSibling;
    var moreButton = null;
    if (next) {
      moreButton = next.classList.contains("pub-tag-more")
        ? next
        : next.querySelector(".pub-tag-more");
    }

    chips
      .sort(function (a, b) {
        var countDiff = Number(b.dataset.count || 0) - Number(a.dataset.count || 0);
        return countDiff || a.textContent.trim().localeCompare(b.textContent.trim());
      })
      .forEach(function (chip, index) {
        chip.hidden = index >= limit;
        filter.appendChild(chip);
      });

    if (!moreButton) return;
    if (chips.length <= limit) return;

    moreButton.hidden = false;
    moreButton.addEventListener("click", function () {
      chips.forEach(function (chip) {
        chip.hidden = false;
      });
      moreButton.hidden = true;
    });
  });
});
