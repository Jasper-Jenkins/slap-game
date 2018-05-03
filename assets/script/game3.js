var health = 100;
var itemMod = 0;
var hits = 0
var ItemEquip = function (name, modifier, description) {
    this.itemName = name
    this.itemModifier = modifier
    this.itemDescription = description
}
var items = {
    shield: new ItemEquip("Leather Shield", -0.5, "Shield made out of cow hide"),
    bracer: new ItemEquip("Enchanted Bracer", 5, "Damage increasing Bracer"),
    dagger: new ItemEquip("Iron Dagger", 5, "Dagger made from iron")
}

function update(){
    document.getElementById('health').innerText = health
    document.getElementById('item-modifiers').innerText = itemMod
    document.getElementById('hits').innerText = hits

    console.log("you did something")
}

function slap(){
    health -= (1 + itemMod);
    
    hits++
    update()
}
function kick(){
    health -= (10 + itemMod);
    
    hits++
    update()
}
function punch(){
    health -= (5 + itemMod);
  
    hits++
    update()
}

function equipShield(){
    itemMod+= items.shield.itemModifier;
    update()
}
function equipWeapon(){
    itemMod+= items.dagger.itemModifier;
    update()
}
