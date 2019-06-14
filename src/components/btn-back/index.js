const btnBack = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-back {
        width: 35px;
        cursor: pointer;
        position: absolute;
        top: 0;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = event => {
    console.log(location.hash);
    event.preventDefault();
    location.hash = "#/login";
    console.log(location.hash);
    location.reload(true);
  };

  module.render = () => {
    module._style();

    return `<img class="btn-back" alt="Voltar" src="img/back-btn.png" onClick="btnBack.handleClick(event)" />`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
