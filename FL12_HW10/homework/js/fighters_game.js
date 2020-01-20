function Fighter(fighter) {
    let name = fighter.name;
    let damage = fighter.damage;
    let hp = fighter.hp;
    let strength = fighter.strength;
    let agility = fighter.agility;
    
    let wins = 0;
    let losses = 0;
    let hpTotal = hp;
    const fullProbability = 100;

    return {
      getName() {
        return name;
      },
      getDamage() {
        return damage;
      },
      getStrength() {
        return strength;
      },
      getAgility() {
        return agility;
      },
      getHealth() {
        return hp;
      },
      attack(defender) {
          let randomValue = Math.floor(Math.random() * fullProbability + 1);
          let successProbability = fullProbability - defender.getAgility() - defender.getStrength();
          if (randomValue <= successProbability) {
            defender.dealDamage(damage);
            console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
          } else {
            console.log(`${defender.getName()} attack missed`);
          }
      },
      logCombatHistory() {
        console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
      },
      heal(value){
        hp = hp + value > hpTotal ? hpTotal : hp + value;
      },
      dealDamage(value){
        hp = hp - value < 0 ? 0 : hp - value;
      },
      addWin(){
          wins+=1;
      },
      addLoss(){
          losses+=1;
      }
    };
  }

function battle(fighter1, fighter2) {
    const trueValue = true;
    if (fighter1.getHealth() <= 0) {
        console.log(`${fighter1.getName()} is dead, battle can't be simulated`);
    } else if (fighter2.getHealth() <= 0) {
        console.log(`${fighter2.getName()} is dead, battle can't be simulated`);
    } else {
        while(trueValue) {
            if (fighter2.getHealth() > 0) {
                fighter1.attack(fighter2);
            } else { 
                console.log(`${fighter1.getName()} is a winner!`);
                fighter1.addWin();
                fighter2.addLoss();
                break;
            }
            if (fighter1.getHealth() > 0) {
                fighter2.attack(fighter1);
            } else {
                console.log(`${fighter2.getName()} is a winner!`);
                fighter2.addWin();
                fighter1.addLoss();
                break;
            }
        }
    }
}