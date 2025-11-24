// signup form validation with regex including inline error messages
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".signup-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // this stops form from submitting

    // this clears old error messages
    nameError.textContent = "";
    emailError.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // regex for email validation, basic patterns only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let hasError = false;

    // name check
    if (name === "") {
      nameError.textContent = "Name is required.";
      hasError = true;
    }

    // email check
    if (email === "") {
      emailError.textContent = "Email is required.";
      hasError = true;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      hasError = true;
    }

    // checking if everything is valid
    if (!hasError) {
      alert("Thank you for signing up, " + name + "!");
      form.reset(); // clears the form after success submittion
    }
  });
});
