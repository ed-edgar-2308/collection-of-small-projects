"use strict";

$(".form").onsubmit = function (e) {
  if ($("#username").value == "") {
    showError(username);
  } else {
    showSuccess(username);
  }

  if ($("#email").value == "") {
    showError(email);
  } else {
    showSuccess(email);
  }

  if ($("#password").value == "") {
    showError(password);
  } else if ($("#password").value.length < 6) {
    showError(password, false);
  } else {
    showSuccess(password);
  }

  if ($("#password2").value == "") {
    showError(password2);
  } else if ($("#password2").value != $("#password").value) {
    showError(password2, true, false);
  } else {
    showSuccess(password2);
  }
};

function showError(input, isLeast6Char = true, isSamePassword = true) {
  if (!isLeast6Char) {
    input.nextElementSibling.nextElementSibling.innerText =
      input.placeholder + " must be at least 6 characters";
  } else if (!isSamePassword) {
    input.nextElementSibling.nextElementSibling.innerText =
      " Password do not match";
  } else {
    input.nextElementSibling.nextElementSibling.innerText =
      input.placeholder + " is required";
  }
  input.parentNode.classList.add("error");
  input.parentNode.classList.remove("success");
}

function showSuccess(input) {
  input.nextElementSibling.nextElementSibling.innerText = "";
  input.parentNode.classList.remove("error");
  input.parentNode.classList.add("success");
}
