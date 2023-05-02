class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res
    }
    attack(target){
        target.res = target.res - this.power
        console.log(target.res)
    }
}

class Effect extends Card{
    constructor(name, cost, stat, amt){
        super(name, cost);
        this.stat = stat;
        this.amt = amt;
    }
    text(){
        let magnitude = 'null'
        if(this.amt > 0){
            magnitude = 'increase'
        }
        else{
            magnitude = 'decrease'
        }
        console.log(`${magnitude} the target's ${this.stat} by ${this.amt}`)
    }
    play(target){
        if(this.stat === 'power'){
            target.power += this.amt
        }
        else if(this.stat === 'res'){
            target.res += this.amt
        }
        console.log(`target res: ${target.res}, target power: ${target.power}`)
    }
}


const unitOne = new Unit("Red Belt Ninja", 3, 3, 4);
const unitTwo = new Unit("Black Belt Ninja", 4, 5, 4);

const effectOne = new Effect("Hard Algorithm", 2, 'res', 3);
const effectTwo = new Effect("Unhandled Promise Rejection", 1, 'res', -2);
const effectThree = new Effect("Pair Programming", 3, 'power', 2);

effectThree.text();
effectThree.play(unitOne);
unitOne.attack(unitTwo);