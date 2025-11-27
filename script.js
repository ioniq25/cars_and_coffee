document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signupForm");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageBox = document.querySelector("#form-messages");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    messageBox.innerHTML = "";
    messageBox.className = "";
    messageBox.style.display = "none";

    let errors = [];

    if (nameInput.value.trim().length < 2) {
      errors.push("Please enter your full name.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      errors.push("Please enter a valid email address.");
    }

    if (errors.length > 0) {
      messageBox.classList.add("error");
      messageBox.style.display = "block";
      messageBox.innerHTML = errors.join("<br>");
      return;
    }

    messageBox.classList.add("success");
    messageBox.style.display = "block";
    messageBox.innerHTML = "Thank you for signing up!";
    form.reset();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signupForm");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageBox = document.querySelector("#form-messages");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    messageBox.innerHTML = "";
    messageBox.className = "";
    messageBox.style.display = "none";

    let errors = [];

    if (nameInput.value.trim().length < 2) {
      errors.push("Please enter your full name.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      errors.push("Please enter a valid email address.");
    }

    if (errors.length > 0) {
      messageBox.classList.add("error");
      messageBox.style.display = "block";
      messageBox.innerHTML = errors.join("<br>");
      return;
    }

    messageBox.classList.add("success");
    messageBox.style.display = "block";
    messageBox.innerHTML = "Thank you for signing up!";
    form.reset();
  });
});
