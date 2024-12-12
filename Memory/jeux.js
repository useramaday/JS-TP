let tab1 = [];
for (let i = 0; i <= 11; i++) {
  tab1.push(i);
}

let tab2 = tab1.concat(tab1);

function melanger(tab) {
  let shuffled = [];
  for (let i = 0; i < tab.length; i++) {
    let x;
    do {
      x = Math.floor(Math.random() * tab.length);
    } while (shuffled[x] != undefined);
    shuffled[x] = tab[i];
  }
  return shuffled;
}

tab2 = melanger(tab2);

let firstCard = null;
let secondCard = null;
let startTime = null;
let timerInterval = null;

function startTimer() {
  const timerElement = document.getElementById("timer");
  startTime = new Date();
  timerInterval = setInterval(() => {
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    timerElement.innerHTML = `Temps : ${elapsedTime} secondes`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function gameDone() {
  if (tab2.length === 0) {
    stopTimer();
    const totalTime = Math.floor((new Date() - startTime) / 1000);
    console.log("tableau vide");
    alert(`Félicitations ! Vous avez gagné en ${totalTime} secondes !`);
    setTimeout(resetGame, 4000);
  } else {
    console.log("tableau PAS vide");
  }
}

function resetGame() {
  tab2 = melanger(tab1.concat(tab1));

  const container = document.querySelector(".container");
  container.innerHTML = "";

  const timerElement = document.getElementById("timer");
  timerElement.innerHTML = "Temps : 0 secondes";

  startTimer();
  ManageCard();
}

function ManageCard() {
  const container = document.querySelector(".container");
  for (let i = 0; i < tab2.length; i++) {
    const template = document.getElementById("individualCard");
    const clone = template.content.cloneNode(true);

    const imageNumber = tab2[i];

    const imageIndex = clone.querySelector("img");
    imageIndex.src = `img/${imageNumber}.webp`;
    container.appendChild(clone);

    imageIndex.onclick = () => {
      if (imageIndex.classList.contains("click")) {
        return;
      }
      imageIndex.classList.add("click");

      if (firstCard == null) {
        firstCard = { imageNumber, imageElement: imageIndex };
        return;
      }
      secondCard = { imageNumber, imageElement: imageIndex };

      if (firstCard.imageNumber === secondCard.imageNumber) {
        firstCard.imageElement.remove();
        secondCard.imageElement.remove();

        const firstIndex = tab2.indexOf(firstCard.imageNumber);
        if (firstIndex > -1) tab2.splice(firstIndex, 1);
        const secondIndex = tab2.indexOf(secondCard.imageNumber);
        if (secondIndex > -1) tab2.splice(secondIndex, 1);

        firstCard = null;
        secondCard = null;

        gameDone();
      } else {
        firstCard.imageElement.classList.remove("click");
        secondCard.imageElement.classList.remove("click");

        firstCard = null;
        secondCard = null;
      }
    };
  }
}

startTimer();
ManageCard();
