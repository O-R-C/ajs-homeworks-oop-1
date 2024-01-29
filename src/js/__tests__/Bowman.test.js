import Bowman from "../Classes/Bowman";

describe("test class Bowman", () => {
  test("correct create", () => {
    const result = new Bowman("Bowman");

    expect(result).toEqual({
      level: 1,
      attack: 25,
      defence: 25,
      health: 100,
      _type: "Bowman",
      _name: "Bowman",
    });
  });

  test("get name", () => {
    const result = new Bowman("Bowman");

    expect(result.name).toBe("Bowman");
  });

  test("nice", () => {
    const result = new Bowman("Bowman", "Daemon");

    expect(result).toEqual({
      level: 1,
      attack: 25,
      defence: 25,
      health: 100,
      _type: "Daemon",
      _name: "Bowman",
    });
  });
});
