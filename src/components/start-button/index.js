const startButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .start-button {
        background-color: #2ed573;
        color: #fffcee;
        height: 100px;
        width: 100px;
        text-align: center;
        font-family: 'Comfortaa', sans-serif;
        font-weight: bold;
        font-size: 1.05em;
        border-radius: 50%;
        border: 3px solid #fffcee;
        z-index: 2;
        position: absolute;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 4px 8px #3a4042;
        cursor: pointer;
        opacity: 1;
        transition: opacity 1.5s linear, z-index 1.5s step-start;
      }

      .start-button.-deactivate {
        opacity: 0;
        z-index: -1;
        transition: opacity 1.5s linear, z-index 1.5s step-end;        
      }
    `;
    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <button class="start-button" onClick="startButton.handleClick()">START</button>
    `;
  };

  module.handleClick = () => {
    document.querySelector(".start-button").classList.toggle("-deactivate");
    document.querySelector(".block-layer").classList.toggle("-deactivate");

    store.score = 0;
    qtdActiveMemoryCard = 0;

    document.querySelector(".point-bar > .number").textContent = store.score;

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
