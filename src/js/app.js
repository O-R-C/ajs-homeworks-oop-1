import Character from "./Classes/Character";
import Bowman from "./Classes/Bowman";

const classes = [Character, Bowman];

classes.forEach((characterClass) =>
  console.log(new characterClass(`${characterClass.name}`))
);
