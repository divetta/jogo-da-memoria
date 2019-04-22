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
    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render({
      placeholder: "seuusername"
    });

    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollabcode.render({
      placeholder: "seuemail@gmail.com",
      type: "email"
    });

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render({
      placeholder: "suasenh@",
      type: "password"
    });

    const $confirmPasswordLabel = labelCollabcode.render("Confirm Password");
    const $confirmPasswordInput = inputCollabcode.render({
      placeholder: "suasenha@",
      type: "password"
    });

    const $btnCollabcode = btnCollabcode.render("Submit");

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
