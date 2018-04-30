//var pHealth = 50;
var eHealth = 50;
//var pStatus = document.getElementById("player-status")
var totalModValue = 0;
var damageModifier = 0;
var playerBaseDamage = 0;

var races = { "Dragon": 0, "LizardFolk": 1 }
var weapons = { "dagger": 5, "sword": 1, "bow": 2 }
var weaponSelect = {"dagger":0,"sword":2, "bow": 3 }
var NewCharacter = function (pName, pRace, pClass, pHealth, pStatus) {
    this.name = pName
    this.race = pRace
    this.charClass = pClass
    this.charHealth = pHealth
    this.charStatus = pStatus
}


var weaponModifier = false;
var player = [{
    pName: "Drakenshadow",
    pImage: "assets/img/lizFolk/blue-dragon.png",
    pRace: "Dragon",
    pClass: "Guardian",
    pHealth: { "Dragon": 75, 1: "Dragon" },
    pStatus: "Alive",
    pItems: [],
    pPlayerBaseDamage: 15,
    attackType: ["hands", "kick", "punch"],
    attackDamage: { "hands": 1, "kick": 10, "punch": 5 }
}, {
    pName: "Ssalasskuss",
    pImage: "assets/img/lizFolk/LF-Druid-Main.png",
    pRace: "LizardFolk",
    pClass: "Druid",
    pHealth: { "LizardFolk": 75, 1: "LizardFolk" },
    pStatus: "Alive",
    pItems: [],
    pPlayerBaseDamage: 13,
    attackType: ["hands", "lightning", "grasping-vines"],
    attackDamage: { "hands": 5, "lightning": 10, "grasping-vines": 5 }
}];

var enemy = [{
    pName: "Drakenshadow",
    pImage: "assets/img/lizFolk/blue-dragon.png",
    pRace: "Dragon",
    pClass: "Guardian",
    pHealth: { "Dragon": 75, 1: "Dragon" },
    pStatus: "Alive",
    pItems: [],
    pPlayerBaseDamage: 15,
    attackType: ["hands", "kick", "punch"],
    attackDamage: { "hands": 1, "kick": 10, "punch": 5 }
}, {
    pName: "Ssalasskuss",
    pImage: "assets/img/lizFolk/LF-Druid-Main.png",
    pRace: "LizardFolk",
    pClass: "Druid",
    pHealth: { "LizardFolk": 75, 1: "LizardFolk" },
    pStatus: "Alive",
    pItems: [],
    pPlayerBaseDamage: 13,
    attackType: ["hands", "lightning", "grasping-vines"],
    attackDamage: { "hands": 5, "lightning": 10, "grasping-vines": 5 }
}];




//var charcter1 = NewCharacter("Ssalasskuss","LizardFolk","Druid","")




//console.log(character1)
function createPlayer(player, charNum) {

    var attacks = "";
    var attType = ""
    for (var i = 0; i < player[charNum].attackType.length; i++) {
        //debugger
        console.log(attType)
        attType = player[charNum].attackType[i]
        //console.log(attType)
        attacks += `<button id='${player[charNum].pName}item${i}' type="button" class="btn attack-btn btn-block" onclick="attack(player,'${player[charNum].attackType[i]}', '${player[charNum].pRace}')">${player[charNum].attackType[i]}</button><p>Damage:<span id='${player[charNum].pName}attack${i}'>${player[charNum].attackDamage[attType]}</span></p>`
        //  ////debugger 
    }
    var template = ` <div class="col-6 player">
                     <img src=${player[charNum].pImage}>
                     <button onclick="restoreHealth(player, '${player[charNum].pRace}')">Restore Health</button>
                     <p id='${player[charNum].pName}'>${player[charNum].pName}</p>
                     <p id='${player[charNum].pRace}'>${player[charNum].pHealth[player[charNum].pRace]}</p>
                     <p id='${player[charNum].pRace + player[charNum].pStatus}'>Alive</p>
                     
                     <div id="attack-buttons">`+ attacks + ` 
                     </div>
                     <div class="items">
                     <!-- <span onclick="equipItem('shield')" id="shield">Shield</span> -->
                     
                     <span onclick="equipItem(player,'Dragon','dagger', 5)" id="dagger">Dagger</span>
                     <!-- <span onclick="equipItem('bracer')" id="bracer">Bracer</span>    -->
                    </div>
                     
                     
                     </div>
                     `// <p id="player-health
    // <button id="left-hand" class="attack-btn" onclick="attack('slap', player)">Slap</button><p>Damage:<span id="left-hand-damage">1</span></p>
    // <button class="attack-btn" onclick="attack('punch',player)">Punch</button><p>Damage:<span>5</span></p>
    // <button class="attack-btn" onclick="attack('kick',player)">Kick</button><p>Damage:<span>10</span></p>
    document.getElementById("player").innerHTML += template;
    //debugger
}
function createEnemy(enemy, charNum) {

    var attacks = "";
    var attType = ""
    for (var i = 0; i < enemy[charNum].attackType.length; i++) {
        //debugger
        console.log(attType)
        attType = enemy[charNum].attackType[i]
        //console.log(attType)
        attacks += `<button id='${enemy[charNum].pName}item${i}' type="button" class="btn attack-btn btn-block" onclick="attack(enemy,'${enemy[charNum].attackType[i]}', '${enemy[charNum].pRace}')">${enemy[charNum].attackType[i]}</button><p>Damage:<span id='${enemy[charNum].pName}attack${i}'>${enemy[charNum].attackDamage[attType]}</span></p>`
        //  ////debugger 
    }
    var template = ` <div class="col-6 enemy">
                     <img src=${enemy[charNum].pImage}>
                     <button onclick="restoreHealth(enemy, '${enemy[charNum].pRace}')">Restore Health</button>
                     <p id='${enemy[charNum].pName}'>${enemy[charNum].pName}</p>
                     <p id='${enemy[charNum].pRace}'>${enemy[charNum].pHealth[enemy[charNum].pRace]}</p>
                     <p id='${enemy[charNum].pRace + enemy[charNum].pStatus}'>Alive</p>
                     
                     <div id="attack-buttons">`+ attacks + ` 
                     </div>
                     <div class="items">
                     <!-- <span onclick="equipItem('shield')" id="shield">Shield</span> -->
                     
                     <span onclick="equipItem(enemy,'${enemy[charNum].pRace}','dagger', '${weapons["dagger"]}')" id="dagger">Dagger</span>
                     <!-- <span onclick="equipItem('bracer')" id="bracer">Bracer</span>    -->
                    </div>
                     
                     
                     </div>
                     
                     `
                     // <p id="enemy-health
    // <button id="left-hand" class="attack-btn" onclick="attack('slap', enemy)">Slap</button><p>Damage:<span id="left-hand-damage">1</span></p>
    // <button class="attack-btn" onclick="attack('punch',enemy)">Punch</button><p>Damage:<span>5</span></p>
    // <button class="attack-btn" onclick="attack('kick',enemy)">Kick</button><p>Damage:<span>10</span></p>
    document.getElementById("player").innerHTML += template;
    debugger
    //debugger
}

function attack(playerAttack, attackType, playerRace) { //playerAttack: object, attackType: string, playerRace:string
    //////debugger
    var update = races[playerRace]
    //var damageChoice = races[playerRace] //takes in a string: to select a number from races[]
    playerAttack[update].pHealth[playerRace] = playerAttack[update].pHealth[playerRace] - playerAttack[update].attackDamage[attackType];
    // console.log(playerAttack[update].pHealth[playerRace])

    // console.log(playerAttack[update].attackDamage[attackType])
    // // - damageModifier;
    // console.log(`${playerAttack[update].pStatus}`)
    // console.log(playerAttack[update])
    updateHealth(playerAttack[update], playerRace)//character[races[playerRace]]
    // updateHealth()
    //console.log(character[races[playerRace]])
    updateStatus(playerAttack[update], playerRace)
    ////debugger
}
function restoreHealth(playerRestoreHealth, playerRace) {
    var update = races[playerRace]
    playerRestoreHealth[update].pHealth[playerRace] = 75;
    document.getElementById(`${playerRestoreHealth[update].pRace}`).innerText = playerRestoreHealth[update].pHealth[playerRace];//player-health
    updateStatus(player[races[playerRace]])
    // //debugger
}
function updateHealth(playerUpdateHealth, playerRace) {//playerUpdateHealth: [object object], playerRace:string
    var update = races[playerRace]; //update: number updates string
    document.getElementById(`${playerUpdateHealth.pRace}`).innerText = playerUpdateHealth.pHealth[playerRace];
    // console.log(playerUpdateHealth.pStatus)
    // console.log(playerUpdateHealth.pHealth[update]);
    //  //debugger
}
function updateStatus(playerUpdateStatus, playerRace) {
    //   var update = races[playerRace];
    //  console.log(playerUpdateStatus.pHealth[playerRace])
    if (playerUpdateStatus.pHealth[playerRace] <= 0) {
        document.getElementById(`${playerUpdateStatus.pRace + playerUpdateStatus.pStatus}`).innerText = "Dead!!";
    } else {
        document.getElementById(`${playerUpdateStatus.pRace + playerUpdateStatus.pStatus}`).innerText = "Still alive";
    }
    // debugger
}
var ItemEquip = function (name, modifier, description) {
    this.itemName = name
    this.itemModifier = modifier
    this.itemDescription = description
}
var items = {
    shield: new ItemEquip("Leather Shield", 0.5, "Shield made out of cow hide"),
    bracer: new ItemEquip("Enchanted Bracer", 5, "Damage increasing Bracer"),
    dagger: new ItemEquip("Iron Dagger", 5, "Dagger made from iron")
}
//console.log(items.dagger.itemName);


//equipItem(player, items)


function equipItem(playerEquipItem, playerRace, itemType, itemDamage) { //(object, string, string, number )   
    var update = races[playerRace]
    var itemToEquip = weaponSelect[itemType]
    console.log(itemToEquip)
debugger
    if (itemType === 'dagger') {
        playerEquipItem[update].pItems.push('dagger'); // add dagger to pItems[]
        console.log(playerEquipItem[update].attackDamage["hands"]);
        //playerEquipItem[update].attackType[itemToEquip] = itemType;
        //playerEquipItem[update].attackDamage["hands"] = itemDamage
        playerEquipItem[update].attackDamage["hands"] = weapons["dagger"];
        console.log(playerEquipItem[update].attackDamage["hands"]);
        
        console.log(playerEquipItem[update].attackType[itemToEquip]);
        
        playerEquipItem[update].attackType[itemToEquip] = itemType;
        console.log(playerEquipItem[update].attackType[itemToEquip]);
        document.getElementById(`${playerEquipItem[update].pName}item0`).innerText = playerEquipItem[update].attackType[itemToEquip]
        document.getElementById(`${playerEquipItem[update].pName}attack0`).innerText = playerEquipItem[update].attackDamage["hands"]
        debugger
        //items.itemType.itemName;
        if (weaponModifier == false) {
            //damageModifier += items.dagger.itemModifier;
            // document.getElementById("left-hand").innerText = playerEquipItem[0].pItems[0];
            // document.getElementById("left-hand-damage").innerText = (playerBaseDamage + items.dagger.itemModifier);
            weaponModifier = true;
        }
    }
}

createPlayer(player, races["LizardFolk"])
createEnemy(enemy, races["Dragon"])
//CreatePlayer(player, races["Dragon"])

//slap()
//update()