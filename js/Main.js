const Cards = ["Rock", "Paper", "Scissor"];
const MainContainer = document.querySelector(".Computer-P");
const RockB = document.getElementsByClassName("RockB")[0];
const PaperB = document.querySelector(".PaperB");
const NewGame = document.querySelector(".NewGame");
const ScissorB = document.querySelector(".ScissorB");
const ComputerCard = document.querySelector(".ComputerCard");
const List = document.getElementById("List");
const LocalD = localStorage.getItem("Winner");

if (LocalD != null) {
  List.innerHTML = LocalD;
}
function Randomize(card) {
  let random = Math.floor(Math.random() * Cards.length);
  let Played = Cards[random];
  if (card == Played) {
    var LocalStorageArr = localStorage.getItem("Winner");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    LocalStorageArr.push(
      `you Played <i>${card}</i> And Computer <i>${Played}</i> <span>Tie</span> <br>`
    );
    localStorage.setItem("Winner", LocalStorageArr);
  } else if (Played == "Rock" && card == "Paper") {
    var LocalStorageArr = localStorage.getItem("Winner");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    LocalStorageArr.push(
      `you Played <i>${card}</i> And Computer <i>${Played}</i> <span>you Won</span> <br>`
    );
    localStorage.setItem("Winner", LocalStorageArr);
  } else if (Played == "Paper" && card == "Scissor") {
    var LocalStorageArr = localStorage.getItem("Winner");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    LocalStorageArr.push(
      `you Played <i>${card}</i> And Computer <i>${Played}</i> <span>you Won</span> <br>`
    );
    localStorage.setItem("Winner", LocalStorageArr);
  } else if (Played == "Scissor" && card == "Rock") {
    var LocalStorageArr = localStorage.getItem("Winner");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    LocalStorageArr.push(
      `you Played <i>${card}</i> And Computer <i>${Played}</i> <span>you Won</span><br>`
    );
    localStorage.setItem("Winner", LocalStorageArr);
  } else {
    var LocalStorageArr = localStorage.getItem("Winner");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    LocalStorageArr.push(
      `you Played <i>${card}</i> And Computer <i>${Played}</i> <br><span>Looser</span> <br>`
    );
    localStorage.setItem("Winner", LocalStorageArr);
  }
  if (Played == "Rock") {
    ComputerCard.removeAttribute("src");
    ComputerCard.setAttribute("src", "./img/R.png");
    ComputerCard.setAttribute("class", "cardImg");
  } else if (Played == "Paper") {
    ComputerCard.removeAttribute("src");
    ComputerCard.setAttribute("src", "./img/p.png");
    ComputerCard.setAttribute("class", "cardImg");
  } else if (Played == "Scissor") {
    ComputerCard.removeAttribute("src");
    ComputerCard.setAttribute("src", "./img/S.png");
    ComputerCard.setAttribute("class", "cardImg");
  }
  var LocalStorageArr = localStorage.getItem("Winner");
  LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
  if (LocalStorageArr != null) {
    List.innerHTML = LocalStorageArr;
  }
}
PaperB.addEventListener("click", function () {
  Randomize("Paper");
});
RockB.addEventListener("click", function () {
  Randomize("Rock");
});
ScissorB.addEventListener("click", function () {
  Randomize("Scissor");
});

NewGame.addEventListener("click", function () {
  localStorage.clear("Winner");
  location.reload();
});
