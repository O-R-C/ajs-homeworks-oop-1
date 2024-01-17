import Character from "./Classes/Character";
import Bowman from "./Classes/Bowman";
import Undead from "./Classes/Undead";
import Swordsman from "./Classes/Swordsman";
import Zombie from "./Classes/Zombie";

const classes = [Character, Bowman, Undead, Swordsman, Zombie];

classes.forEach((characterClass) =>
  console.log(new characterClass(`${characterClass.name}`))
);
