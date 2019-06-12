(function() {
  const { hash } = window.location;
  paths[hash] ? paths[hash]() : paths["#/404"]();
})();
