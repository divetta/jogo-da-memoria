const startButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        background-color: #3a4042;
        color: #fff;
        height: 60px;
        width: 60px;
        text-align: center;
        font-family: 'Comfortaa', sans-serif;
        font-weight: bold;
        border-radius: 50%;
        border: 0;
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 70px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        cursor: pointer;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <button class="start-button" onClick="startButton.handleClick()">Start</button>
    `;
  };

  module.handleClick = () => {
    store.score = 0;
    qtdActiveMemoryCard = 0;

    const $pointBarNumber = document.querySelector(".point-bar > .number");
    $pointBarNumber.textContent = store.score;

    const $activeMemoryCards = document.querySelectorAll(
      ".memory-card.-active"
    );

    $activeMemoryCards.forEach($memoryCard => {
      $memoryCard.classList.remove("-active", "-ok");
    });
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
