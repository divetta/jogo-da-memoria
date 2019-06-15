const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $usernameLabel = labelCollabcode.render({
      content: "Username",
      labelfor: "username"
    });
    const $usernameInput = inputCollabcode.render({
      id: "username",
      required: true,
      placeholder: "seuusername"
    });
    const $usernameSpan = spanError.render("username");

    const $emailLabel = labelCollabcode.render({
      content: "E-mail",
      labelfor: "email"
    });
    const $emailInput = inputCollabcode.render({
      id: "email",
      required: true,
      placeholder: "seuemail@gmail.com",
      type: "email"
    });
    const $emailSpan = spanError.render("email");

    const $passwordLabel = labelCollabcode.render({
      content: "Password",
      labelfor: "password"
    });
    const $passwordInput = inputCollabcode.render({
      id: "password",
      required: true,
      placeholder: "suasenh@",
      type: "password"
    });
    const $passwordSpan = spanError.render("password");

    const $confirmPasswordLabel = labelCollabcode.render({
      content: "Confirm Password",
      labelfor: "confirmpassword"
    });
    const $confirmPasswordInput = inputCollabcode.render({
      id: "confirmpassword",
      required: true,
      placeholder: "suasenha@",
      type: "password"
    });
    const $confirmpasswordSpan = spanError.render("confirmpassword");

    const $btnCollabcode = btnCollabcode.render({
      content: "Signup"
    });

    return `
      ${$emailLabel}
      ${$emailInput}
      ${$emailSpan}
      ${$usernameLabel}
      ${$usernameInput}
      ${$usernameSpan}
      ${$passwordLabel}
      ${$passwordInput}
      ${$passwordSpan}
      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}
      ${$confirmpasswordSpan}
      ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();

    return `<form id="form" class="form-signup" method="POST" action="" novalidate>${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
