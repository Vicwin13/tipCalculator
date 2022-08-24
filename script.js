let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let tipPercentage = document.querySelectorAll(".tipping");

let billAmount = 0;
let peopleAmount = 0;

bill.addEventListener("keyup", (e) => {
  billAmount = Number(e.target.value);
});

people.addEventListener("keyup", (e) => {
  peopleAmount = Number(e.target.value);
});

Array.from(tipPercentage).forEach((tipPercentage) =>
  tipPercentage.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  })
);
