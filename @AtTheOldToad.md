const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
    
        if (potion.name === newPotion.name) {
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
    }
    return this.potions.push(newPotion)      
  },
  removePotion(potionName) {
   for (let potion of this.potions) {
     if(potion.name === potionName) {
       return this.potions.splice(this.potions.indexOf(potion), 1)
     }
   }
    return `Potion ${potionName} is not in inventory!`;
   
  },
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if(potion.name === oldName){
        return potion.name= newName;
      }
    }
    
    
  
      return `Potion ${oldName} is not in inventory!`;
   
  },
  // Change code above this line
};