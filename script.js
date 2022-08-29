let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let custom = document.querySelector("#custom");
let tipPercentage = document.querySelectorAll(".tipping");
let tipAmountPerPerson = document.querySelector(".amount-tip");
let totalAmountPerPerson = document.querySelector(".amount-total");
let actualTip = document.querySelector(".again");
let actualTotal = document.querySelector(".again-total");
let error = document.getElementById("errorMessage");

let billAmount = 0;
let peopleAmount = 0;
let tipPercent = 0;
let customAmount = 0;

bill.addEventListener("keyup", (e) => {
  billAmount = Number(e.target.value);
  calculateTip();
  customCalc();
});

people.addEventListener("keyup", (e) => {
  peopleAmount = Number(e.target.value);
  calculateTip();
  customCalc();
});

custom.addEventListener("keyup", (e) => {
  customAmount = Number(e.target.value);
  customCalc();
});

Array.from(tipPercentage).forEach((tip) =>
  tip.addEventListener("click", (e) => {
    if (e.target.innerText.includes("%")) {
      e.target.classList.add("active");
      tipPercent = Number(e.target.innerText.replace("%", ""));
      calculateTip();
      addActiveClass(e.target.innerText);
    }
  })
);

function calculateTip() {
  let tipAmount = billAmount * (tipPercent / 100);
  let totalAmount = billAmount + tipAmount;
  let tipAmountPerPerson = tipAmount / peopleAmount;
  let totalAmountPerPerson = totalAmount / peopleAmount;

  updateValues({
    tipAmountPerPerson,
    totalAmountPerPerson,
  });
}

function customCalc() {
  let tipAmount = billAmount * (customAmount / 100);
  let totalAmount = billAmount + tipAmount;
  let tipAmountPerPerson = tipAmount / peopleAmount;
  let totalAmountPerPerson = totalAmount / peopleAmount;

  customUpdate({
    tipAmountPerPerson,
    totalAmountPerPerson,
  });
}

function customUpdate({ tipAmountPerPerson, totalAmountPerPerson }) {
  actualTip.innerText =
    tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
  actualTotal.innerText =
    totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
}

function updateValues({ tipAmountPerPerson, totalAmountPerPerson }) {
  actualTip.innerText =
    tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
  actualTotal.innerText =
    totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);

  if (people.value == 0) {
    error.classList.add("active");
  } else {
    error.classList.remove("active");
  }
}

function addActiveClass(percentage) {
  Array.from(tipPercentage).forEach((tip) => {
    if (tip.innerText == percentage) {
      tip.classList.add("active");
    } else {
      tip.classList.remove("active");
    }
  });
}
