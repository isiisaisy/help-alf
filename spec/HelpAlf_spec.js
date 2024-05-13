describe("Find Spaceship", function () {
  beforeEach(function () {
    helpalf = new HelpAlf();
  });

  // Test case 1
  it("TC1: should find the spaceship and return its coordinates [7, 2]", () => {
    const map =
      "..........\n..........\n..........\n.......X..\n..........\n..........";
    expect(helpalf.FindSpaceship(map)).toEqual([7, 2]);
  });

  // Test case 2
  it('TC2: should not find the spaceship and return "Spaceship lost forever"', () => {
    const map = "";
    expect(helpalf.FindSpaceship(map)).toEqual("Spaceship lost forever");
  });

  // Test case 3
  it('TC3: should not find the spaceship and return "Spaceship lost forever"', () => {
    const map =
      "..........\n..........\n..........\n..........\n..........\n..........";
    expect(helpalf.FindSpaceship(map)).toEqual("Spaceship lost forever");
  });

  // Test case 4
  it('TC4: should not find the spaceship and return "Spaceship lost forever"', () => {
    const map = "X";
    expect(helpalf.FindSpaceship(map)).toEqual("Spaceship lost forever");
  });
});
