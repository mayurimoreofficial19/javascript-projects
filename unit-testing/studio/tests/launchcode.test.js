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

  test("returns 'Launch!' when passed a number that is only divisible by 2", function () {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
    expect(launchcode.launchOutput(8)).toBe("Launch!");
  });

  it("return 'Code!' when passed a number that is only divisible by 3", function () {
    expect(launchcode.launchOutput(9)).toBe("Code!");
    expect(launchcode.launchOutput(15)).toBe("Code!");
  });
});
