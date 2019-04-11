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
    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollabcode.render("email", "seuemail@gmail.com");

    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render("text", "seuusername");

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render("password", "suasenh@");

    const $confirmPasswordLabel = labelCollabcode.render("Confirm Password");
    const $confirmPasswordInput = inputCollabcode.render(
      "password",
      "suasenha@"
    );

    const $btnCollabcode = btnCollabcode.render("Signup");

    return `
      ${$emailLabel}
      ${$emailInput}
      ${$usernameLabel}
      ${$usernameInput}
      ${$passwordLabel}
      ${$passwordInput}
      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}
      ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();

    return `<form class="form-signup" method="POST" action="">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
