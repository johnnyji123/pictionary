





const letters = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h"];
console.log(letters[0]);

const board = document.querySelector('#board');
let openedCards = [];
let matched = [];

const allDivs = [...document.querySelectorAll(".card")];
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

//counter to check if two cards turned over
//when two cards turned over, you want to do a check - if first card = second card classlist.
//if they don't match = hide them both - reset counter

// when you click on a card (and it's hidden)
// add the div to an array called 'checkList'
// when there's two divs in the checklist... check them!
//      check by comparing the classlist of each one
//      if they're the same, great! Need to rest the checklist
//      if they're not the same, you need to hide them both again and reset the checklist

const cardOpen = () => {
    if (div.classList[letters[0]] == div.classList[letters[1]]) {
        matchedCards();
    } else if (div.classList[letters[0]] == div.classList[letters[2]]) {
        matchedCards();
    } else {
        unmatched();

        console.log("heloo!!!!");
    }
}

    const matchedCards = () => {
        $(".card").click((event) => {
            $(event.target).children().first().css("display", "none")
        })

    }


    const unMatched = () => {
        $(".card").click((event) => {
            $(event.target).children().first().css("display", "block");
        });

    };

    $("img").css("display", "none");

    $(".card").click((event) => {
        $(event.target).children().first().css("display", "block");
        console.log("click!");
    })


