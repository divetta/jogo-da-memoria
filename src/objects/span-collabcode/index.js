const spanCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .error {
        width: 100%;
        padding: 0;
      
        font-size: 80%;
        color: white;
        background-color: #900;
        border-radius: 0 0 5px 5px;
      
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      
      .error.active {
        padding: 0.3em;
      }   
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = spanfor => {
    module._style();

    return `<span for="${spanfor}" class="error" aria-live="polite"></span>`;
  };

  return {
    render: module.render
  };
})();
