const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//Add player lives count
playerLivesCount.textContent = playerLives;

//card game data, return object in an array
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

function random() {
  cardsData.sort( () => Math.random() - 0.5);
  return cardsData;
}


 function displayCards() {
    let randomCards = random();

    randomCards.forEach( (item) => {
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

    //Append child each element to parentElement
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    //each card click event 
    card.addEventListener("click", function() {
      card.classList.toggle('toggleCard')
    })
  })



}

displayCards()
