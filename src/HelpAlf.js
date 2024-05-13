//HelpAlf.js
function HelpAlf() {}
HelpAlf.prototype.FindSpaceship = function (map) {
  const lines = map.trim().split("\n");

  // Check if the map has exactly 6 lines and each line has exactly 10 characters
  if (lines.length !== 6 || lines.some((line) => line.length !== 10)) {
    return "Spaceship lost forever";
  }

  // Check if "X" is found within the map
  const xIndex = lines
    .map((line) => line.indexOf("X"))
    .findIndex((index) => index !== -1);
  if (xIndex === -1) {
    return "Spaceship lost forever";
  }
  return [lines[xIndex].indexOf("X"), 5 - xIndex];
};
