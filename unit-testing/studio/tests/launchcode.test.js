// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  // Write your unit tests here!
  test("value of organization is non profit", function () {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("value of executive director is 'Jeff'", function () {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("value of percentageCoolEmployees is '100'", function () {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("value of programsOffered is '(Web Development, Data Analysis, Liftoff)'", function () {
    let result = launchcode.programsOffered;
    expect(result).toContain("Web Development");
    expect(result).toContain("Data Analysis");
    expect(result).toContain("Liftoff");
    expect(result).toHaveLength(3);
  });

  test("returns 'Rutabagas! That doesn't work.' when passed a number that is not divisible by 2, 3 or 5", function () {
    expect(launchcode.launchOutput(37)).toBe("Rutabagas! That doesn't work.");
  });

  test("returns 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3 or 5", function () {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("returns 'Launch Rocks!' when a number that is divisible by 2 AND 5, return", function () {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
  });

  test("returns 'Code Rocks!' when a number that is divisible by 3 AND 5", function () {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("returns 'LaunchCode!' when a number that is divisible by 2 AND 3", function () {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("retuns 'Rocks!' when a number that is ONLY divisible by 5", function () {
    expect(launchcode.launchOutput(25)).toBe("Rocks!");
  });
  test("returns 'Launch!' when passed a number that is only divisible by 2", function () {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  });

  it("return 'Code!' when passed a number that is only divisible by 3", function () {
    expect(launchcode.launchOutput(9)).toBe("Code!");
  });
});
