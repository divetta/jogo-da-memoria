const logoImage = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .logo-image {
        width: 171px;
        height: 175px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        border-color: red;    
        border: 39px solid #fff;
        border-radius: 50%;
        background-color: #fff;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `<img class="logo-image" src="img/icon-collabcode.png" alt="Gueio: icone da collabcode">`;
  };

  return {
    render: module.render
  };
})();
