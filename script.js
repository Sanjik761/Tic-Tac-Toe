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
