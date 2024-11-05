const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const form = document.getElementById("form");

const validateForm = () => {};

// Function to display error message
const setErrorMessage = (element, message) => {
  const elemParent = element.parentElement;
  const errorDisplay = elemParent.querySelector(".error-message");

  errorDisplay.innerText = message;
  elemParent.classList.add("error");
  elemParent.classList.remove("success");
};

// Function to set success state
const setSuccess = (element) => {
  const elemParent = element.parentElement;
  elemParent.querySelector(".error-message").innerText = ""; // Clear error message
  elemParent.classList.add("success");
  elemParent.classList.remove("error");
};

// Apply required attribute to all inputs
const setValidationConstraints = (() => {
  form.querySelectorAll("input").forEach((element) => {
    element.setAttribute("required", true);
  });
})();

// Function to check email validity
const checkEmailValidity = () => {
  if (email.checkValidity() || email.value == "") {
    setSuccess(email);
  } else {
    setErrorMessage(email, "Please enter a valid email address.");
  }
};

email.addEventListener("input", checkEmailValidity);
email.addEventListener("change", checkEmailValidity);
