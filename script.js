// ============================
// Part 1: Event Handling
// ============================
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "Button was clicked! Great work.";
});

// ============================
// Part 2: Interactive Elements
// ============================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Collapsible FAQ Section
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ============================
// Part 3: Form Validation
// ============================
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  let isValid = true;

  // Validate Name
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters";
    isValid = false;
  }

  // Validate Email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Validate Password (min 6 chars, must contain number)
  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    passwordError.textContent = "Password must be 6+ characters & include a number";
    isValid = false;
  }

  // Show success message
  if (isValid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
