//HelpAlf.js
function HelpAlf() {}
HelpAlf.prototype.FindSpaceship = function (map) {
  if (map == "" || map == "X") {
    return "Spaceship lost forever";
  }
  const lines = map.split("\n");
  for (let y = lines.length - 1; y >= 0; y--) {
    const x = lines[y].indexOf("X");
    if (x !== -1) {
      return [x, lines.length - y - 1];
    }
  }
  return "Spaceship lost forever";
};
