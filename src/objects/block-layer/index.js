const blockLayer = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .block-layer {
        z-index: 1;
        position: absolute;
        opacity: 0.8;
        height: 100%;
        width: 100%;
        background-color: black;
        transition: opacity 1.5s 1.5s linear, z-index 1.5s 1.5s step-start;
      }

      .block-layer.-deactivate {
        opacity: 0;
        z-index: -1;
        transition: opacity 1.5s 1.5s linear, z-index 1.5s 1.5s step-end;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <div class="block-layer"></div>
    `;
  };

  return {
    create: module.create
  };
})();
