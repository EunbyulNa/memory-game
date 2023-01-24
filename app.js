const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;
let msg = document.querySelector(".msg");
let btn = document.querySelector(".btn");


//Add player lives count
playerLivesCount.textContent = playerLives;

//card game data
let cardsData = [
  {imgSrc: "./imgs/01.jpg", name:"01"},
  {imgSrc: "./imgs/02.jpg", name:"02"},
  {imgSrc: "./imgs/03.jpg", name:"03"},
  {imgSrc: "./imgs/04.jpg", name:"04"},
  {imgSrc: "./imgs/05.jpg", name:"05"},
  {imgSrc: "./imgs/06.jpg", name:"06"},
  {imgSrc: "./imgs/01.jpg", name:"01"},
  {imgSrc: "./imgs/02.jpg", name:"02"},
  {imgSrc: "./imgs/03.jpg", name:"03"},
  {imgSrc: "./imgs/04.jpg", name:"04"},
  {imgSrc: "./imgs/05.jpg", name:"05"},
  {imgSrc: "./imgs/06.jpg", name:"06"},
]

document.addEventListener( "DOMContentLoaded", function() {
  random();
  displayCards();
});

//randomize cards data
function random() {
  cardsData.sort( () => Math.random() - 0.5);
  return cardsData;
}

//display it
 function displayCards() {
    cardsData.forEach( (item) => {
    //createElement
    let card = document.createElement("div");
    let face = document.createElement("img");
    let back = document.createElement("div");

    //add ClassList
    card.classList.add('card');
    face.classList.add('face');
    back.classList.add('back');

    //Attach the img src to faceImg div
    face.src = item.imgSrc;
    //Attach the data name attribute to each card
    card.setAttribute("name", item.name)

    //Append child element to parentElement
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

  });

  //each card click event
  let cards = document.querySelectorAll('.card');
  cards.forEach( (card) => {
    card.addEventListener("click", function(e) {
      card.classList.toggle('toggleCard');
      card.style.pointerEvents = "all";
      checkCard(e);
    });
  });

  //empty the msg
   msg.innerHTML = "";
   btn.style.display = "none";
};


function checkCard(e) {
   let checked = e.target; //clicked card
   let toggleCards = document.querySelectorAll(".toggleCard");

   //add flipped classlist to the clicked card div
   checked.classList.add('flipped');
   let flippedCards = document.querySelectorAll(".flipped");

   //check flippedCards are matched or not
  if(flippedCards.length === 2){
    if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){

      //When they match
      flippedCards.forEach( (card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = "none";
      })

    }else{
     //When they are not match
      flippedCards.forEach( (card) => {
        card.classList.remove('flipped');
        setTimeout( () => {
          card.classList.remove('toggleCard');
        },1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
    }

    //When loose the game
    if(playerLives === 0){
      toggleCards.forEach( (card) => {
        card.classList.remove("toggleCard");
      })

    let cards = document.querySelectorAll(".card");
    cards.forEach( (card) => {
        card.style.pointerEvents = "none";
    });

    looseMsg();
    restartGame();
    }
  }
  //check if the user won the game or not
  if(toggleCards.length === 12) {
   winMsg();
   restartGame();
  }
}



function winMsg() {

  btn.style.display = "block";
  msg.innerHTML = "Yay! well done!";
  btn.innerHTML = "Play again";

}

function looseMsg() {

  btn.style.display = "block";
  msg.innerHTML = "You lose";
  btn.innerHTML = "Try again";

}

function restartGame() {
  btn.addEventListener("click", function () {
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    section.innerHTML = '';
    random();
    displayCards();
  })
}
