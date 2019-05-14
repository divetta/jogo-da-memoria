const inputCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode {
        display: block;
        width: 100%;
        color: #3a4042;
        fonte-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid rgb(58, 64, 66, 0.5);
        padding-top: 12px;
        padding-bottom: 12px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = $component => {
    $component.classList.toggle("-active");
    $password = $component.previousSibling.previousSibling;
    if ($password.type === "password") $password.type = "text";
    else $password.type = "password";
  };

  module.render = ({ id = "", placeholder = "", type = "text" }) => {
    module._style();

    return `<input 
              id="${id}"
              class="input-collabcode" 
              type="${type}" 
              placeholder="${placeholder}" />`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
