let bill = document.getElementById("bill");
let people = document.getElementById("people");
let customNumber = document.getElementById("custom");
let reset = document.getElementById("reset");
let errorMessage = document.getElementById("errorMessage");
let tipping = document.querySelectorAll(".tipping");



    document.addEventListener("keydown", calculate)
    
    function calculate(){
   
        if (event.keyCode == 13 && people.value == "" || people.value === "0") {
        console.log(bill.value);
        errorMessage.innerHTML = "can't be zero";
        errorMessage.style.color="red";
        }
        
    }

    tipping.forEach( tip=>{

        tip.addEventListener("click", function(){
            console.log(tipping.value);
        })

    })


    





