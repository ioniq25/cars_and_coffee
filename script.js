document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".signup-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      alert("Name is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you for signing up, " + name + "!");
    form.reset();
  });
});
