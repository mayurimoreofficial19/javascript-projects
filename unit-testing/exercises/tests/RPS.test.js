const rps = require("../RPS.js");

describe("RPS test", function () {
  test("return 'TIE' if player1 = player2", function () {});

  test("return 'player 2 wins' if player1 = 'rock' & player2 = 'paper'", function () {
    let output = rps("rock", "paper");
    expect(output).toBe("Player 2 wins!");
  });

  test("return 'Player 2 wins!' if player1 = 'paper' & player2 = 'scissors'", function () {
    let output = rps("paper", "scissors");
    expect(output).toBe("Player 2 wins!");
  });

  test("return 'player 2 wins' if player1 = 'scissors' & player2 = 'rock'", function () {
    let output = rps("scissors", "rock");
    expect(output).toBe("Player 1 wins!");
  });
});
