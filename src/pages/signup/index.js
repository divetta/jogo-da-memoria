(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", "flat-button");
  const $signinButton = flatButton.render("Sign in", "flat-button -active");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signinButton);
})();
