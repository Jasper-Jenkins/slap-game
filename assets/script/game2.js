function CreatePlayer(pName, pRace, pClass, pHealth, pAttack){
    this.pName = pName
    this.pRace = pRace
    this.pClass = pClass
    this.pHealth = pHealth
    this.pAttack = pAttack;
}


// var playerClassIndex = {"Warrior":0,"Druid":1}
var player = {
    Warrior: new CreatePlayer("Fierce","Dragon","Warrior",30,15),
    Druid: new CreatePlayer("Healz","Human","Druid",30,10)
}

var weapons = {"Dagger":5,"Rapier":10,"Katana":15}
var attacks = {"Punch":5,"Kick":10,"slap":1}
player.Warrior.pName
player.Warrior.pRace
player.Warrior.pClass
player.Warrior.pHealth
player.Warrior.pAttack

var combatants = [];

// function classSelect(player,){

// }

function playerSelect(playerSelect, pSelectClass){
  var playerClassIndex = {"Warrior":0,"Druid":1}
  combatants[playerClassIndex[pSelectClass]] = playerSelect[pSelectClass];
  console.log(combatants[playerClassIndex[pSelectClass]]);
//   debugger
  playerControls(combatants[playerClassIndex[pSelectClass]])

}


function attack(player, attackType){
    player.pHealth += player.pHealth - player.pAttack       
}
function playerControls(player){
   var attacks="";
   console.log(attacks.length)
      
   for (var i = 0; i < attacks.length; i++) {
    
        // attType = player.attackType[i]
        // console.log(attType)
        attacks += `<button id='${player.pName}item${i}' type="button" class="btn attack-btn btn-block" onclick="attack()">${player.pAttack}</button><p>Damage:<span id='${player.pName}attack${i}'>${player.pAttack}</span></p>`
        debugger 
    }
    var template = ` <div class="col-6 enemy">
                     <img src=${player.pImage}>
                     <button onclick="restoreHealth(enemy, '${player}')">Restore Health</button>
                     <p id='${player.pName}'>${player.pName}</p>
                     <p id='HealthFor:${player}'>${player.pHealth}</p>
                     <p id='${player + player.pStatus}'>Alive</p>
                     
                     <div id="attack-buttons">`+ attacks + ` 
                     </div>
                     <div class="items">
                     <!-- <span onclick="equipItem('shield')" id="shield">Shield</span> -->
                     <span onclick="equipItem(enemy,'${player.pRace}','dagger', '${weapons["dagger"]}')" id="dagger${player.pName}">Dagger</span>
                     <!-- <span onclick="equipItem('bracer')" id="bracer">Bracer</span>    -->
                    </div>
                    </div>`
                     
    document.getElementById("player").innerHTML += template;
    template = `<div id=""Name:${player.pName}`;
    debugger;
    document.getElementById("player").innerHTML = template;
    debugger;
}
