(function() {
  const { hash } = window.location;
  if (paths[hash] != undefined) paths[hash]();
  else notfound();
})();

const redirect = path => {
  const $root = document.querySelector("#root");
  while ($root.firstChild) $root.removeChild($root.firstChild);

  if (paths[`#/${path}`] != undefined) paths[`#/${path}`]();
  else notfound();
};
