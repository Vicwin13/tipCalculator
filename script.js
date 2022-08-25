let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let custom = document.querySelector("#custom");
let tipPercentage = document.querySelectorAll(".tipping");
let tipAmountPerPerson = document.getElementById("tipPrice");
let totalAmountPerPerson = document.getElementById("totalPrice");

let billAmount = 0;
let peopleAmount = 0;
let tipPercent = 0;
let customAmount = 0;

bill.addEventListener("keyup", (e) => {
  billAmount = Number(e.target.value);
  calculateTip();
});

people.addEventListener("keyup", (e) => {
  peopleAmount = Number(e.target.value);
  calculateTip();
});

custom.addEventListener("keyup", (e) => {
  customAmount = Number(e.target.value);
  calculateTip();
});

Array.from(tipPercentage).forEach((tip) =>
  tip.addEventListener("click", (e) => {
    if (e.target.innerText.includes("%")) {
      tipPercent = Number(e.target.innerText.replace("%", ""));
      console.log("update:", tipPercent);
      calculateTip();
    }
  })
);

function calculateTip() {
  let tipAmount = billAmount * (tipPercent / 100);
  let totalAmount = billAmount + tipAmount;
  let tipAmountPerPerson = tipAmount / peopleAmount;
  let totalAmountPerPerson = totalAmount / peopleAmount;

  console.log({
    tipAmount,
    totalAmount,
    tipAmountPerPerson,
    totalAmountPerPerson,
  });

  updateValues({
    tipAmountPerPerson,
    totalAmountPerPerson,
  });
}

function updateValues({ tipAmountPerPerson, totalAmountPerPerson }) {
  tipAmountPerPerson.innerText =
    tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);

  totalAmountPerPerson.innerText =
    totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);

  // console.log((tipAmountPerPerson.innerText = "worked"));
}
