"use strict";

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

$("#generate").addEventListener("click", () => {
  const length = +$("#length").value;
  const hasLower = $("#lowercase").checked;
  const hasUpper = $("#uppercase").checked;
  const hasNumber = $("#numbers").checked;
  const hasSymbol = $("#symbols").checked;

  $("#result").innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

$("#clipboard").addEventListener("click", () => {
  const password = $("#result").innerText;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard!");
});

function generatePassword(lower, upper, number, symbol, length) {
  const typesCount = lower + upper + number + symbol;
  if (typesCount === 0) {
    return "";
  }

  let generatedPassword = "";

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
