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
    const $usernameLabel = labelCollabcode.render({
      content: "Username ou e-mail",
      labelfor: "email"
    });
    const $usernameInput = inputCollabcode.render({
      id: "email",
      placeholder: "seuemail@gmail.com",
      type: "email",
      required: true
    });
    const $usernameSpan = spanCollabcode.render("email");

    const $passwordLabel = labelCollabcode.render({
      content: "Password",
      labelfor: "password"
    });
    const $passwordInput = inputCollabcode.render({
      id: "password",
      placeholder: "suasenh@",
      type: "password",
      required: true
    });
    const $passwordSpan = spanCollabcode.render("password");

    const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forgot password?"
    });

    const $btnCollabcode = btnCollabcode.render({
      content: "Login"
    });

    return `
      ${$usernameLabel}
      ${$usernameInput}
      ${$usernameSpan}

      ${$passwordLabel}
      ${$passwordInput}
      ${$passwordSpan}

      ${$eyeCollabcode}

      ${$linkCollab}
      ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();

    return `<form id="form" class="form-login" method="POST" action="" novalidate>${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
