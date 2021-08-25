let X = document.querySelector(".xBtn");
let O = document.querySelector(".oBtn");
let katak = document.querySelectorAll("td");
let btns = document.querySelector(".btns");
let user1 = null;
let user2 = null;
let none = "***";
let turn = true;
let count = 1;
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let win1 = document.querySelector(".win1");
let win2 = document.querySelector(".win2");
let tie = document.querySelector(".tie");
let next = document.querySelector(".next");
let draw = document.querySelector(".draw");

X.addEventListener("click", () => {
    user1 = "X"
    user2 = "O"
    btns.style.cssText = "display: none"
});

O.addEventListener("click", () => {
    user1 = "O"
    user2 = "X"
    btns.style.cssText = "display: none"
});

let winningPosition = [
    [one, two, three],
    [four, five, six],
    [seven, eight, nine],
    [one, four, seven],
    [two, five, eight],
    [three, six, nine],
    [one, five, nine],
    [three, five, seven]
];

function win() {
    winningPosition.forEach((item) => {
        for (let i = 0; i < item.length; i++) {
            if (item[0].textContent == "X" && item[1].textContent == "X" && item[2].textContent == "X") {
                win1.style.cssText = "display: block;";
                item[0].style.cssText = "color: red;";
                item[1].style.cssText = "color: red;";
                item[2].style.cssText = "color: red;";
                draw.style.cssText = "display: none;";
                next.style.cssText = "display: block;";
                noneFunctionX();
            } else if (item[0].textContent == "O" && item[1].textContent == "O" && item[2].textContent == "O") {
                win2.style.cssText = "display: block;";
                item[0].style.cssText = "color: red;";
                item[1].style.cssText = "color: red;";
                item[2].style.cssText = "color: red;";
                draw.style.cssText = "display: none;";
                next.style.cssText = "display: block;";
                noneFunctionO();
            }
        }
    });
}

