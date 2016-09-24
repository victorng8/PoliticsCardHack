class Card {

    constructor(options) {
        this.health = options.health;
        this.attackPower = options.attack;
        this.name = options.name;
        this.image = options.name;

        attack(target) {
            target.takeDamage(this.dealDamage());
        }

        takeDamage(attack) {
            this.health = this.health - attack.damage;
        }

        dealDamage() {
            return {
                damage: this.attackPower
            };
        }

    };

    /*
    var player1 = new Card({health:100,attack:10,name:"Toon1",image:"toon.png"});
    var player2 = new Card({health:50,attack:20,name:"Ninja2",image:"Ninja.png"});

    player1.attack(player2);

    console.log(player1);
    console.log(player2);
    */
