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
      id: "password",
      placeholder: "suasenh@",
      type: "password"
    });

    const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forgot password?"
    });

    const $btnCollabcode = btnCollabcode.render({
      content: "Login",
      path: "game"
    });

    return `
      ${$usernameLabel}
      ${$usernameInput}
      ${$passwordLabel}
      ${$passwordInput}

      ${$eyeCollabcode}

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
