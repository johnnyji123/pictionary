
window.onload = () => {

    // setTimeout(()=> {
    //     allImgs.style.display = "block";
    // }, 500);
    hideModal();

}

const board = document.querySelector('#board');

const allDivs = document.querySelectorAll(".card");
const allImgs = document.querySelectorAll(".img");
const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];
const restart = document.getElementById("restart");
const playAgain = document.getElementById("again");
const timer = document.getElementById("timer");
const instructions = document.getElementById("instructions");
const secondModal = document.getElementById ("modal2");
const closeSecond = document.getElementById ("close2");
const gotIt = document.getElementById("understood");



const none = () => {
    secondModal.style.display = "none";
}
none();


const showModal = () => {
    instructions.addEventListener("click",() => {
        secondModal.style.display = "block";
       
      
    });
   
};
showModal();


const closeSecondModal = () => {
    closeSecond.addEventListener("click", () => {
        secondModal.style.display = "none";
        
    });
};

closeSecondModal();

const closeButton = () => {
    gotIt.addEventListener("click", () =>{
        secondModal.style.display="none";
    });
};

closeButton();

const randomise = () => {
    const letters = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h"];
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
}

let checkList = [];
let allMatch = [];

randomise();

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

const hideModal = () => {
    modal.style.display = "none";
}


const winMessasge = () => {
    allMatch.push(checkList[0])
    allMatch.push(checkList[1]);
    if (allMatch.length == 16) {
        modal.style.display = "block";
        closeM();
    }
}


const closeM = () => {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

}

playAgain.addEventListener("click",() => {
    modal.style.display = "none";
    reset();
})

restart.addEventListener("click", () => {
    reset();
    
  
    
});

const reset = () => {
    checkList = [];
    allMatch = [];
    board.innerHTML = "";
    randomise();
    addListeners();
}


const empty = () => {
    return checkList.length = 0
}



const addListeners = () => {
    $("img").css("display", "none");
    $(".card").click((event) => {
        $(event.target).children().first().css("display", "block");
           

        if (event.target.classList.contains("card")) {
            checkList.push(event.target);
        }if (checkList.length == 2) {
            console.log('do check!');
            checkCards();
            
        
        }
       
    });
}

addListeners();


timer.innerText = 0;
let second = 0;
let minute = 0;

const timeIt = () => {
    
    timer.innerText = `${minute} mins ${second} secs`;
    second++
    if (second == 60){
        minute++
        second= 0;
       
        
    }

}

// clearInterval(timeIt, 1000);
setInterval(timeIt, 1000);




// let moves = 0;
// let move = document.getElementById("moves");

// const counter = () => {
//    if (checkList.length == 1){
//        move.innerHTML = moves++
       
      
// } else if (moves == 1){
//     timeIt();
//     console.log("woerawf")
// }
// };

// counter();

