describe("Find Spaceship", function () {
  beforeEach(function () {
    helpalf = new HelpAlf();
  });

  // Test case 1
  it("should find the spaceship and return its coordinates [7, 2]", () => {
    const map =
      "..........\n..........\n..........\n.......X..\n..........\n..........";
    expect(helpalf.FindSpaceship(map)).toEqual([7, 2]);
  });
});
