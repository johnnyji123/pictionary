
window.onload = () => {

    // setTimeout(()=> {
    //     allImgs.style.display = "block";
    // }, 500);

}



const letters = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h"];
console.log(letters[0]);

const board = document.querySelector('#board');
let openedCards = [];
let matched = [];

const allDivs = document.querySelectorAll(".card");
const allImgs = document.querySelectorAll(".img");

while (letters.length > 0) {
    const random = Math.floor(Math.random() * letters.length);
    const letter = letters.splice(random, 1);
    const div = document.createElement('div');
    div.classList = `card ${letter}`;
    const img = document.createElement('img');
    img.src = `/images/${letter}.png`;
    div.appendChild(img);
    board.appendChild(div);

}

const checkList = [];
const allMatch = [];



// when you click on a card
// push the div to an array called 'checkList'
// when there's two divs in the checklist... check them! checkList.length
//      check by comparing the classlist of each one
//      if they're the same, great! Need to rest the checklist
//      if they're not the same, you need to hide them both again and reset the checklist

// $(".card").click((event) => {
//     $(event.target).children().first().checkList.push($(div.classList));

// })

const checkCards = () => {
    console.log('checking!');
    if (checkList[0].getAttribute("class") !== checkList[1].getAttribute("class")) {
        setTimeout(() => {
            checkList[0].children[0].style.display = "none";
            checkList[1].children[0].style.display = "none";
            empty();
        }, 500);

        console.log("hola");
    } else {
        empty();
        winMessasge();
        console.log("goodbye");
        console.log(checkList);
    }
}

const winMessasge = () => {
    allMatch.push(checkList[0])
    allMatch.push(checkList[1]);
    if (allMatch.length == 16) {

        alert("you win");

    }

}



// Your original program still WANTS to check

// but the if statement is never true after you find a correct pair

// // you have to work out why 


const empty = () => {
    return checkList.length = 0
}




$("img").css("display", "none");

$(".card").click((event) => {
    $(event.target).children().first().css("display", "block");
    checkList.push(event.target);
    console.log('click!');
    if (checkList.length == 2) {
        console.log('do check!');
        checkCards();
    }
    // console.log(checkList);
    // checks if 2 things in checklist
    // if they are: call a function that compares them
})


// show the board at the start - delay hidden?
// you win message when all cards match
// restart button to play the game again