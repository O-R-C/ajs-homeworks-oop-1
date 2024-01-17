import Character from "./Classes/Character";
import Bowman from "./Classes/Bowman";
import Undead from "./Classes/Undead";

const classes = [Character, Bowman, Undead];

classes.forEach((characterClass) =>
  console.log(new characterClass(`${characterClass.name}`))
);
