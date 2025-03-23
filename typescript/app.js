"use strict";
// Exercise 1: The Power of Variables and Operators
let gandalfTheGrey = 100;
let dumbledore = 120;
console.log(`Gandalf the Grey has ${gandalfTheGrey} health points and Dumbledore has ${dumbledore} health points.`);
gandalfTheGrey += 30;
dumbledore -= 30;
console.log(`Now Gandalf the Grey has ${gandalfTheGrey} health points and Dumbledore has ${dumbledore} health points.`);
if (gandalfTheGrey < dumbledore) {
    console.log("Dumbledore is the stronger!");
}
else {
    console.log("Gandalf the Grey is the stronger!");
}
// Exercise 2: The Treasure Chest of Data Types
let coinCount = 100;
let treasureMap = "map";
let cursedAmulet = false;
console.log(typeof coinCount, typeof treasureMap, typeof cursedAmulet);
treasureMap = "treasureMap is now a string";
console.log(treasureMap);
// Exercise 3: The Potion Shop’s Price Calculator
let healthPotion = 10;
let manaPotion = 15;
console.log(`Health potion costs ${healthPotion} gold coins and mana potion costs ${manaPotion} gold coins.`);
let totalCost = healthPotion * 3 + manaPotion * 2;
console.log(`The total cost for 3 health potions and 2 mana potions is ${totalCost} gold coins.`);
if (totalCost > 50) {
    totalCost *= 0.8;
    console.log(`You have a discount of 20% and the total cost is now ${totalCost} gold coins.`);
}
else {
    console.log("You have no discount.");
}
// Exercise 4: The Brave Knight’s Inventory
let attackPower = 20;
let armorName = "Iron Armor";
let shield = true;
console.log(`Sir Debugalot is preparing for his quest!
    Attact Power: ${attackPower},
    Armor: ${armorName},
    Shield: ${shield ? "Yes" : "No"}`);
// Exercise 5: The Bakery's Daily Earnings
let breadPrice = 3;
let breadSold = 100;
let cakePrice = 6;
let cakeSold = 50;
let dailyEarning = breadPrice * breadSold + cakePrice * cakeSold;
console.log(`Bread price is $${breadPrice} and cake price is $${cakePrice}.
    The bakery daily sold ${breadSold} breads and ${cakeSold} cakes.
    The bakery's total daily earnings are $${dailyEarning}`);
// Exercise 6: The Space Mission’s Fuel Check
let fuelCapacity = 1000;
let currentFuel = 500;
let checkFuel = fuelCapacity * 0.8;
console.log(`Current fuel is ${currentFuel}L and 80% of fuel capacity is ${checkFuel}L.`);
if (currentFuel > checkFuel) {
    console.log("Fuel is above 80%.");
}
else {
    console.log("Warning: Fuel below 80% capacity!");
}
// Exercise 7: The Time Traveler’s Stopwatch (Updated)
// ???????????????????????????????????????????????????????????
let currentYear = new Date();
let jumpYear = 5;
let year = new Date(currentYear.getFullYear() + jumpYear);
console.log(`Current year is ${currentYear}.`);
// ???????????????????????????????????????????????????????????
// Exercise 8: The Wizard’s Spell Strength Test
let spellPower = 90;
let secondSpellPower = 100;
let thirdSpellPower = 120;
if (thirdSpellPower > spellPower && thirdSpellPower > secondSpellPower) {
    console.log("The third spell is the strongest!");
}
else if (secondSpellPower > spellPower) {
    console.log("The second spell is the strongest!");
}
else if (spellPower > secondSpellPower && spellPower > thirdSpellPower) {
    console.log("The first spell is the strongest!");
}
else {
    console.log("There is no strongest spell.");
}
//  Exercise 9: The Haunted House Mystery
let kitchenHasGhost = true;
let livingRoomHasGhost = false;
if (kitchenHasGhost && livingRoomHasGhost) {
    console.log("The house is safe.");
}
else {
    console.log("The house is not safe!");
}
// 1. Pokémon Battle – Function Basics
function compareAttack(pokemon1, attack1, pokemon2, attack2) {
    if (attack1 > attack2) {
        return `${pokemon1} has the stronger attack!`;
    }
    else if (attack1 < attack2) {
        return `${pokemon2} has the stronger attack!`;
    }
    else {
        return "Both attacks are equally strong!";
    }
}
const result = compareAttack("Pikachu", 55, "Bulbasaur", 49);
console.log(result);
