const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, 
  warrior, 
  dragon };

const dmgDragon = () => {
  const dmg = Math.floor(Math.random() * (dragon.strength - 15 +1) + 15);
  return dmg;
}

const dmgWarrior = () => {
  const maxDmg = warrior.weaponDmg * warrior.strength;
  const dmg = Math.floor(Math.random() * (maxDmg - warrior.strength + 1) + warrior.strength);
  return dmg;
}
const dmgMage = () => {
  const maxDmg = mage.intelligence * 2;
  const dmg = Math.floor(Math.random() * (maxDmg - mage.intelligence +1) + mage.intelligence);

  return dmg;
}
const manaMage = () => {
  
  if (mage.mana >= 15){
    return mage.mana -= 15
  }
  else {
    return 'sem mana o suficiente';
  }
}
const gameActions = {
  warriorAct: (dmg) => {
    warrior.damage = dmg();
    dragon.healthPoints -= warrior.damage
    
  },
  mageAct: (dmg, mana) => {
    mage.damage = dmg();
    dragon.healthPoints -= mage.damage;
    mage.mana = mana();
    
  },
  dragonAct: (dmg) => {
    dragon.damage = dmg();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
    
  },
  letBattle: () => {
    gameActions.mageAct(dmgMage, manaMage);
    gameActions.warriorAct(dmgWarrior);
    gameActions.dragonAct(dmgDragon);
    
    return battleMembers;
    
  }

};
// const atackWarrior = gameActions.warriorAct;
// const atackmage = gameActions.mageAct;
// console.log(atackWarrior(dmgWarrior));
// console.log(atackmage(dmgMage, manaMage));
// console.log(gameActions.warriorAct(dmgWarrior));
// console.log(gameActions.mageAct(dmgMage, manaMage));
// console.log(gameActions.dragonAct(dmgDragon));
console.log(gameActions.letBattle(mage, warrior, dragon));