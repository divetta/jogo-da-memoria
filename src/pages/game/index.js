(function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();

  const $pointBar = pointBar.create();
  const $startButton = startButton.create();
  const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Livro de C++"
  });
  const $memoryCardJS = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Livro de JavaScript"
  });
  const $memoryCardJava = createMemoryCard({
    src: "img/icon-java.png",
    alt: "Livro de Java"
  });
  const $memoryCardWoman = createMemoryCard({
    src: "img/icon-woman.png",
    alt: "Icone de uma mulher codando"
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentHTML("beforeend", $startButton);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
})();
