const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardC = createMemoryCard({
  nameClass: "",
  src: "img/icon-c.png",
  alt: "Livro de C++"
});
const $memoryCardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Livro de JavaScript",
  nameClass: ""
});
const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Livro de Java",
  nameClass: ""
});
const $memoryCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "Icone de uma mulher codando",
  nameClass: ""
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
