// create some divs 4 by 4
// create an array with different alphabets
// 

const array = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"];

randomArray = Math.floor(Math.random() * 16);

const random = array[randomArray];
console.log(random);



const allDivs = document.querySelectorAll(".tic");
const allImgs = document.querySelectorAll(".img");

// allDivs.forEach((div) => {
//     div.addEventListener("click", (event) => {
//         if (div.innerText.length == 0) {
//             div.innerText = random;
//         }
//     }

//     );
// });
// const loop = () => {
//     for (let i = 0; i<allImgs.length; i++){
//         allDivs[i].addEventListener("click",displayCard)

//     }

// }

allImgs.forEach((img) => {
    img.addEventListener("click", (event) => {
    
        $(".img").click(function() {
        $(this).show();

    });

});
   $(".img").css("visibility", "hidden");
});


allImgs.forEach((img) => {
   
});



  




// if (allImgs.innerText.css.visibility == "hidden"){
    //             allImgs.innerText.css.visibility == "visible";
    // $(".img").click(function(){
    //     $(this).toggle();


    // })





// let i = array.length , j , temp;

// while (--i>0) {
//     randomNumber = Math.floor(Math.random() * (i+1));
//     temp = array[randomNumber];
//     array[randomNumber] = array[i];
//     array[i] = temp;
// }
//     div.innerText = array
// console.log(array);
