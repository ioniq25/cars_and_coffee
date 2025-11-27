// signup form validation with regex, inline error messages, ARIA, and thank-you screen
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".signup-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("successMessage");

  // --- ARIA setup ---
  nameInput.setAttribute("aria-describedby", "nameError");
  emailInput.setAttribute("aria-describedby", "emailError");
  nameError.setAttribute("role", "alert");
  emailError.setAttribute("role", "alert");
  successMessage.setAttribute("role", "status");
  successMessage.setAttribute("aria-live", "polite");

  // helper function to show error
  function showError(element, message, input) {
    element.textContent = message;
    element.classList.remove("d-none");
    input.setAttribute("aria-invalid", "true");
  }

  // helper function to clear error
  function clearError(element, input) {
    element.textContent = "";
    element.classList.add("d-none");
    input.removeAttribute("aria-invalid");
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from submitting

    // clear old errors & success
    clearError(nameError, nameInput);
    clearError(emailError, emailInput);
    successMessage.textContent = "";
    successMessage.classList.add("d-none");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let hasError = false;

    // name check
    if (name === "") {
      showError(nameError, "Name is required.", nameInput);
      hasError = true;
      nameInput.focus();
    }

    // email check
    if (email === "") {
      showError(emailError, "Email is required.", emailInput);
      if (!hasError) emailInput.focus();
      hasError = true;
    } else if (!emailRegex.test(email)) {
      showError(emailError, "Please enter a valid email address.", emailInput);
      if (!hasError) emailInput.focus();
      hasError = true;
    }

    // if everything is valid
    if (!hasError) {
      // hide the form
      form.classList.add("d-none");

      // shows thankyou screen
      successMessage.innerHTML = `
        <div class="text-center">
          <h3>Thank you for signing up, ${name}!</h3>
          <button id="backButton" class="btn btn-primary mt-3">Go back to signup</button>
        </div>
      `;
      successMessage.classList.remove("d-none");

      // reset form fields
      form.reset();

      // back button event
      const backButton = document.getElementById("backButton");

      // for mouse click
      backButton.addEventListener("click", function() {
        successMessage.classList.add("d-none");
        form.classList.remove("d-none");
        nameInput.focus();
      });

      // for keyboard enter
      backButton.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          backButton.click(); // trigger the same action
        }
      });

      // to ensure Enter button works immediately
      backButton.focus();
    }
  });
});
