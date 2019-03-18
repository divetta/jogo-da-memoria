const welcomeMessage = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .welcome-message {
        position: absolute;
        top: 116px;
        width: 100%;
      }

      .welcome-message > .title {
        text-transform: uppercase;
        display: block;
        color: #f25a70;
        font-size: 24px;
        text-align: center;
        letter-spacing: 0.6px;
        line-height: 1.13;
        font-weight: bold;
        height: 27px;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();

    const $logoImage = logoImage.render();

    return `
      <div class="welcome-message">
        ${$logoImage}
        <span class="title">${content}</span>
      </div>
    `;
  };

  return {
    render: module.render
  };
})();
