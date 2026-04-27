document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-contact-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var subjectInput = form.querySelector("[data-contact-subject]");
      var hiddenSubject = form.querySelector('input[name="_subject"]');
      var subject = subjectInput && subjectInput.value ? subjectInput.value.trim() : "Website contact";
      hiddenSubject.value = "[contact from website] " + subject;

      var flight = form.querySelector(".contact-flight");
      if (flight) {
        flight.hidden = false;
        flight.classList.remove("is-flying");
        void flight.offsetWidth;
        flight.classList.add("is-flying");
      }

      window.setTimeout(function () {
        HTMLFormElement.prototype.submit.call(form);
        form.reset();
      }, 900);
    });
  });
});
