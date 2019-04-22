(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", true);
  const $signinButton = flatButton.render("Sign up");
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signinButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
})();
