document.addEventListener("DOMContentLoaded", function () {
  var RATE_LIMIT_MS = 10 * 60 * 1000;

  function normalize(value) {
    return (value || "").trim().replace(/\s+/g, " ");
  }

  function hasLetterOrNumber(value) {
    return /[\p{L}\p{N}]/u.test(value);
  }

  function getMessages(lang) {
    if (lang === "zh") {
      return {
        invalid: "請完整填寫所有欄位，且內容不能只有空白或符號。",
        email: "請填寫有效的聯絡信箱。",
        repeat: "系統偵測到相同資訊在 10 分鐘內已送出過，請稍後再試。"
      };
    }
    if (lang === "ja") {
      return {
        invalid: "すべての項目を入力してください。空白や記号だけの内容は送信できません。",
        email: "有効な連絡先メールアドレスを入力してください。",
        repeat: "同じ内容は10分以内に再送信できません。しばらくしてからお試しください。"
      };
    }
    return {
      invalid: "Please complete every field with content that is not only whitespace or symbols.",
      email: "Please enter a valid email address.",
      repeat: "The same contact information was submitted within the last 10 minutes. Please try again later."
    };
  }

  async function digest(text) {
    if (!window.crypto || !window.crypto.subtle) return text;
    var data = new TextEncoder().encode(text);
    var hash = await window.crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
      .map(function (byte) {
        return byte.toString(16).padStart(2, "0");
      })
      .join("");
  }

  function setError(form, message) {
    var error = form.querySelector("[data-contact-error]");
    if (!error) return;
    error.textContent = message;
    error.hidden = !message;
  }

  document.querySelectorAll("[data-contact-form]").forEach(function (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      var lang = form.dataset.lang || "en";
      var messages = getMessages(lang);
      var fields = Array.from(form.querySelectorAll("[data-contact-field]"));
      var values = {};

      setError(form, "");

      for (var i = 0; i < fields.length; i += 1) {
        var field = fields[i];
        var value = normalize(field.value);
        values[field.name] = value;
        field.value = value;

        if (!value || !hasLetterOrNumber(value)) {
          setError(form, messages.invalid);
          field.focus();
          return;
        }
      }

      var emailInput = form.querySelector('input[name="email"]');
      if (!emailInput || !emailInput.checkValidity()) {
        setError(form, messages.email);
        if (emailInput) emailInput.focus();
        return;
      }

      var fingerprint = [
        values.email.toLowerCase(),
        values.name.toLowerCase(),
        values.affiliation.toLowerCase(),
        values.subject.toLowerCase(),
        values.message.toLowerCase()
      ].join("|");
      var key = "prime-lab-contact:" + await digest(fingerprint);
      var lastSent = Number(window.localStorage.getItem(key) || 0);
      var now = Date.now();

      if (lastSent && now - lastSent < RATE_LIMIT_MS) {
        setError(form, messages.repeat);
        return;
      }

      var subjectInput = form.querySelector("[data-contact-subject]");
      var hiddenSubject = form.querySelector('input[name="_subject"]');
      var replyTo = form.querySelector("[data-contact-replyto]");
      var subject = subjectInput && subjectInput.value ? subjectInput.value.trim() : "Website contact";
      hiddenSubject.value = "[contact from website] " + subject;
      if (replyTo && emailInput) replyTo.value = emailInput.value.trim();
      window.localStorage.setItem(key, String(now));

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
