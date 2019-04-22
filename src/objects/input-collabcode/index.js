const inputCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-wrapper {
        position: relative;
        display: block;
        width: 100%;        
      }

      .input-collabcode {
        display: block;
        width: 100%;
        color: #3a4042;
        fonte-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid rgb(58, 64, 66, 0.5);
        padding-top: 12px;
        padding-bottom: 12px;
        margin-bottom: 29px;
      }

      .hidden-icon {
        position: absolute;
        transform: translateY(-56px);
        right: 0;
        opacity: 0.3;
        cursor: pointer;
      }

      .hidden-icon.-active {
        opacity: 1;
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

  module.render = ({ placeholder, type = "text" }) => {
    module._style();

    return `
    <div class="input-wrapper">
      <input class="input-collabcode" type="${type}" placeholder="${placeholder}" />
      ${
        type == "password"
          ? '<img class="hidden-icon" src="img/hidden.png" onClick="inputCollabcode.handleClick(this)" />'
          : ""
      }
    </div>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
