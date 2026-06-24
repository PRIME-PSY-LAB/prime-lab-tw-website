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

    if (!moreButton || chips.length <= limit) return;

    moreButton.hidden = false;
    moreButton.addEventListener("click", function () {
      var expanded = moreButton.getAttribute("aria-expanded") === "true";
      var newExpanded = !expanded;

      chips.forEach(function (chip, index) {
        chip.hidden = !newExpanded && index >= limit;
      });

      moreButton.setAttribute("aria-expanded", String(newExpanded));
      moreButton.textContent = newExpanded
        ? moreButton.dataset.showLess
        : moreButton.dataset.showMore;
    });
  });
});
