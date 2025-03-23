// Exercise 1: The Power of Variables and Operators

let gandalfTheGrey: number = 100;
let dumbledore: number = 120;

console.log(
  `Gandalf the Grey has ${gandalfTheGrey} health points and Dumbledore has ${dumbledore} health points.`
);

gandalfTheGrey += 30;
dumbledore -= 30;

console.log(
  `Now Gandalf the Grey has ${gandalfTheGrey} health points and Dumbledore has ${dumbledore} health points.`
);

if (gandalfTheGrey < dumbledore) {
  console.log("Dumbledore is the stronger!");
} else {
  console.log("Gandalf the Grey is the stronger!");
}

// Exercise 2: The Treasure Chest of Data Types

let coinCount: number = 100;
let treasureMap: string = "map";
let cursedAmulet: boolean = false;

console.log(typeof coinCount, typeof treasureMap, typeof cursedAmulet);

treasureMap = "treasureMap is now a string";

console.log(treasureMap);

// Exercise 3: The Potion Shop’s Price Calculator

let healthPotion: number = 10;
let manaPotion: number = 15;

console.log(
  `Health potion costs ${healthPotion} gold coins and mana potion costs ${manaPotion} gold coins.`
);

let totalCost: number = healthPotion * 3 + manaPotion * 2;

console.log(
  `The total cost for 3 health potions and 2 mana potions is ${totalCost} gold coins.`
);

if (totalCost > 50) {
  totalCost *= 0.8;
  console.log(
    `You have a discount of 20% and the total cost is now ${totalCost} gold coins.`
  );
} else {
  console.log("You have no discount.");
}

// Exercise 4: The Brave Knight’s Inventory

let attackPower: number = 20;
let armorName: string = "Iron Armor";
let shield: boolean = true;

console.log(`Sir Debugalot is preparing for his quest!
    Attact Power: ${attackPower},
    Armor: ${armorName},
    Shield: ${shield ? "Yes" : "No"}`);

// Exercise 5: The Bakery's Daily Earnings

let breadPrice: number = 3;
let breadSold: number = 100;
let cakePrice: number = 6;
let cakeSold: number = 50;
let dailyEarning: number = breadPrice * breadSold + cakePrice * cakeSold;

console.log(`Bread price is $${breadPrice} and cake price is $${cakePrice}.
    The bakery daily sold ${breadSold} breads and ${cakeSold} cakes.
    The bakery's total daily earnings are $${dailyEarning}`);

// Exercise 6: The Space Mission’s Fuel Check

let fuelCapacity: number = 1000;
let currentFuel: number = 500;
let checkFuel: number = fuelCapacity * 0.8;

console.log(
  `Current fuel is ${currentFuel}L and 80% of fuel capacity is ${checkFuel}L.`
);

if (currentFuel > checkFuel) {
  console.log("Fuel is above 80%.");
} else {
  console.log("Warning: Fuel below 80% capacity!");
}

// Exercise 7: The Time Traveler’s Stopwatch (Updated)

// ???????????????????????????????????????????????????????????

let currentYear: Date = new Date();
let jumpYear: number = 5;
let year: Date = new Date(currentYear.getFullYear() + jumpYear);

console.log(`Current year is ${currentYear}.`);

// ???????????????????????????????????????????????????????????

// Exercise 8: The Wizard’s Spell Strength Test

let spellPower: number = 90;
let secondSpellPower: number = 100;
let thirdSpellPower: number = 120;

if (thirdSpellPower > spellPower && thirdSpellPower > secondSpellPower) {
  console.log("The third spell is the strongest!");
} else if (secondSpellPower > spellPower) {
  console.log("The second spell is the strongest!");
} else if (spellPower > secondSpellPower && spellPower > thirdSpellPower) {
  console.log("The first spell is the strongest!");
} else {
  console.log("There is no strongest spell.");
}

//  Exercise 9: The Haunted House Mystery

let kitchenHasGhost: boolean = true;
let livingRoomHasGhost: boolean = false;

if (kitchenHasGhost && livingRoomHasGhost) {
    console.log("The house is safe.");
} else {
    console.log("The house is not safe!");
}

// 1. Pokémon Battle – Function Basics

function compareAttack(pokemon1: string, attack1: number, pokemon2: string, attack2: number) {
    if (attack1 > attack2) {
        return `${pokemon1} has the stronger attack!`;
    } else if(attack1 < attack2) {
        return `${pokemon2} has the stronger attack!`;
    }else{
        return "Both attacks are equally strong!";
    }
}

const result: string = compareAttack("Pikachu", 55, "Bulbasaur", 49);
console.log(result);