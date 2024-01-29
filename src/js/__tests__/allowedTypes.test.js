import Bowman from "../Classes/Bowman";
import Daemon from "../Classes/Daemon";
import Magician from "../Classes/Magician";
import Swordsman from "../Classes/Swordsman";
import Undead from "../Classes/Undead";
import Zombie from "../Classes/Zombie";

const team = [Bowman, Swordsman, Magician, Daemon, Undead, Zombie];

describe("check characters", () => {
  describe("to type", () => {
    const allowedTypes = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    test.each(allowedTypes)("%p", (type) => {
      const character = team.find((character) => character.name === type);

      expect(new character("test").type).toBe(type);
    });
  });

  describe("to string", () => {
    test.each(team)("%p", (character) => {
      expect(typeof new character("test").type).toBe("string");
    });
  });
});
