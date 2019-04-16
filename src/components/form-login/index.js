const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 35px 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $usernameLabel = labelCollabcode.render("Username ou e-mail");
    const $usernameInput = inputCollabcode.render({
      placeholder: "seuemail@gmail.com"
    });

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render({
      placeholder: "suasenh@",
      type: "password"
    });

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forgot password?"
    });

    const $btnCollabcode = btnCollabcode.render("Login");

    return `
      ${$usernameLabel}
      ${$usernameInput}
      ${$passwordLabel}
      ${$passwordInput}
      ${$linkCollab}
      ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();

    return `<form class="form-login" method="POST" action="">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
