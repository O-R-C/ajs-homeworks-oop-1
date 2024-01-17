import Character from "./Classes/Character";
import Bowman from "./Classes/Bowman";
import Undead from "./Classes/Undead";
import Swordsman from "./Classes/Swordsman";
import Zombie from "./Classes/Zombie";
import Magician from "./Classes/Magician";

const classes = [Character, Bowman, Undead, Swordsman, Zombie, Magician];

classes.forEach((characterClass) =>
  console.log(new characterClass(`${characterClass.name}`))
);
