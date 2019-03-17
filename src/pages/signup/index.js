(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signinButton = flatButton.render("Sign up", true);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signinButton);
})();
